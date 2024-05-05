import styled from 'styled-components';
import { Colors } from '../style/Colors';

type InputProps = {
    value: string;
    setValue: (value: string) => void;
    type: string;
    name: string;
    placeholder: string;
    loading?: boolean;
};

export default function BeeLirouLoginInput({ loading, value, setValue, placeholder, name, type }: InputProps) {
    return (
        <SCInput
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={loading}
        />
    );
}

const SCInput = styled.input`
    width: 100%;
    height: 40px;
    background:0;
    border: 1px solid #262629;
    border-radius: 10px;
    padding-left: 10px;
    color:${Colors.borderGray};
    &:focus{
        color:white;
    }
    &:disabled{
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
