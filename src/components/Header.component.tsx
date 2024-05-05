import styled from "styled-components";

export default function Header() {
    return (
        <HeaderDiv style={{ height: 94 }}>
            <span>Aplicativo do Parceiro</span>
        </HeaderDiv>
    );
}

const HeaderDiv = styled.div`
    height: 94px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        color:white;
    }
`;
