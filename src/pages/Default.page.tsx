import React from 'react';
import styled from 'styled-components';
import { Colors } from '../style/Colors';
import { ToastContainer } from 'react-toastify';

type DefaultPageProps = {
    children?: React.ReactNode;
};

export default function PageDefault({ children }: DefaultPageProps) {
    return (
        <PageContainer>
            <ToastContainer
                style={{
                    width: 375,
                    height: 200,
                }}
            />
            {children}
        </PageContainer>
    );
}

const PageContainer = styled.main`
    width: 375px;
    height: 600px;
    position: relative;
    background-color: ${Colors.main};
`;