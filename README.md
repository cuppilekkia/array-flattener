# Part 1 – Flattening an array

⏱ We estimate that this should take approximately 30 minutes, but please take as much or as little time as you need.

Write an algorithm to flatten an arbitrarily nested array of values. 

```
[ 1, [ 2, [ 3 ] ], 4 ] -> [ 1, 2, 3, 4 ]
```

If your language of choice includes a flattening function, please implement your own.

# Solution

Install the dependencies: 
```sh
npm i
```

The algorithm is implemented in `src/index.ts`


## Example

An implementation example is in `src/example.ts` and it can be run with the command:
```sh
npm run start
```

## Test suite

The complete test suite is in `test/index.spec.ts`. 

Run all the tests with:
```sh
npm test
```