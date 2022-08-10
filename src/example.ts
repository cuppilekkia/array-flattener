import assert from "node:assert";
import { flatten } from ".";

const result = flatten([1, [2, [3]], 4]);

assert.deepStrictEqual(result, [1, 2, 3, 4]);