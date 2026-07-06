import api from "../../../services/api";

export const getHomeApi = () => {
    return api.get("/market/home");
};