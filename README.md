# TypeScript Type Error with Array Argument

This repository demonstrates a common TypeScript error related to type mismatches when passing an array argument to a function expecting a string.  The `greeter` function expects a single string, but an array is passed, resulting in a type error.

The solution involves either modifying the function signature to accept an array or modifying the function call to pass a single string argument.

## How to Reproduce

1. Clone the repository.
2. Compile the code using `tsc bug.ts`.
3. Observe the compiler error.

## Solution

The solution is provided in `bugSolution.ts` and addresses the type mismatch effectively.