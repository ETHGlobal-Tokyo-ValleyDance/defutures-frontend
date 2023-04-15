import api from "./config"

export const sendAddHedgeTx = (chainId: number, txHash: string) => {
    return api.post(`${chainId}/addLiquidityHedge`, {
        txHash
    })
}