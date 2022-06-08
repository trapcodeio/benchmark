# My Personal Benchmark Kit

This packages only provides semantic helper functions for the original [Benchmark](https://npmjs.com/package/benchmark)

## Installation
```sh
npm i @trapcode/benchmark
# OR
yarn add @trapcode/benchmark
```

## Functions
List of functions available in this package.

- [benchmarkFunctions](#benchmarkfunctions)



### benchmarkFunctions
This function benchmarks an array or record given to it.

#### Syntax 
```javascript
import {benchmarkFunctions} from "@trapcode/benchmark"

benchmarkFunctions(FunctionsArray, options)

benchmarkFunctions(FunctionsObject, options)

benchmarkFunctions(Name, FunctionsArray | FunctionsObject, options)
```

#### Example
```javascript
import {benchmarkFunctions} from "@trapcode/benchmark"

function One() {
    return 1 + 1;
}

function Two() {
    // run one 100 times
    let i = 100;
    while (--i) One();
}

function Three() {
    // run two 100 times
    let i = 100;
    while (--i) Two();
}

// An array of functions
benchmarkFunctions([One, Two, Three]).run();

// Or an object of functions.
benchmarkFunctions({ One, Two, Three }).run();
```

Result
```js
One x 894,565,407 ops/sec ±1.12% (84 runs sampled)
Two x 16,723,630 ops/sec ±0.89% (90 runs sampled)
Three x 190,309 ops/sec ±0.46% (95 runs sampled)
Fastest is [One]
```