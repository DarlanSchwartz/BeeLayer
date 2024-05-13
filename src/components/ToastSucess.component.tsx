import styled from 'styled-components';

type SucessToastProps = {
    message: string;
    submessage: string;
};

export default function SucessToast({ message, submessage }: SucessToastProps) {
    return (
        <SCSucessToastContainer>
            <img className='bg' src="/bee-bt-bg.png" alt="" />
            <img src="/ok.png" alt="" />
            <MiddleContentContainer>
                <span>{message}</span>
                <p>{submessage}</p>
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