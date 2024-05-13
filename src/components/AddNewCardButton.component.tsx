import React from 'react';
import styled from 'styled-components';
import { FaPlus } from "react-icons/fa";
import { Colors } from '../style/Colors';

type AddNewCardButtonProps = {
    style?: React.CSSProperties;
    onClick?: () => void;
};

export default function AddNewCardButton({ style, onClick }: AddNewCardButtonProps) {
    return (
        <SCAddNewCardButton style={style} onClick={onClick}>
            <FaPlus style={{ color: Colors.main }} />
            <span>Adicionar novo cartão</span>
        </SCAddNewCardButton>
    );
}

const SCAddNewCardButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: transparent;
    border: 0;
    height: 40px;
    font-size: 14px;

    &:hover{
        *{
            opacity: 0.5;
        }
    }
`;
