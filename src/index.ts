type PrimitivesButArray = number | string | object
type FlatArray = Array<PrimitivesButArray>
type Primitives = PrimitivesButArray | FlatArray
type DeepArray = Array<Primitives>

/**
 * Recursive reducer
 * 
 * It pushes primitive items that are not arrays in the accumulator,
 * or calls the iterator when the item is an array instead.
 *
 * @param {Primitives} arrayElement the current array item
 * @param {FlatArray} accumulator the in progress flat array
 * @return {void} 
 */
const reducerFn = (arrayElement: Primitives, accumulator: FlatArray): void => {
    if (!Array.isArray(arrayElement)) {
        accumulator.push(arrayElement);
        return;
    }
    iterator(arrayElement, accumulator);
};

/**
 * Main iterator 
 * 
 * Function that loops through an array and applies 
 * a recursive reducer when an item is another array.
 *
 * @param {DeepArray} inputArray current iteration input array
 * @param {DeepArray} finalFlattenedArray the in progress flat array
 * @return {DeepArray} the in progress flat array  
 */
const iterator = (inputArray: DeepArray, finalFlattenedArray: DeepArray) => {
    inputArray.forEach((arrayElement) => reducerFn(arrayElement, finalFlattenedArray));

    return finalFlattenedArray;
};

/**
 * Flat array function
 * 
 * Takes an array with nested arrays and returns a flattened array.
 *
 * @param {DeepArray} inputArray the input array to be flattened
 * @return {FlatArray} the flattened result
 */
const flatten = (inputArray: DeepArray): FlatArray => iterator(inputArray, []);

export { flatten };