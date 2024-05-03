import React from 'react';
import styled from 'styled-components';
import { Colors } from '../style/Colors';

type DefaultPageProps = {
    children?: React.ReactNode;
};

export default function PageDefault({ children }: DefaultPageProps) {
    return (
        <PageContainer>
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