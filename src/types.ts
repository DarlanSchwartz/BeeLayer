
export type PaymentMethodData = {
    isSelected?: boolean;
    icon: string;
    name: string;
    ownerName: string;
    cpf: string;
    cardNumber: string;
    isValidated?: boolean;
    isMain?: boolean;
};

export type NewCardData = {
    cardNumber: string;
    ownerName: string;
    validity: string;
    cvv: string;
    cpf: string;
};