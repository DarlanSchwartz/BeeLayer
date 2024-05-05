import styled from "styled-components";
import Header from "../components/Header.component";
import PageDefault from "./Default.page";
import BeeAuthButton from "../components/BeeAuthButton.component";
import { useNavigate } from "react-router-dom";

export default function PageBeeLirouRegisterSuccess() {
    const navigate = useNavigate();
    return (
        <PageDefault>
            <Header />
            <LoginBox>
                <WelcomeContainer>
                    <Title>Parabéns!</Title>
                    <NewComerSpan>
                        Você criou seu ID na <span>Bee Layer</span>. A partir de agora, poderá conectar suas contas que possuem pagamento recorrente no cartão de crédito conosco e ganhar tokens por isso.
                    </NewComerSpan>
                </WelcomeContainer>
                <HowItWorks>Como funciona?</HowItWorks>
                <BeeAuthButton onClick={() => navigate('/login-beelirou')}>
                    Prosseguir
                </BeeAuthButton>
            </LoginBox>

        </PageDefault>
    );
}

const HowItWorks = styled.span`
    width: 100%;
    color: #71717A;
    font-size: 13px;
`;

const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Title = styled.h1`
    color: white;
    font-size: 25px;
    font-weight: 600;
    strong{
        font-weight: 700;
    }
`;

const NewComerSpan = styled.p`
    font-size: 13px;
    color:white;
    font-weight: 200;
    line-height: 16px;
    margin-top: 10px;
    span{
        color: #facc15;
        font-weight:500;
    }
`;

const LoginBox = styled.div`

    display: flex ;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    width: 93%;
    padding: 30px;
    background-color: #18181b;
    border-radius: 26px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
`;