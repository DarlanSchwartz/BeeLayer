import React from "react";
import { Colors } from "../style/Colors";
import styled from "styled-components";


type ComponentBoxProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
};

export default function ComponentBox({ children, style }: ComponentBoxProps) {
    return (
        <ComponentBoxContainer style={style}>
            {children}
        </ComponentBoxContainer>
    );
}

const ComponentBoxContainer = styled.div`
    width: 100%;
    border-radius: 30px;
    background-color: ${Colors.componentBoxBackground} ;
    padding: 20px;
    padding-top: 0;
    padding-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow-y: auto;
`;
