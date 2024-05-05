import axios from "axios";
import { CardCheckDTO, CardDTO } from "./main.types";

const BASE_URL = import.meta.env.VITE_API_URL;

function getConfig(token: string) {
    return {
        headers: {
            Authorization: "Bearer " + token
        }
    };
}

async function registerCard(token: string, cardInfo: CardDTO) {
    return axios.post(BASE_URL + "register-card", cardInfo, getConfig(token));
}

async function checkCard(token: string, cardInfo: CardCheckDTO) {
    return axios.post(BASE_URL + "check-card", cardInfo, getConfig(token));
}


const API = {
    checkCard,
    registerCard
};

export default API;



