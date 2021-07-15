import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export const NULL_CALL_RESULT_VALUE =
  "0x0000000000000000000000000000000000000000000000000000000000000001";

export const ADDRESS_ZERO = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const BIG_DECIMAL_1E6 = BigDecimal.fromString("1e6");

export const BIG_DECIMAL_1E12 = BigDecimal.fromString("1e12");

export const BIG_DECIMAL_1E18 = BigDecimal.fromString("1e18");

export const BIG_DECIMAL_ZERO = BigDecimal.fromString("0");

export const BIG_DECIMAL_ONE = BigDecimal.fromString("1");

export const BIG_INT_ONE = BigInt.fromI32(1);

export const BIG_INT_TWO = BigInt.fromI32(2);

export const BIG_INT_ONE_HUNDRED = BigInt.fromI32(100);

export const BIG_INT_ONE_DAY_SECONDS = BigInt.fromI32(86400);

export const BIG_INT_ZERO = BigInt.fromI32(0);

export const LOCKUP_POOL_NUMBER = BigInt.fromI32(29);

export const LOCKUP_BLOCK_NUMBER = BigInt.fromI32(10959148);

export const MASTER_CHEF_START_BLOCK = BigInt.fromI32(10750000);

export const UNISWAP_SUSHI_ETH_PAIR_FIRST_LIQUDITY_BLOCK =
  BigInt.fromI32(10750005);

export const ACC_SUSHI_PRECISION = BigInt.fromString("1000000000000");

export const BENTOBOX_DEPOSIT = "deposit";

export const BENTOBOX_TRANSFER = "transfer";

export const BENTOBOX_WITHDRAW = "withdraw";

export const KASHI_PAIR_MEDIUM_RISK_TYPE = "medium";

export const PAIR_ADD_COLLATERAL = "addCollateral";

export const PAIR_REMOVE_COLLATERAL = "removeCollateral";

export const PAIR_ADD_ASSET = "addAsset";

export const PAIR_REMOVE_ASSET = "removeAsset";

export const PAIR_BORROW = "borrow";

export const PAIR_REPAY = "repay";

export const FACTORY_ADDRESS = Address.fromString("0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac");

export const MASTER_CHEF_ADDRESS = Address.fromString(
  "0xc2edad668740f1aa35e4d8f227fb8e17dca888cd" 
);

export const MASTER_CHEF_V2_ADDRESS = Address.fromString(
  "0xef0881ec094552b2e128cf945ef17a6752b4ec5d"
);

export const SUSHI_BAR_ADDRESS = Address.fromString("0x8798249c2e607446efb7ad49ec89dd1865ff4272");

export const SUSHI_MAKER_ADDRESS = Address.fromString(
  "0xe11fc0b43ab98eb91e9836129d1ee7c3bc95df50"
);

export const SUSHI_TOKEN_ADDRESS = Address.fromString(
  "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2"
);

export const SUSHI_USDT_PAIR_ADDRESS = Address.fromString(
  "0x680a025da7b1be2c204d7745e809919bce074026"
);

export const XSUSHI_USDC_PAIR_ADDRESS = Address.fromString(
  "0xd597924b16cc1904d808285bc9044fd51ceeead7"
);

export const XSUSHI_WETH_PAIR_ADDRESS = Address.fromString(
  "0x36e2fcccc59e5747ff63a03ea2e5c0c2c14911e7"
);

export const SUSHI_DISTRIBUTOR_ADDRESS = Address.fromString(
  "0xcbe6b83e77cdc011cc18f6f0df8444e5783ed982"
);

export const USDC_WETH_PAIR = "0x397ff1542f962076d0bfe58ea045ffa2d347aca0";

export const DAI_WETH_PAIR = "0xc3d03e4f041fd4cd388c549ee2a29a9e5075882f";

export const USDT_WETH_PAIR = "0x06da0fd433c1a5d7a4faa01111c044910a184553";

export const SUSHI_USDT_PAIR = "0x680a025da7b1be2c204d7745e809919bce074026";

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString(
  "3000"
);

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString(
  "5"
);

export const WETH_ADDRESS = Address.fromString("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2");

