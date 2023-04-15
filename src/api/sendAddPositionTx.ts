import api from "./config"

export const sendAddPositionTx = (chainId: number, txHash: string) => {
    return api.post(`${chainId}/position`, {
        txHash
    })
}