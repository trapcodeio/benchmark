import Benchmark, { Options, Suite } from "benchmark";
import helpers from "./helpers";

export type BenchmarkFunction = Function[] | Record<string, Function>;

/**
 * Benchmark functions
 * @param functions
 * @param options
 * @example
 * benchmarkFunctions([fn1, fn2], options?)
 */
export function benchmarkFunctions(functions: BenchmarkFunction, options?: Options): Suite;

/**
 * Benchmark functions with name
 * @param functions - Functions to benchmark
 * @param options - Benchmark Options
 * @example
 * benchmarkFunctions("Sum of Numbers", [fn1, fn2], options?)
 */
export function benchmarkFunctions(
    name: string,
    functions: BenchmarkFunction,
    options?: Options
): Suite;

/**
 *  Benchmark functions
 * @param name - Name of the benchmark Group
 * @param functions - Functions to benchmark
 * @param options - Benchmark Options
 * @returns
 */
export function benchmarkFunctions(
    name: string | BenchmarkFunction,
    functions?: BenchmarkFunction | Options,
    options: Options = {}
) {
    /**
     * Check if name is an array or object
     * If true, then the name is `functions` as first argument.
     */
    if (Array.isArray(name) || typeof name === "object") {
        options = (functions || {}) as Options;
        functions = name;
    } else if (typeof name === "string") {
        options.name = name;
    }

    // Log Group Name
    if (options.name) console.log("Benchmark: ", options.name);

    // Initialize the benchmark
    const suite = new Benchmark.Suite(options.name, options);

    // Check if functions is an array
    // loop through and add functions to suite.
    if (Array.isArray(functions)) {
        for (const func of functions) {
            suite.add(func.name, func);
        }
    } else {
        for (const [name, func] of Object.entries(functions!)) {
            suite.add(name, func);
        }
    }

    /**
     * Apply logs to benchmark with colors
     */
    suite
        .on("cycle", function (event: any) {
            helpers.logCyan(event.target.toString());
        })
        .on("complete", () => {
            const fastest = suite.filter("fastest").map("name");
            helpers.logYellow(`Fastest is [${fastest}]`);
        });

    return suite;
}
