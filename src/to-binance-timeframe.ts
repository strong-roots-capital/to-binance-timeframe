/**
 * to-binance-timeframe
 * Convert a TradingView timeframe to a Binance timeframe
 */
import ow from 'ow'
import { inTradingviewFormat } from '@strong-roots-capital/is-tradingview-format'

type BinanceInterval =
        | '1m'
        | '3m'
        | '5m'
        | '15m'
        | '30m'
        | '1h'
        | '2h'
        | '4h'
        | '6h'
        | '8h'
        | '12h'
        | '1d'
        | '3d'
        | '1w'
        | '1M'


/**
 * Convert a TradingView timeframe to a Binance timeframe.
 *
 * @param timeframe - TradingView timeframe to be converted into Binance timeframe format
 * @returns The converted timeframe in Binance format
 */
export function toBinanceTimeframe(timeframe: string): BinanceInterval {

    const AcceptedTradingviewTimeframes: string[] = [
        '1', '3', '5', '15', '30', '1H', '2H', '4H',
        '6H', '8H', '12H', '1D', '3D', '1W', '1M'
    ]

    ow(timeframe, ow.string.is(inTradingviewFormat))
    ow(timeframe, ow.string.oneOf(AcceptedTradingviewTimeframes))

    let result = timeframe
    if (!result.includes('M')) {
        result = result.toLowerCase()
    }
    if (/^[0-9]*$/.test(result)) {
       result = result.concat('m')
    }

    return result as BinanceInterval
}
