import styled from "styled-components";
import Header from "../components/Header.component";
import PageDefault from "./Default.page";
import BeeLirouLoginInput from "../components/BeeLirouLoginInput.component";
import { useState } from "react";
import BeeAuthButton from "../components/BeeAuthButton.component";
import { RegisterDTO } from "../main.types";
import API from "../API";
import { useNavigate } from "react-router-dom";
import { clearSymbols, formatCPF, showMessage } from "../Utils";
import { AxiosError } from "axios";
import SucessToast from "../components/ToastSucess.component";

export default function PageBeeLirouRegister() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCPF] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function register() {
        setLoading(true);
        const data: RegisterDTO = {
            cpf: clearSymbols(cpf),
            email: email,
            password: password,
        };


        API.register(data).then(() => {
            navigate('/register-beelirou/success');
            setLoading(false);
        }).catch((err: AxiosError) => {
            console.log(err.response?.data);
            showMessage(<SucessToast message={`Erro ${err.response?.status}`} submessage={err.response?.data as string || ""} />, true);
            setLoading(false);
        });
    }

    return (
        <PageDefault>
            <Header />
            <LoginBox>
                <Title>Crie seu <strong>Bee ID</strong></Title>
                <InputFielsContainer>
                    <BeeLirouLoginInput
                        name="name"
                        type="text"
                        placeholder="Nome Completo"
                        value={name}
                        setValue={(e) => setName(e)}
                        loading={loading}
                    />
                    <BeeLirouLoginInput
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        setValue={(e) => setEmail(e)}
                        loading={loading}
                    />
                    <BeeLirouLoginInput
                        name="cpf"
                        type="text"
                        placeholder="CPF"
                        value={formatCPF(cpf)}
                        setValue={(e) => setCPF(formatCPF(e))}
                        loading={loading}
                        $maxLength={14}
                    />
                    <BeeLirouLoginInput
                        name="password"
                        type="password"
                        placeholder="Senha"
                        value={password}
                        setValue={(e) => setPassword(e)}
                        loading={loading}
                    />
                    <BeeLirouLoginInput
                        name="password-confirm"
                        type="password"
                        placeholder="Confirme sua senha"
                        value={confirmPassword}
                        setValue={(e) => setConfirmPassword(e)}
                        loading={loading}
                    />

                    <InputTogglesContainer>
                        <InputToggle>
                            <input type="checkbox" disabled={loading} />
                            <span>Concordo com Termos de Uso e Política de Privacidade</span>
                        </InputToggle>
                        <InputToggle>
                            <input type="checkbox" disabled={loading} />
                            <span>Compartilhar <strong>CPF</strong></span>
                        </InputToggle>
                        <InputToggle>
                            <input type="checkbox" disabled={loading} />
                            <span>Compartilhar <strong>e-mail</strong></span>
                        </InputToggle>
                    </InputTogglesContainer>

                </InputFielsContainer>

                <BeeAuthButton onClick={register} loading={loading}>
                    Prosseguir
                </BeeAuthButton>

            </LoginBox>
        </PageDefault>
    );
}


const InputTogglesContainer = styled.div`
    display: flex ;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`;

const InputToggle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    span{
        color:white;
        font-size: 12px;
        font-weight: 100;
        line-height: 15px;

        strong{
            font-weight: 700;
        }
    }

    input{
        background-color: 0;
        accent-color: #f0bd0e;
        cursor: pointer;
        width: 15px;
        height: 15px;
        flex-shrink: 0;

        &:disabled{
            opacity: 0.5;
            cursor: not-allowed;
        }
    }
`;


const Title = styled.h1`
    color: white;
    font-size: 25px;
    strong{
        font-weight: 700;
    }
`;

const LoginBox = styled.div`

    display: flex ;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 40px;
    background-color: #18181b;
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
`;
const InputFielsContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;