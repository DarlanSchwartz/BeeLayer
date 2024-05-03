export const DEFAULT_PAYMENT_METHODS = [
    {
        final: "Final **** **** **** 4572",
        name: "Cartão de crédito Master",
        icon: "/mastercard.svg",
        ownerName: "Antonio Grudez",
        isMain: true,
        isSelected: true,
        isValidated: true
    },
    {
        final: "Final **** **** **** 4572",
        name: "Cartão de crédito Master",
        icon: "/mastercard.svg",
        ownerName: "Antonio Grudez",
        isMain: false,
        isSelected: false,
        isValidated: false
    },
    {
        final: "Final **** **** **** 4572",
        name: "Cartão de crédito Master",
        icon: "/visa.svg",
        ownerName: "Antonio Grudez",
        isMain: false,
        isSelected: false,
        isValidated: false
    },
];

export const DEFAULT_NEW_CARD_DATA = { cardNumber: "", ownerName: "", validity: "", cvv: "", cpf: "" };