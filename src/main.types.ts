
export type CardDTO = {
    cardNumber: string;
    cardCPF: string;
    userCPF: string;
    isValid: boolean;
};



export type CardCheckDTO = {
    cardNumber: string;
    cardCPF: string;
    userCPF: string;
};


export type LoginDTO = {
    cpf: string;
    password: string;
};

export type RegisterDTO = {
    cpf: string;
    password: string;
    email: string;
};