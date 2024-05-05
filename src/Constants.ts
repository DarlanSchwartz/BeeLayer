export const DEFAULT_PAYMENT_METHODS = [
    {
        cardNumber: "1233 4568 8910 4572",
        cpf: "12345678910",
        name: "Cartão de crédito Master",
        icon: "/mastercard.svg",
        ownerName: "Fulano de Tal",
        isMain: true,
        isSelected: true,
        isValidated: true
    },
    {
        cardNumber: "1233 4568 8910 4572",
        cpf: "12345678910",
        name: "Cartão de crédito Vista",
        icon: "/visa.svg",
        ownerName: "Beltrano",
        isMain: false,
        isSelected: false,
        isValidated: false
    },
];

export const DEFAULT_NEW_CARD_DATA = { cardNumber: "", ownerName: "", validity: "", cvv: "", cpf: "" };