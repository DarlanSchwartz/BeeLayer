import styled from 'styled-components';
import Selector from './Selector.mini';
import { PaymentMethodData } from '../types';
import { FaRegTrashCan } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Colors } from '../style/Colors';

export default function PaymentMethod({ data, onValidateClick, onSelect }: { data: PaymentMethodData; onValidateClick: () => void; onSelect: () => void; }) {
    return (
        <PaymentMethodContainer>
            {
                data.isMain &&
                <PaymentMethodContainerHeader>
                    <p>Cartão principal</p>
                </PaymentMethodContainerHeader>
            }
            <PaymentMethodContainerBody>
                <Selector selected={data.isSelected} onClick={onSelect} />
                <PaymentIconContainer>
                    <img src={data.icon} alt="" />
                </PaymentIconContainer>
                <CardDataContainer>

                    <CardDataText>
                        <p style={{ fontWeight: '600' }}>{data.name}</p>
                        <p>{data.ownerName}</p>
                        <p>{data.final}</p>
                    </CardDataText>
                </CardDataContainer>
                <PaymentMethodActions>
                    {
                        data.isValidated ?
                            <IsValidContainer className='valid'>
                                <IoIosCheckmarkCircle />
                                <p>Validado</p>
                            </IsValidContainer>
                            :
                            <IsValidContainer className='not-valid' onClick={() => onValidateClick()}>
                                <TiDeleteOutline />
                                <p>Validar</p>
                            </IsValidContainer>
                    }
                    <FaRegTrashCan style={{ color: Colors.gray }} />
                </PaymentMethodActions>
            </PaymentMethodContainerBody>
        </PaymentMethodContainer>
    );
}
const PaymentIconContainer = styled.div`
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const IsValidContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   p{
    font-size: 10px;
   }
`;

const PaymentMethodActions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    .valid{
        *{
            color:green;
        }
    }

    .not-valid{
        *{
            color:red;
        }
        cursor: pointer;

        &:hover{
            p{
                text-decoration: underline;
            }
        }
    }
`;

const PaymentMethodContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    justify-content: center;
    -webkit-box-shadow: 10px 10px 21px -12px rgba(0,0,0,0.45);
    -moz-box-shadow: 10px 10px 21px -12px rgba(0,0,0,0.45);
    box-shadow: 10px 10px 21px -12px rgba(0,0,0,0.45);
`;

const PaymentMethodContainerHeader = styled.div`
    display: flex;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    background-color: ${Colors.main};
    color:white;
    font-size: 12px;
`;

const PaymentMethodContainerBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
`;

const CardDataContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:10px;
    width: 100%;
`;

const CardDataText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    p{
        font-size: 14px;
    }
`;
