import { useEffect } from 'react';
import PageDefault from './Default.page';
import ComponentBox from '../components/ComponentBox.component';
import styled from 'styled-components';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.component';
import { toast } from 'react-toastify';
import SucessToast from '../components/ToastSucess.component';

export default function PageSucess() {
    const timerInMs = 3000;

    const navigate = useNavigate();
    useEffect(() => {

        toast(
            <SucessToast />, {
            position: "bottom-left",
            autoClose: timerInMs,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,

            style: {
                background: "black",
                width: 300
            },

        });

        const timeout = setTimeout(() => {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const token = urlParams.get('token');
            navigate(`/checkout?token=${token}`);
        }, timerInMs);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <PageDefault>
            <Header />
            <ComponentBox style={{ minHeight: 600 }}>
                <SucessMessage>
                    <IoIosCheckmarkCircle style={{ color: "#4caf50", fontSize: "50px" }} />
                    <p>Parabéns você está logado em nosso aplicativo</p>
                </SucessMessage>
            </ComponentBox>
        </PageDefault>
    );
}

const SucessMessage = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    p{
        text-align: center;
        font-size: 13px;
        font-weight: 700;
        width: 80%;
        line-height: 16px;
    }
`;
