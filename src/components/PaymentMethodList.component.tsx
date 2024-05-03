import styled from 'styled-components';
import { PaymentMethodData } from '../types';
import PaymentMethod from './PaymentMethod.mini';
import ComponentBoxHeader from './ComponentBoxHeader.mini';


type PaymentMethodListData = {
    paymentMethods: PaymentMethodData[];
    onValidateClick: (methodIndex: number) => void;
};

export default function PaymentMethodList({ paymentMethods, onValidateClick }: PaymentMethodListData) {
    return (
        <>
            <ComponentBoxHeader title='Formas de pagamento' />
            <MethodsContainer>
                {
                    paymentMethods.map((method, index) => {
                        return <PaymentMethod data={method} onValidateClick={() => onValidateClick(index)} />;
                    })
                }
            </MethodsContainer>
        </>
    );
}

const MethodsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
`;

