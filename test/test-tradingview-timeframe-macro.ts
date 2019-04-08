import test from 'ava'

/**
 * Library under test
 */

import { toBinanceTimeframe } from '../src/to-binance-timeframe'

const shouldReturnBinanceCandleTimeframe = (t: any, input: string[]) => {
    const binanceTimeframeOptions: string[] = ['1m', '3m', '5m', '15m', '30m', '1h', '2h', '4h', '6h', '8h', '12h', '1d', '3d', '1w', '1M']
    let output: string[] = []
    for (let i of input) {
        output.push(toBinanceTimeframe(i))
    }
    t.deepEqual(output, binanceTimeframeOptions)

}
shouldReturnBinanceCandleTimeframe.title = (_ = '', input: string[]) => `should return a Binance Candle with set TradingView ${input}`

const input: string[] = [
        '1', '3', '5', '15', '30', '1H', '2H', '4H',
        '6H', '8H', '12H', '1D', '3D', '1W', '1M'
    ]

test(shouldReturnBinanceCandleTimeframe, input)
