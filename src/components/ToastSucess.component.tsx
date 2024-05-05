import styled from 'styled-components';

export default function SucessToast() {
    return (
        <SCSucessToastContainer>
            <img className='bg' src="/bee-bt-bg.png" alt="" />
            <img src="/ok.png" alt="" />
            <MiddleContentContainer>
                <span>Conectado com Bee Layer</span>
                <p>Autenticado com sucesso</p>
            </MiddleContentContainer>
        </SCSucessToastContainer>
    );
}


const SCSucessToastContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;

    .bg{
        position: absolute;
        width: 100%;
        height: 40px;
        left: 0;
        top:-10px;
    }
   
`;

const MiddleContentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 5px;
 span{
        color: white;
        font-size: 13px;
    }

    p{
        color: #A1A1AA;
        font-size: 13px;
    }

`;