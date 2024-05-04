import React from 'react';
import styled from 'styled-components';
import ComponentBox from './ComponentBox.component';
import ComponentBoxHeader from './ComponentBoxHeader.mini';

type ModalProps = {
    content?: React.ReactNode;
    name: string;
    onClickClose?: () => void;
};

export default function Modal({ content, name, onClickClose }: ModalProps) {
    return (
        <ModalContainer>
            <ComponentBox>
                <ComponentBoxHeader title={name} iconStyle={{ right: '0' }} iconType='close' iconClick={onClickClose} />
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

    p{
        font-size: 13px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 20px;
    }

    button{
        margin-bottom: 20px;
    }
`;
