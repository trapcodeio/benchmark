# My Personal Benchmark Kit

This packages only provides semantic helper functions for the original [Benchmark](https://npmjs.com/package/benchmark)

## Installation
```sh
npm i @trapcode/benchmark
# OR
yarn add @trapcode/benchmark
```

## Functions

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