import styled from "styled-components";
import Header from "../components/Header.component";
import PageDefault from "./Default.page";
import { useState } from "react";
import BeeLirouLoginInput from "../components/BeeLirouLoginInput.component";
import BeeAuthButton from "../components/BeeAuthButton.component";
import { LoginDTO } from "../main.types";
import API from "../API";
import { useNavigate } from "react-router-dom";

export default function PageBeeLirouLogin() {

    const [cpf, setCPF] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    function login() {
        setLoading(true);
        const data: LoginDTO = {
            cpf: cpf,
            password: password,
        };

        API.login(data).then(res => {
            navigate(`/success?token=${res.data.token}`);
            console.log(res);
            setLoading(false);
        }).catch(err => {
            console.log(err);
            setLoading(false);
        });
    }
    return (
        <PageDefault>
            <Header />
            <LoginBox>
                <img src="/logo.svg" alt="" />
                <WelcomeContainer>
                    <Title>Bem vindo a <strong>Bee Layer</strong></Title>
                    <NewComerSpan>É novo aqui? <a href="/register-beelirou">Crie um Bee ID!</a></NewComerSpan>
                </WelcomeContainer>
                <InputFields>
                    <BeeLirouLoginInput
                        name="cpf"
                        type="text"
                        placeholder="CPF"
                        value={cpf}
                        setValue={(e) => setCPF(e)}
                        loading={loading}
                    />
                    <BeeLirouLoginInput
                        name="password"
                        type="password"
                        placeholder="Senha"
                        value={password}
                        setValue={(e) => setPassword(e)}
                        loading={loading}
                    />
                    <span className="forgot-password">
                        Esqueceu sua senha?
                    </span>
                </InputFields>
                <BeeAuthButton onClick={() => login()} loading={loading}>
                    Conectar Bee ID
                </BeeAuthButton>
            </LoginBox>

        </PageDefault>
    );
}

const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;


const InputFields = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;


const Title = styled.h1`
    color: white;
    font-size: 25px;
    strong{
        font-weight: 700;
    }
`;

const NewComerSpan = styled.span`
    font-size: 14px;
    color:#71717a;
    a{
        color: white;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
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

    .forgot-password{
        font-size: 13px;
        color:#71717a;
        text-align: left;
        width: 100%;
    }
`;