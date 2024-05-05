import styled from "styled-components";
import { Colors } from "../style/Colors";

type IconButtonProps = {
    text: string;
    icon: string;
    onClick?: () => void;
};

export default function IconButton({ text, icon, onClick }: IconButtonProps) {
    return (
        <SCIconButton onClick={onClick}>
            <img src={icon} alt="" />
            <span> {text}</span>
        </SCIconButton>
    );
}

const SCIconButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    background: 0;
    border: 1px solid ${Colors.borderGray};
    width: 100%;
    max-width: 294px;
    border-radius: 10px;
    height: 48px;
    span{
        font-weight: 700;
        font-size: 13px;
    }
`;
