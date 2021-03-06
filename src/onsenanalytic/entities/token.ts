import { Address } from "@graphprotocol/graph-ts"
import { Token } from "../../../generated/schema"
import { BIG_DECIMAL_ZERO, BIG_INT_ONE, BIG_INT_ZERO } from "../../constants"
import { getAmm } from "./amm"

export function getToken(factoryAddress: Address, tokenAddress: Address): Token {
    let token = Token.load(factoryAddress.toHexString()+"-"+tokenAddress.toHexString())
    if (token === null) {

        let amm = getAmm(factoryAddress)
        amm.tokenCount = amm.tokenCount.plus(BIG_INT_ONE)
        amm.save()
        
        token = new Token(factoryAddress.toHexString()+"-"+tokenAddress.toHexString())
        token.totalSupply = BIG_INT_ZERO
        token.tradeVolume = BIG_DECIMAL_ZERO
        token.tradeVolumeUSD = BIG_DECIMAL_ZERO
        token.txCount = BIG_INT_ZERO
        token.totalLiquidity = BIG_DECIMAL_ZERO
        token.totalLiquidityUSD = BIG_DECIMAL_ZERO
        token.amm = amm.id
        token.save()
    }
    return token as Token
}
