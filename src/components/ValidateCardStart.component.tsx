import styled from "styled-components";
import ComponentBoxHeader from "./ComponentBoxHeader.mini";
import Button from "./Button.component";

type ValidateCardStartProps = {
    backClick?: () => void;
};

export default function ValidateCardStart({ backClick }: ValidateCardStartProps) {
    return (
        <>
            <ComponentBoxHeader title="Valide seu Cartão" iconClick={backClick} />
            <ValidateContainer>
                <MainContent>
                    <img src="/validate_card.svg" alt="" />
                    <p>A verificação do seu cartão não é obrigatória, porém compras realizadas com cartões não verificados serão limitadas a R$100 por dia.</p>
                </MainContent>

                <div style={{ width: '100%' }}>
                    <Button
                        text="Validar"
                        type="button"
                        onClick={() => { }}
                    />
                    <Button
                        text="Validar depois"
                        type="button"
                        onClick={() => { }}
                        style={{ marginTop: 10, marginBottom: 20 }}
                    />
                </div>
            </ValidateContainer>
        </>
    );
}

const MainContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
    img{
        max-width: 100px;
    }

    p{
        text-align: center;
        font-weight: 400;
        font-size: 13px;
        line-height: 19px;
    }
`;

const ValidateContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 420px;
`;
