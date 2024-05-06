import { useEffect, useState } from 'react';
import PageDefault from './Default.page';
import PaymentMethodList from '../components/PaymentMethodList.component';
import AddNewCardButton from '../components/AddNewCardButton.component';
import ComponentBox from '../components/ComponentBox.component';
import { DEFAULT_NEW_CARD_DATA, DEFAULT_PAYMENT_METHODS } from '../Constants';
import FormAddNewCard from '../components/FormAddNewCard.component';
import { NewCardData, PaymentMethodData } from '../types';
import ValidateCard from '../components/ValidateCard.component';
import Modal from '../components/Modal.modal';
import Button from '../components/Button.component';
import Header from '../components/Header.component';
import API from '../API';
import { CardDTO } from '../main.types';

enum CheckoutState {
    SELECT_CARD,
    INSERT_CARD_DATA,
    VALIDATE_CARD,
}

enum CheckoutModal {
    INVALID,
    BLOCKED
}

export default function PageCheckout() {
    const [currentState, setCurrentState] = useState<CheckoutState>(CheckoutState.SELECT_CARD);
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethodData[]>(DEFAULT_PAYMENT_METHODS);
    const [formData, setFormData] = useState<NewCardData>(DEFAULT_NEW_CARD_DATA);
    const [loadingCheck, setLoadingCheck] = useState<boolean>(false);
    const [loadingRegister, setLoadingRegister] = useState<boolean>(false);
    const [validatingIndex, setValidatingIndex] = useState<number | undefined>();
    const [currentModal, setCurrentModal] = useState<CheckoutModal | undefined>();
    const [userToken, setUserToken] = useState<string | undefined | null>();

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const token = urlParams.get('token');
        setUserToken(token);

    }, []);

    function changeState(state: CheckoutState) {
        setCurrentState(state);
    }

    async function onAddNewCard(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!userToken) return;

        const newPaymentMethod: PaymentMethodData = {
            cardNumber: formData.cardNumber,
            icon: "/visa.svg",
            name: "Cartão de crédito novo",
            ownerName: formData.ownerName,
            isMain: false,
            isSelected: false,
            isValidated: false,
            cpf: formData.cpf
        };

        const dataCheck = {
            cardCPF: formData.cpf,
            cardNumber: formData.cardNumber,
            userCPF: formData.cpf
        };
        setLoadingCheck(true);
        const result = await API.checkCard(userToken, dataCheck);
        setLoadingCheck(false);

        if (result.data.isValid) {
            newPaymentMethod.isValidated = true;
        }

        setPaymentMethods([...paymentMethods, newPaymentMethod]);
        setFormData(DEFAULT_NEW_CARD_DATA);
        changeState(CheckoutState.SELECT_CARD);
    }

    function startValidation(cardIndex: number) {
        setValidatingIndex(cardIndex);
        setCurrentState(CheckoutState.VALIDATE_CARD);
    }

    async function validateCard() {

        if (validatingIndex !== undefined && paymentMethods[validatingIndex] !== undefined && userToken) {
            const newCard: CardDTO = {
                cardCPF: paymentMethods[validatingIndex].cpf,
                cardNumber: paymentMethods[validatingIndex].cardNumber,
                userCPF: paymentMethods[validatingIndex].cpf,
                isValid: true
            };
            setLoadingRegister(true);
            const result = await API.registerCard(userToken, newCard);
            setLoadingRegister(false);
            console.log(result);
            paymentMethods[validatingIndex].isValidated = true;
            setPaymentMethods([...paymentMethods]);
        }
    }

    function selectPaymentMethod(cardIndex: number) {
        if (paymentMethods[cardIndex].isValidated) {
            const methods = [...paymentMethods];
            methods.forEach(m => m.isSelected = false);
            methods[cardIndex].isSelected = true;
            setPaymentMethods(methods);
            return;
        }

        setValidatingIndex(cardIndex);
        setCurrentModal(CheckoutModal.INVALID);
        //show modal
    }

    function getCardFinalNumbers(): string {
        return validatingIndex !== undefined ? getLastFourLetters(paymentMethods[validatingIndex].cpf) : "NULL";
    }

    function getLastFourLetters(input: string): string {
        if (input.length <= 4) {
            return input;
        }

        return input.substring(input.length - 4);
    }

    return (
        <PageDefault>
            <Header />
            {
                currentState == CheckoutState.SELECT_CARD &&
                <ComponentBox style={{ height: 600 }}>
                    <PaymentMethodList
                        paymentMethods={paymentMethods}
                        onValidateClick={startValidation}
                        onSelectMethod={selectPaymentMethod}
                    />
                    <AddNewCardButton style={{
                        marginTop: 20,
                        marginBottom: 20
                    }}
                        onClick={() => changeState(CheckoutState.INSERT_CARD_DATA)}
                    />
                </ComponentBox >
            }
            {
                currentState == CheckoutState.INSERT_CARD_DATA &&
                <ComponentBox style={{ height: 600 }}>
                    <FormAddNewCard
                        formData={formData}
                        setFormData={(data) => setFormData(data)}
                        backClick={() => changeState(CheckoutState.SELECT_CARD)}
                        onSubmit={onAddNewCard}
                        loading={loadingCheck}
                        onCancel={() => {
                            changeState(CheckoutState.SELECT_CARD);
                            setFormData(DEFAULT_NEW_CARD_DATA);
                        }}
                    />
                </ComponentBox >
            }
            {
                currentState == CheckoutState.VALIDATE_CARD &&
                <ComponentBox style={{ minHeight: 600 }}>
                    <ValidateCard
                        backClick={() => changeState(CheckoutState.SELECT_CARD)}
                        cardFinalNumbers={getCardFinalNumbers()}
                        onValidate={validateCard}
                        loading={loadingRegister}
                    />
                </ComponentBox >
            }
            {
                currentModal == CheckoutModal.INVALID &&
                <Modal
                    name={"Cartão não validado"}
                    content={
                        <>
                            <p>A verificação de cartão de terceiro é obrigatória antes de poder usar este meio de pagamento. </p>
                            <Button text='Validar cartão' onClick={() => {
                                if (validatingIndex != undefined) {
                                    startValidation(validatingIndex);
                                    setCurrentModal(undefined);
                                }
                            }} />
                        </>
                    }
                    onClickClose={() => setCurrentModal(undefined)}
                />
            }
            {
                currentModal == CheckoutModal.BLOCKED &&
                <Modal
                    name={"Cartão bloqueado"}
                    content={
                        <>
                            <p>Este cartão está bloqueado e não pode ser usado como meio de pagamento no Bizuu. </p>
                        </>
                    }
                    onClickClose={() => setCurrentModal(undefined)}
                />
            }
        </PageDefault>
    );
}