export const SUSHISWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString(
  "0x06da0fd433c1a5d7a4faa01111c044910a184553"
);

export const USDT_ADDRESS = Address.fromString("0xdac17f958d2ee523a2206206994597c13d831ec7");

export const UNISWAP_FACTORY_ADDRESS = Address.fromString(
  "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f"
);

export const UNISWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString(
  "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852"
);

export const UNISWAP_SUSHI_ETH_PAIR_ADDRESS = Address.fromString(
  "0xce84867c3c02b05dc570d0135103d3fb9cc19433"
);

export const UNISWAP_SUSHI_USDT_PAIR_ADDRESS = Address.fromString(
  "0xe3ffab89e53422f468be955e7011932efe80aa26"
);

// Bentobox constants
export const BENTOBOX_ADDRESS = Address.fromString("0xf5bce5077908a1b7370b9ae04adc565ebd643966");

export const KASHI_PAIR_MEDIUM_RISK_MASTER_ADDRESS = Address.fromString(
  "0x2cba6ab6574646badc84f0544d05059e57a5dc42"
);

// MiniChef
export const MINI_CHEF_ADDRESS = Address.fromString("0x0000000000000000000000000000000000000000");

export const COMPLEX_REWARDER = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const CONVEX_REWARDERS: Array<Address> = [Address.fromString('0x9e01aac4b3e8781a85b21d9d9f848e72af77b362'), Address.fromString('0x1fd97b5e5a257b0b9b9a42a96bb8870cbdd1eb79')]

export const ALCX_REWARDER = Address.fromString('0x7519c93fc5073e15d89131fd38118d73a72370f8')

export const NATIVE = Address.fromString("0x0000000000000000000000000000000000000000");

export const USDC = "0x0000000000000000000000000000000000000000";

export const USDT = "0xdac17f958d2ee523a2206206994597c13d831ec7";

export const DAI = "0x0000000000000000000000000000000000000000";

export const WHITELIST: string[] = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2,0x2260fac5e5542a773aa44fbcfedf7c193bc2c599,0x6b175474e89094c44da98b954eedeac495271d0f,0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48,0xdac17f958d2ee523a2206206994597c13d831ec7,0x0000000000085d4780b73119b644ae5ecd22b376,0x5d3a536e4d6dbd6114cc1ead35777bab948e3643,0x57ab1ec28d129707052df4df418d58a2d46d5f51,0x514910771af9ca656af840dff83e8264ecf986ca,0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e,0x8798249c2e607446efb7ad49ec89dd1865ff4272,0x1456688345527be1f37e9e627da0837d6f08c925,0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a,0x2ba592f78db6436527729929aaf6c908497cb200,0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0,0xa1faa113cbe53436df28ff0aee54275c13b40975,0xdb0f18081b505a7de20b18ac41856bcb4ba86a1a,0x04fa0d235c4abf4bcf4787af4cf447de572ef828,0x3155ba85d5f96b2d030a4966af206230e46849cb,0x87d73e916d7057945c9bcd8cdd94e42a6f47f776,0xdfe66b14d37c77f4e9b180ceb433d1b164f0281d,0xad32a8e6220741182940c5abf610bde99e737b2d,0xafcE9B78D409bF74980CACF610AFB851BF02F257,0x6b3595068778dd592e39a122f4f5a5cf09c90fe2".split(",");

// export const WHITELIST: string[] = [
//   "0xcf664087a5bb0237a0bad6742852ec6c8d69a27a", 
//   "0x6983d1e6def3690c4d616b13597a09e6193ea013", 
//   "0x3095c7557bcb296ccc6e363de01b760ba031f2d9", 
//   "0x985458e523db3d53125813ed68c274899e9dfab4", 
//   "0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f", 
//   "0xe176ebe47d621b984a73036b9da5d834411ef734",
// ]

// export const WHITELIST: string[] = [
//   "0x471ece3750da237f93b8e339c536989b8978a438",
//   "0xd629eb00deced2a080b7ec630ef6ac117e614f1b",
//   "0x765de816845861e75a25fca122bb6898b8b1282a",
//   "0xd8763cba276a3738e6de85b4b3bf5fded6d6ca73"
// ];

const CUSTOM_BASES = new Map<string,string>();