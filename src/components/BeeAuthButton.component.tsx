
import styled from 'styled-components';

type BeeAuthButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
    loading?: boolean;
};

export default function BeeAuthButton({ children, onClick, loading }: BeeAuthButtonProps) {
    return (
        <SCBeeButton onClick={onClick} disabled={loading}>
            <img className='bg' src="/bee-bt-bg.png" alt="" />
            {loading ? "Loading..." : children}
        </SCBeeButton>
    );
}


const SCBeeButton = styled.button`

    width: 100%;
    max-width: 294px;
    background-color: #27272a;
    color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border: 0;
    position: relative;
    span{
        font-size: 16px;
        font-weight: 300;
    }

    &:enabled{
        &:hover{
            background-color: #deb533;
        }
    }

    
    .bg{
        position: absolute;
        width: 60%;
        height: 30px;
        left: 50%;
        top:0;
        transform: translateX(-50%);
    }
`;