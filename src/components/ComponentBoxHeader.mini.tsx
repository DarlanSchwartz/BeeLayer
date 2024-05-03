import styled from 'styled-components';
import { FaAngleLeft } from "react-icons/fa";
import { Colors } from '../style/Colors';

export default function ComponentBoxHeader({ title, iconClick }: { title: string; iconClick?: () => void; }) {
    return (
        <PaymentMethodHeader>
            <FaAngleLeft onClick={iconClick} className='icon' />
            <h1>{title}</h1>
        </PaymentMethodHeader>
    );
}

const PaymentMethodHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 80px;
    h1{
        font-weight: 600;
        font-size: 20px;
    }

    .icon{
        position: absolute;
        left: 0;
        top:50%;
        transform: translateY(-50%);
        color: ${Colors.main};
        cursor: pointer;
    }
`;
