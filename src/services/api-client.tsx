import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'b49fe6216b9a4fd2a1590c4898c4a1ad'
    }
});