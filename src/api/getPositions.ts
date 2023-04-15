import api from "./config"

export const getPositions = async (address: string) => {
    return api.get(`position/${address}`).then(res => res.data);
}