import styled from 'styled-components';
import { Colors } from '../style/Colors';
import React from 'react';

type ButtonProps = {
    text?: string;
    onClick?: () => void;
    enabled?: boolean;
    type?: "submit" | "reset" | "button";
    style?: React.CSSProperties;
    loading?: boolean;

};
export default function Button({ text, loading, ...props }: ButtonProps) {
    return (
        <SCButton {...props} disabled={loading}>
            {loading ? "Loading..." : <span> {text}</span>}
        </SCButton>
    );
}

const SCButton = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${Colors.main};
    color:white;
    border: 0;
    font-size: 17px;
    font-weight: 800;
    text-align: center;
    justify-content: center;
    border-radius: 20px;
    height: 40px;
    &:enabled{
            &:hover{
                border: 1px solid ${Colors.main};
                background-color: white;
                color:${Colors.main};
            }
    }

    &:disabled{
        opacity: 0.5;
    }
`;
