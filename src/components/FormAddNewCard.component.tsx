import React from 'react';
import ComponentBoxHeader from './ComponentBoxHeader.mini';
import styled from 'styled-components';
import FormInput from './FormInput.component';
import { Colors } from '../style/Colors';
import Button from './Button.component';
import { NewCardData } from '../types';

type FormAddNewCardProps = {
    formData: NewCardData;
    setFormData: (data: NewCardData) => void;
    backClick?: () => void;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    onCancel?: () => void;
};

export default function FormAddNewCard({ formData, setFormData, backClick, onSubmit, onCancel }: FormAddNewCardProps) {
    return (
        <SCFormAddNewCard onSubmit={(e) => onSubmit ? onSubmit(e) : undefined}>
            <ComponentBoxHeader title='Dados do cartão' iconClick={backClick} iconStyle={{ left: '0' }} />
            <FormInput
                value={formData.cardNumber}
                setValue={(value) => setFormData({ ...formData, cardNumber: value })}
                type='text'
                id='cardNumber'
                label='NÚMERO DO CARTÃO'
                placeholder='1111 2222 3333 4444'
            />
            <FormInput
                value={formData.ownerName}
                setValue={(value) => setFormData({ ...formData, ownerName: value })}
                type='text'
                id='cardOwnerName'
                label='NOME CONFORME IMPRESSO NO CARTÃO'
                placeholder='Barbara Silveira'
            />
            <DoubleInputContainer>
                <FormInput
                    value={formData.validity}
                    setValue={(value) => setFormData({ ...formData, validity: value })}
                    type='text'
                    id='validTru'
                    label='VALIDADE'
                    placeholder='11/27'
                />
                <FormInput
                    value={formData.cvv}
                    setValue={(value) => setFormData({ ...formData, cvv: value })}
                    type='number'
                    id='cvv'
                    label='CVV'
                    placeholder='11/27'
                />

            </DoubleInputContainer>
            <FormInput
                value={formData.cpf}
                setValue={(value) => setFormData({ ...formData, cpf: value })}
                type='number'
                id='cpf'
                label='CPF DO TITULAR'
                placeholder='123.453.789-12'
            />
            <span className='security-reason'>Por questão de segurança, dê preferências por cartão da sua própria titularidade.</span>
            <Button
                text='Salvar'
                type="submit"
            />
            <Button
                text='Cancelar'
                type="button"
                style={{ marginBottom: 20 }}
                onClick={onCancel}
            />
        </SCFormAddNewCard>
    );
}

const SCFormAddNewCard = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    .security-reason{
        font-weight: 600;
        font-size: 13px;
        text-align: center;
        line-height: 13px;
        margin-top: 20px;
        color: ${Colors.gray};
    }
`;

const DoubleInputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    row-gap: 30px;
`;
