import { toast } from "react-toastify";

export function clearSymbols(text: string) {
    if (!text) return ("");
    if (typeof text !== 'string') return ("");
    if (text === "") return (text);
    return text.replace(/[^0-9]/g, '');
}

export function formatCPF(value: string) {
    let cpf = value.replace(/\D/g, "");
    if (cpf === "") return "";
    if (cpf.length > 3) {
        cpf = cpf.substring(0, 3) + "." + cpf.substring(3);
    }
    if (cpf.length > 7) {
        cpf = cpf.substring(0, 7) + "." + cpf.substring(7);
    }
    if (cpf.length > 11) {
        cpf = cpf.substring(0, 11) + "-" + cpf.substring(11);
    }
    return cpf;
}

export function formatDateValidThrought(inputDate: string): string {
    // Remove any non-numeric characters from the input date string
    const formattedDate = inputDate.replace(/\D/g, "");

    // Check if the formattedDate has at least 1 character (minimum required for month)
    if (formattedDate.length < 1) {
        return "";
    }

    if (formattedDate.length <= 2) {
        if (parseInt(formattedDate) > 12) {
            return "12/";
        }

        if (parseInt(formattedDate) <= 0) {
            return "";
        }

        return formattedDate;
    }

    if (formattedDate.length > 2) {
        if (parseInt(formattedDate.substring(2, 3)) > 99) {
            return formattedDate.substring(0, 2) + "/" + "99";
        }
        return formattedDate.substring(0, 2) + "/" + formattedDate.substring(2, 4);
    }

    return "";
}

export function showMessage(node: React.ReactNode, error: boolean = false) {
    return toast(node, {
        position: "bottom-left",
        autoClose: error ? 5000 : 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
            background: "black",
            width: 300
        },
    });
}

export function formatCardNumber(value: string): string {
    // Remove any non-numeric characters from the input string
    const cardNumber = value.replace(/\D/g, "");

    // Check if the card number is empty or invalid
    if (cardNumber.length === 0) {
        return "";
    }

    // Determine the maximum number of groups (4 digits per group)
    const maxGroups = Math.ceil(cardNumber.length / 4);

    // Initialize the formatted card number
    let formattedCardNumber = "";

    // Build the formatted card number by iterating over groups of 4 digits
    for (let i = 0; i < maxGroups; i++) {
        const start = i * 4;
        const end = start + 4;
        const group = cardNumber.substring(start, end).trim(); // Trim to handle shorter end groups

        if (group.length > 0) {
            formattedCardNumber += (i > 0 ? " " : "") + group;
        }
    }

    return formattedCardNumber.slice(0, 19);
}

export function maskCardNumber(cardNumber: string): string {
    // Remove any non-numeric characters from the input string
    const formattedCardNumber = cardNumber.replace(/\D/g, "");

    // Check if the formattedCardNumber is empty or invalid
    if (formattedCardNumber.length === 0) {
        return "";
    }

    // Determine the length of the card number
    const length = formattedCardNumber.length;

    // Preserve the first 4 digits
    let maskedCardNumber = formattedCardNumber.substring(0, 4);

    // Mask the middle digits with asterisks (if applicable)
    if (length > 8) { // Ensure the card number has at least 9 digits to mask middle digits
        maskedCardNumber += " **** **** ";
        maskedCardNumber += formattedCardNumber.substring(length - 4); // Preserve the last 4 digits
    } else {
        // If the card number is shorter than 9 digits, return as is
        maskedCardNumber += " " + formattedCardNumber.substring(4); // Append the remaining digits
    }

    return maskedCardNumber;
}