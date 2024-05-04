import styled from 'styled-components';
import { FaAngleLeft } from "react-icons/fa";
import { Colors } from '../style/Colors';
import React from 'react';
import { IoClose } from "react-icons/io5";

type ComponentBoxHeaderProps = {
    title: string;
    iconClick?: () => void;
    iconStyle?: React.CSSProperties;
    iconType?: "left-arrow" | "close";
};

export default function ComponentBoxHeader({ title, iconClick, iconStyle, iconType }: ComponentBoxHeaderProps) {
    return (
        <PaymentMethodHeader>
            {
                iconType !== undefined && iconType == "left-arrow" ? <FaAngleLeft onClick={iconClick} className='icon' style={iconStyle} />
                    :
                    iconType == "close" ?
                        <IoClose onClick={iconClick} className='icon' style={iconStyle} />
                        :
                        <FaAngleLeft onClick={iconClick} className='icon' style={iconStyle} />
            }
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
    flex-shrink: 0;
    h1{
        font-weight: 600;
        font-size: 20px;
    }

    .icon{
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        color: ${Colors.main};
        cursor: pointer;
    }
`;
