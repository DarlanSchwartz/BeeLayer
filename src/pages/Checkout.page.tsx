import { useState } from 'react';
import PageDefault from './Default.page';
import PaymentMethodList from '../components/PaymentMethodList.component';
import AddNewCardButton from '../components/AddNewCardButton.component';
import ComponentBox from '../components/ComponentBox.component';
import { DEFAULT_NEW_CARD_DATA, DEFAULT_PAYMENT_METHODS } from '../Constants';
import FormAddNewCard from '../components/FormAddNewCard.component';
import { NewCardData, PaymentMethodData } from '../types';
import ValidateCard from '../components/ValidateCard.component';

enum CheckoutState {
    SELECT_CARD,
    INSERT_CARD_DATA,
    VALIDATE_CARD,
}



export default function PageCheckout() {
    const [currentState, setCurrentState] = useState<CheckoutState>(CheckoutState.VALIDATE_CARD);
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethodData[]>(DEFAULT_PAYMENT_METHODS);
    const [formData, setFormData] = useState<NewCardData>(DEFAULT_NEW_CARD_DATA);
    const [validatingIndex, setValidatingIndex] = useState<number | undefined>();
    function changeState(state: CheckoutState) {
        setCurrentState(state);
    }

    function onAddNewCard(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newPaymentMethod: PaymentMethodData = {
            final: formData.cardNumber,
            icon: "/visa.svg",
            name: "Cartão de crédito novo",
            ownerName: formData.ownerName,
            isMain: false,
            isSelected: false,
            isValidated: false
        };
        setPaymentMethods([...paymentMethods, newPaymentMethod]);
        setFormData(DEFAULT_NEW_CARD_DATA);
        changeState(CheckoutState.SELECT_CARD);
    }

    function startValidation(cardIndex: number) {
        setValidatingIndex(cardIndex);
        setCurrentState(CheckoutState.VALIDATE_CARD);
    }

    function validateCard() {
        if (validatingIndex !== undefined && paymentMethods[validatingIndex] !== undefined) {
            paymentMethods[validatingIndex].isValidated = true;
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

        //show modal
    }

    function getCardFinalNumbers(): string {
        return validatingIndex !== undefined ? getLastFourLetters(paymentMethods[validatingIndex].final) : "NULL";
    }

    function getLastFourLetters(input: string): string {
        if (input.length <= 4) {
            return input;
        }

        return input.substring(input.length - 4);
    }

    return (
        <PageDefault>
            <div style={{ height: 94 }}></div>
            {
                currentState == CheckoutState.SELECT_CARD &&
                <ComponentBox style={{ height: 510 }}>
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
                <ComponentBox style={{ height: 510 }}>
                    <FormAddNewCard
                        formData={formData}
                        setFormData={(data) => setFormData(data)}
                        backClick={() => changeState(CheckoutState.SELECT_CARD)}
                        onSubmit={onAddNewCard}
                        onCancel={() => {
                            changeState(CheckoutState.SELECT_CARD);
                            setFormData(DEFAULT_NEW_CARD_DATA);
                        }}
                    />
                </ComponentBox >
            }
            {
                currentState == CheckoutState.VALIDATE_CARD &&
                <ComponentBox style={{ minHeight: 510 }}>
                    <ValidateCard
                        backClick={() => changeState(CheckoutState.SELECT_CARD)}
                        cardFinalNumbers={getCardFinalNumbers()}

                    />
                </ComponentBox >
            }
            {/* <Modal content={<p>Teste</p>} /> */}
        </PageDefault>
    );
}
