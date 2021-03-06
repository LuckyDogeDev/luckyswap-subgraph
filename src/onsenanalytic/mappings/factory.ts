import { Address, log } from '@graphprotocol/graph-ts'
import { PairCreated } from '../../../generated/Factory/Factory'
import { Pair as PairTemplate } from '../../../generated/templates'

import {
    FACTORY_ADDRESS,
    UNISWAP_FACTORY_ADDRESS,
  } from '../../constants'
import { getAmm } from '../entities/amm'
import { getOnsenAnalytic } from '../entities/onsenanalytic'
import { getPair } from '../entities/pair'
import { getToken } from '../entities/token'

export function handleNewUniswapPair(event: PairCreated): void {
  handleNewPair(event, UNISWAP_FACTORY_ADDRESS)
}

export function handleNewSushiswapPair(event: PairCreated): void {
    handleNewPair(event, FACTORY_ADDRESS)
}

export function handleNewPair(event: PairCreated, factoryAddress: Address): void {
    // load factory (create if first exchange)
    getOnsenAnalytic()
    getAmm(factoryAddress)

    // create the tokens if not exist
    getToken(factoryAddress, event.params.token0)
    getToken(factoryAddress, event.params.token1)
  
    // create pair
    getPair(factoryAddress, event.params.token0, event.params.token1)
  
    // create the tracked contract based on the template
    PairTemplate.create(event.params.pair)
  
  }