import React from 'react';
import styled from 'styled-components';
import ComponentBox from './ComponentBox.component';

type ModalProps = {
    content?: React.ReactNode;
};

export default function Modal({ content }: ModalProps) {
    return (
        <ModalContainer>
            <ComponentBox>
                {content}
            </ComponentBox>
        </ModalContainer>
    );
}

const ModalContainer = styled.main`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    background-color: #0000004b;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;
