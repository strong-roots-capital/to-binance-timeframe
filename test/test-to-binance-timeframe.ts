import test from 'ava'

/**
 * Library under test
 */

import { toBinanceTimeframe } from '../src/to-binance-timeframe'


test('test ava configuration', t => {
    t.pass()
})

test('number changes to a number and m', t => {
     t.is('3m', toBinanceTimeframe('3'))
})

test('timeframe changes to lowercase', t => {
    t.is('4h', toBinanceTimeframe('4H'))
})

test('timeframe stays the same  for `1M`', t => {
     t.is('1M', toBinanceTimeframe('1M'))
})
test('throw an error with random timeframe', t => {
    const error = t.throws(() => {
        toBinanceTimeframe('Cookie')
    })
    t.is(error.name, 'ArgumentError')
})

test('return an error on any other timeframe inputs', t=> {
    const badInput = [
        '!!',
        '@#$@#%#$',
        'booger',
        'squish',
        'mo',
        '55',
        'm5',
        '..',
        '*'
    ]
    badInput.forEach((input) => {
        const error = t.throws(() => {
            toBinanceTimeframe(input)
        })
        t.is(error.name, 'ArgumentError')
    })
})
