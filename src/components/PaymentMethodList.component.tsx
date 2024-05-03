import styled from 'styled-components';
import { PaymentMethodData } from '../types';
import PaymentMethod from './PaymentMethod.mini';
import ComponentBoxHeader from './ComponentBoxHeader.mini';


type PaymentMethodListData = {
    paymentMethods: PaymentMethodData[];
};

export default function PaymentMethodList({ paymentMethods }: PaymentMethodListData) {
    return (
        <>
            <ComponentBoxHeader title='Formas de pagamento' />
            <MethodsContainer>
                {
                    paymentMethods.map(method => {
                        return <PaymentMethod data={method} />;
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
`;

