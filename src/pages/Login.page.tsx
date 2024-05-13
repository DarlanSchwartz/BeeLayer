import { useState } from 'react';
import PageDefault from './Default.page';
import ComponentBox from '../components/ComponentBox.component';
import Header from '../components/Header.component';
import FormInput from '../components/FormInput.component';
import Button from '../components/Button.component';
import IconButton from '../components/IconButton.component';
import BeeButton from '../components/BeeButton.component';
import styled from 'styled-components';
import { Colors } from '../style/Colors';

export default function PageLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <PageDefault>
            <Header />
            <ComponentBox style={{ height: 600 }}>
                <LoginForm>
                    <FormInput
                        value={email}
                        setValue={(value) => setEmail(value)}
                        type='text'
                        id='email'
                        label='E-MAIL'
                        placeholder='Digite seu e-mail'
                    />
                    <FormInput
                        value={password}
                        setValue={(value) => setPassword(value)}
                        type='password'
                        id='password'
                        label='SENHA'
                        placeholder='Digite sua senha'
                    />
                    <Button
                        text='Entrar'
                    />
                    <MiddleWay>
                        <span className='mini-text'>ou</span>
                        <a href="#">Cadastre-se</a>
                        <span style={{ marginTop: 20 }} className='mini-text'>
                            <img src="/line.png" alt="" />
                            ou faça login com suas contas
                            <img src="/line.png" alt="" />
                        </span>
                    </MiddleWay>
                    <DownButtons>
                        <BeeButton />
                        <IconButton
                            text='Continue with Google'
                            icon='/Google.png'
                        />
                        <IconButton
                            text='Continue with Facebook'
                            icon='/Facebook.png'
                        />
                    </DownButtons>
                </LoginForm>
            </ComponentBox>
        </PageDefault>
    );
}

const MiddleWay = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`;

const DownButtons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const LoginForm = styled.div`
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    align-items: center;

    a{
        text-decoration: none;
        color:${Colors.main} ;
    }

    .mini-text{
        font-size: 12px;
    }
`;
