import { Address } from "@graphprotocol/graph-ts"
import { Amm } from "../../../generated/schema"
import { BIG_DECIMAL_ZERO, BIG_INT_ZERO, exchangeMapping } from "../../constants"
import { getOnsenAnalytic } from "./onsenanalytic"

export function getAmm(factoryAddress: Address): Amm {
    let amm = Amm.load(factoryAddress.toHexString())
    if (amm === null) {
        let onsenAnalytic = getOnsenAnalytic()
        amm = new Amm(factoryAddress.toHexString())
        amm.name = exchangeMapping[factoryAddress.toHexString()]
        amm.pairCount = BIG_INT_ZERO
        amm.totalVolumeUSD = BIG_DECIMAL_ZERO
        amm.totalLiquidityUSD = BIG_DECIMAL_ZERO
        amm.tokenCount = BIG_INT_ZERO
        amm.pairCount = BIG_INT_ZERO
        amm.txCount = BIG_INT_ZERO
        amm.onsenAnalytic = onsenAnalytic.id
        amm.save()
    }
    return amm as Amm
}
