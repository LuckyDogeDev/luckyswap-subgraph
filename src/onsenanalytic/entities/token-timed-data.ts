import { Address, BigInt } from "@graphprotocol/graph-ts"
import { TokenTimedData } from "../../../generated/schema"
import { BIG_DECIMAL_ZERO } from "../../constants"
import { getAmm } from "./amm"
import { getToken } from "./token"

export function getTokenTimedData(
    factoryAddress: Address, 
    tokenAddress: Address, 
    timeStart: BigInt, 
    timeframe: number
) : TokenTimedData {
    let tokenTimedData = TokenTimedData.load(factoryAddress.toHexString()+"-"+tokenAddress.toHexString()+"-"+timeStart.toString()+"-"+timeframe)
    if (tokenTimedData === null) {
        let amm = getAmm(factoryAddress)
        let token = getToken(factoryAddress, tokenAddress)
        tokenTimedData = new TokenTimedData(factoryAddress.toHexString()+"-"+tokenAddress.toHexString()+"-"+timeStart.toString()+"-"+timeframe)
        tokenTimedData.timeStart = timeStart
        tokenTimedData.timeframe = timeframe
        tokenTimedData.tradeVolume = BIG_DECIMAL_ZERO
        tokenTimedData.tradeVolumeUSD = BIG_DECIMAL_ZERO
        tokenTimedData.totalLiquidityToken = BIG_DECIMAL_ZERO
        tokenTimedData.totalLiquidityUSD = BIG_DECIMAL_ZERO
        tokenTimedData.token = token.id
        tokenTimedData.amm = amm.id
        tokenTimedData.save()
    }
    return tokenTimedData as TokenTimedData
}