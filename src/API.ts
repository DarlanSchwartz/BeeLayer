import axios from "axios";
import { CardCheckDTO, CardDTO, LoginDTO, RegisterDTO } from "./main.types";

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


async function login(data: LoginDTO) {
    return axios.post(BASE_URL + "sign-in", data);
}

async function register(data: RegisterDTO) {
    console.log(BASE_URL);
    return axios.post(BASE_URL + "sign-up", data);
}


const API = {
    checkCard,
    registerCard,
    login,
    register
};

export default API;



