type PrimitivesButArray = number | string | object

const reducerFn = (
    arrayElement: PrimitivesButArray | Array<PrimitivesButArray>, 
    acc: Array<PrimitivesButArray>
) => {
    if (!Array.isArray(arrayElement)) {
        acc.push(arrayElement);
        return;
    }
    iterator(arrayElement, acc);
};

const iterator = (
    inputArray: Array<PrimitivesButArray | Array<PrimitivesButArray>>,
    finalFlattenedArray: Array<PrimitivesButArray | Array<PrimitivesButArray>>
)=>{
    inputArray.forEach((arrayElement) => reducerFn(arrayElement, finalFlattenedArray));

    return finalFlattenedArray;
};

const flatten = (
    inputArray: Array<PrimitivesButArray | Array<PrimitivesButArray>>, 
): Array<PrimitivesButArray> => {
    return iterator(inputArray, []);
};

export { flatten };