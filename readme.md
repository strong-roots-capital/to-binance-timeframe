# to-binance-timeframe [![Build status](https://travis-ci.org/strong-roots-capital/to-binance-timeframe.svg?branch=master)](https://travis-ci.org/strong-roots-capital/to-binance-timeframe) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/to-binance-timeframe.svg)](https://npmjs.org/package/@strong-roots-capital/to-binance-timeframe) [![codecov](https://codecov.io/gh/strong-roots-capital/to-binance-timeframe/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/to-binance-timeframe)

> Convert a TradingView timeframe to a Binance timeframe

## Install

```shell
npm install @strong-roots-capital/to-binance-timeframe
```

## Use

```typescript
import { toBinanceTimeframe } from '@strong-roots-capital/to-binance-timeframe'

toBinanceTimeframe('3')
//=> '3m'

toBinanceTimeframe('12H')
//=> '12h'

toBinanceTimefram('1W')
//=> '1w'
```

## Related

[binance-candle](https://github.com/strong-roots-capital/binance-candle)
