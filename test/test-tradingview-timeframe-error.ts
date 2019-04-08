import test from 'ava'

/**
 * Library under test
 */

import { toBinanceTimeframe } from '../src/to-binance-timeframe'
import listTradingviewFormats from '@strong-roots-capital/list-tradingview-formats'

const shouldReturnTimeframeError = (t: any, input: string) => {
    const error = t.throws(() => {
        toBinanceTimeframe(input)
    })
    t.is(error.name, 'ArgumentError')
}
shouldReturnTimeframeError.title = (_ = '', input: string) => `should return an error for timeframe ${input}`
const timeframeWhitelist: string[] = [
    '1', '3', '5', '15', '30', '1H', '2H', '4H',
    '6H', '8H', '12H', '1D', '3D', '1W', '1M'
]


listTradingviewFormats()
    .filter(timeframe => !timeframeWhitelist.includes(timeframe))
    .forEach(timeframe => test(shouldReturnTimeframeError, timeframe))
