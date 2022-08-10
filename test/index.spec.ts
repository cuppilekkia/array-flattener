import { flatten } from "../src/index";

describe("Flatten Array", () => {
    it("should flatten a simple nested array", () => {
        const input = ["hello", [1, 2, 3], { foo: "bar" }];
        const expected = ["hello", 1, 2, 3, { foo: "bar" }];

        expect(flatten(input)).toStrictEqual(expected);
    });
    
    it("should flatten a nested empty array", () => {
        const input = [[]];
        const expected = [];

        expect(flatten(input)).toStrictEqual(expected);
    });
    
    it("should flatten many levels deeper arrays", () => {
        const input = [[[[[3]], ["hello", "bye", [null, undefined]]]]];
        const expected = [3, "hello", "bye", null, undefined];

        expect(flatten(input)).toStrictEqual(expected);
    });
    
    it("should flatten arrays with null or undefined values", () => {
        const input = [[[[[]], undefined, [null, [null, undefined]]]]];
        const expected = [undefined, null, null, undefined];

        expect(flatten(input)).toStrictEqual(expected);
    });
    
    it("should flatten the provided example", () => {
        const input = [1, [2, [3]], 4];
        const expected = [1, 2, 3, 4];

        expect(flatten(input)).toStrictEqual(expected);
    });
});