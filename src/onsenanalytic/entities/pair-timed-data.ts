import { Address, BigInt } from "@graphprotocol/graph-ts"
import { PairTimedData } from "../../../generated/schema"
import { BIG_DECIMAL_ZERO, BIG_INT_ZERO } from "../../constants"
import { getAmm } from "./amm"
import { getPair } from "./pair"

export function getPairTimedData(
    factoryAddress: Address, 
    token1Address: Address, 
    token2Address: Address, 
    timeStart: BigInt, 
    timeframe: number
    ): PairTimedData {
    let pairTimedData = PairTimedData.load(`${factoryAddress.toHexString()}-${token1Address.toHexString()}-${token2Address.toHexString()}-${timeStart.toString()}-${timeframe}`)
    if (pairTimedData === null) {
        let amm = getAmm(factoryAddress)
        let pair = getPair(factoryAddress, token1Address, token2Address)
        pairTimedData = new PairTimedData(`${factoryAddress.toHexString()}-${token1Address.toHexString()}-${token2Address.toHexString()}-${timeStart.toString()}-${timeframe}`)
        pairTimedData.timeStart = timeStart
        pairTimedData.timeframe = timeframe
        pairTimedData.reserve0 = BIG_DECIMAL_ZERO
        pairTimedData.reserve1 = BIG_DECIMAL_ZERO
        pairTimedData.reserveUSD = BIG_DECIMAL_ZERO
        pairTimedData.timedVolumeToken0 = BIG_DECIMAL_ZERO
        pairTimedData.timedVolumeToken1 = BIG_DECIMAL_ZERO
        pairTimedData.timedVolumeUSD = BIG_DECIMAL_ZERO
        pairTimedData.timedTxCount = BIG_INT_ZERO
        pairTimedData.pair = pair.id
        pairTimedData.amm = amm.id
        pairTimedData.save()
    }
    return pairTimedData as PairTimedData
}