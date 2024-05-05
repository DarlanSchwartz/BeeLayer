import styled from "styled-components";
import ComponentBoxHeader from "./ComponentBoxHeader.mini";
import Button from "./Button.component";
import { useState } from "react";
import { Colors } from "../style/Colors";
import { TiDeleteOutline } from "react-icons/ti";
import { IoIosCheckmarkCircle } from "react-icons/io";
type ValidateCardStartProps = {
    backClick?: () => void;
    cardFinalNumbers: string;
    onValidate: () => Promise<void>;
};

enum ValitationState {
    START,
    INPUT_CONFIRMATION_VALUE,
    ERROR,
    SUCCESS,
    BLOCKED
}

export default function ValidateCard({ backClick, cardFinalNumbers, onValidate }: ValidateCardStartProps) {
    const [currentState, setCurrentState] = useState<ValitationState>(ValitationState.START);

    return (
        <>
            <ComponentBoxHeader title="Valide seu Cartão" iconClick={backClick} iconStyle={{ left: '0' }} />
            <ValidateContainer>
                {
                    currentState == ValitationState.START &&
                    <>
                        <MainContent>
                            <img src="/validate_card.svg" alt="" />
                            <p>A verificação do seu cartão não é obrigatória, porém compras realizadas com cartões não verificados serão limitadas a R$100 por dia.</p>
                        </MainContent>

                        <div style={{ width: '100%' }}>
                            <Button
                                text="Validar"
                                type="button"
                                onClick={() => setCurrentState(ValitationState.INPUT_CONFIRMATION_VALUE)}
                            />
                            <Button
                                text="Validar depois"
                                type="button"
                                onClick={backClick}
                                style={{ marginTop: 10, marginBottom: 20 }}
                            />
                        </div>
                    </>
                }
                {
                    currentState == ValitationState.INPUT_CONFIRMATION_VALUE &&
                    <>
                        <MainContent>
                            <img src="/validate_card.svg" alt="" />
                            <p>Uma cobrança aleatória entre R$ 0,50 e R$ 5,00 será realizada em seu cartão de crédito, terminando em <strong>{cardFinalNumbers}</strong>.</p>
                            <p>Verifique o valor da cobrança teste no extrato do seu cartão, <strong>o valor será estornado automaticamente.</strong></p>
                        </MainContent>
                        <InputContainer>
                            <p>Digite o valor cobrado de seu cartão.</p>
                            <input type="text" name="" id="" placeholder="R$  0,00" />
                            <a>Pagar com pix</a>
                        </InputContainer>

                        <div style={{ width: '100%' }}>
                            <Button
                                text="Validar"
                                type="button"
                                onClick={async () => {
                                    await onValidate();
                                    setCurrentState(ValitationState.SUCCESS);
                                }}
                            />
                            <Button
                                text="Validar depois"
                                type="button"
                                onClick={backClick}
                                style={{ marginTop: 10, marginBottom: 20 }}
                            />
                        </div>
                    </>
                }
                {
                    currentState == ValitationState.ERROR &&
                    <>
                        <MainContent>
                            <TiDeleteOutline style={{ color: "red", fontSize: "60" }} />
                            <p><strong>Erro na validação</strong></p>
                            <p style={{ color: "red" }}><strong>Você digitou um valor que não coincide com a cobrança aleatória.</strong> Você possui mais 2 tentativas até que seu usuário seja bloqueado de adicionar novos cartões temporariamente.</p>
                        </MainContent>
                        <InputContainer>
                            <a>Pagar com pix</a>
                        </InputContainer>

                        <div style={{ width: '100%' }}>
                            <Button
                                text="Tentar novamente"
                                type="button"
                                onClick={() => setCurrentState(ValitationState.INPUT_CONFIRMATION_VALUE)}
                            />
                            <Button
                                text="Validar depois"
                                type="button"
                                onClick={backClick}
                                style={{ marginTop: 10, marginBottom: 20 }}
                            />
                        </div>
                    </>
                }
                {
                    currentState == ValitationState.SUCCESS &&
                    <>
                        <MainContent>
                            <IoIosCheckmarkCircle style={{ color: "green", fontSize: "60" }} />
                            <p><strong>Tudo Certo</strong></p>
                            <p style={{ color: "green" }}><strong>Seu cartão foi validado! Agora você pode consumir seus Bizuus sem limite de compra. </strong></p>
                        </MainContent>
                        <div style={{ width: '100%' }}>
                            <Button
                                text="Voltar para o carrinho"
                                type="button"
                                onClick={backClick}
                            />
                            <Button
                                text="Validar depois"
                                type="button"
                                style={{ marginTop: 10, marginBottom: 20 }}
                                onClick={backClick}
                            />
                        </div>
                    </>
                }
                {
                    currentState == ValitationState.BLOCKED &&
                    <>
                        <MainContent>
                            <TiDeleteOutline style={{ color: "red", fontSize: "60" }} />
                            <p><strong>Bloqueio de cartão</strong></p>
                            <p style={{ color: "red" }}>Você digitou 3 vezes um valor que não coincide com a cobrança aleatória. <strong>Este cartão foi bloqueado como meio de pagamento.</strong></p>
                        </MainContent>
                        <InputContainer>
                            <a>Pagar com pix</a>
                        </InputContainer>

                        <div style={{ width: '100%' }}>
                            <Button
                                text="Voltar para a loja"
                                type="button"
                                onClick={backClick}
                                style={{ marginTop: 10, marginBottom: 20 }}
                            />
                        </div>
                    </>
                }
            </ValidateContainer>
        </>
    );
}

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;

    input{
        width: 195px;
        height: 60px;
        border: 0;
        border-radius: 10px;
        background-color: ${Colors.borderGray};
        color:${Colors.gray};
        text-align: center;
        font-size: 20px;
        letter-spacing: 2px;
    }

    a{
        font-size: 13px;
        font-weight: 700;
        color: ${Colors.main};
        text-align: center;
        text-decoration: underline;
        margin-bottom: 40px;
        margin-top: 20px;
    }

    p{
        text-align: center;
        font-weight: 400;
        font-size: 13px;
        line-height: 19px;
    }
`;

const MainContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
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
