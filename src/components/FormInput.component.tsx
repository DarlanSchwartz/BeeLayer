import styled from 'styled-components';
import { Colors } from '../style/Colors';

type FormInputProps = {
    value?: string;
    setValue: (value: string) => void;
    placeholder?: string;
    label?: string;
    type?: string;
    maxLenght?: number;
    minLenght?: number;
    id?: string;
    name?: string;
    loading?: boolean;
};

export default function FormInput({ value, setValue, label, id, loading, ...rest }: FormInputProps) {
    return (
        <InputContainer>
            <label htmlFor={id}>{label}</label>
            <SCInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                {...rest}
                disabled={loading}
            />
        </InputContainer>
    );
}

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    label{
        margin-left: 20px;
        color:${Colors.main};
        text-transform: uppercase;
        font-size: 10px;
        font-weight: 700;
    }
`;

const SCInput = styled.input`
    border-radius: 30px;
    width: 100%;
    height: 40px;
    color: ${Colors.borderGray};
    border: 1px solid ${Colors.borderGray};
    padding-left: 20px;
    padding-right: 20px;
    color:black;

    &:disabled{
        cursor: not-allowed;
        opacity: 0.5;
    }
`;
