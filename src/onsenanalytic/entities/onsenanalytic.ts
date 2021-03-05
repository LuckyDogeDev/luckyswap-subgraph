import { OnsenAnalytic } from "../../../generated/schema"
import { BIG_DECIMAL_ZERO, BIG_INT_ZERO } from "../../constants"

export function getOnsenAnalytic(): OnsenAnalytic {
    let onsenAnalytic = OnsenAnalytic.load("0")
    if (onsenAnalytic === null) {
        onsenAnalytic = new OnsenAnalytic("0")
        onsenAnalytic.totalVolumeUSD = BIG_DECIMAL_ZERO
        onsenAnalytic.totalLiquidityUSD = BIG_DECIMAL_ZERO
        onsenAnalytic.ammCount = BIG_INT_ZERO
        onsenAnalytic.pairCount = BIG_INT_ZERO
        onsenAnalytic.tokenCount = BIG_INT_ZERO
        onsenAnalytic.txCount = BIG_INT_ZERO

        onsenAnalytic.save()
    }
    return onsenAnalytic as OnsenAnalytic
}
