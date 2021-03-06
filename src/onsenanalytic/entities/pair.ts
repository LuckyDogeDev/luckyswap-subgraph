import { Address, log } from "@graphprotocol/graph-ts"
import { Token } from "../../../generated/schema"
import { Pair } from "../../../generated/schema"
import { BIG_DECIMAL_ZERO, BIG_INT_ONE, BIG_INT_ZERO } from "../../constants"
import { getAmm } from "./amm"

export function getPair(
    factoryAddress: Address,
    token0Address: Address,
    token1Address: Address,
    ): Pair {
    let pair = Pair.load(factoryAddress.toHexString()+"-"+token0Address.toHexString()+"-"+token1Address.toHexString())
    if (pair == null) {

        let amm = getAmm(factoryAddress)
        amm.pairCount = amm.pairCount.plus(BIG_INT_ONE)
        amm.save()

        pair = new Pair(factoryAddress.toHexString()+"-"+token0Address.toHexString()+"-"+token1Address.toHexString())
        let token0 = Token.load(factoryAddress.toHexString()+"-"+token0Address.toHexString())
        let token1 = Token.load(factoryAddress.toHexString()+"-"+token1Address.toHexString())
        pair.token0 = token0.id
        pair.token1 = token1.id
        pair.reserve0 = BIG_DECIMAL_ZERO
        pair.reserve1 = BIG_DECIMAL_ZERO
        pair.totalSupply = BIG_DECIMAL_ZERO
        pair.reserveUSD = BIG_DECIMAL_ZERO
        pair.volumeToken0 = BIG_DECIMAL_ZERO
        pair.volumeToken1 = BIG_DECIMAL_ZERO
        pair.volumeUSD = BIG_DECIMAL_ZERO
        pair.txCount = BIG_INT_ZERO
        pair.createdAtTimestamp = BIG_INT_ZERO
        pair.createdAtBlockNumber = BIG_INT_ZERO
        pair.liquidityProviderCount = BIG_INT_ZERO
        pair.amm = amm.id
        pair.save()
    }
    return pair as Pair
}
