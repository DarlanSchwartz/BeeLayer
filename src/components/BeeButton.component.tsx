import styled from 'styled-components';

export default function BeeButton() {
    return (
        <SCBeeButton>
            <span>Conectar com Bee ID</span>
        </SCBeeButton>
    );
}


const SCBeeButton = styled.button`

    width: 100%;
    max-width: 294px;
    background-color: #27272a;
    color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border: 0;
    span{
        font-size: 16px;
        font-weight: 300;
    }

    &:enabled{
        &:hover{
            background-color: #deb533;
        }
    }
`;