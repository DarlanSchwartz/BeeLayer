import { useState } from 'react';
import PageDefault from './Default.page';
import PaymentMethodList from '../components/PaymentMethodList.component';
import AddNewCardButton from '../components/AddNewCardButton.component';
import ComponentBox from '../components/ComponentBox.component';
import { DEFAULT_NEW_CARD_DATA, DEFAULT_PAYMENT_METHODS } from '../Constants';
import FormAddNewCard from '../components/FormAddNewCard.component';
import { NewCardData, PaymentMethodData } from '../types';

enum CheckoutState {
    SELECT_CARD,
    INSERT_CARD_DATA,
    VALIDATE_CARD,
    INSERT_CARD_VALIDATION_VALUE,
    VALIDATION_FINISH
}



export default function PageCheckout() {
    const [currentState, setCurrentState] = useState<CheckoutState>(CheckoutState.SELECT_CARD);
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethodData[]>(DEFAULT_PAYMENT_METHODS);
    const [formData, setFormData] = useState<NewCardData>(DEFAULT_NEW_CARD_DATA);
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

    return (
        <PageDefault>
            <div style={{ height: 94 }}></div>
            {
                currentState == CheckoutState.SELECT_CARD &&
                <ComponentBox>
                    <PaymentMethodList paymentMethods={paymentMethods} />
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
                <ComponentBox>
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
                <ComponentBox>

                </ComponentBox >
            }
            {/* <Modal content={<p>Teste</p>} /> */}
        </PageDefault>
    );
}
