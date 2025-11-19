function applyOperation(numbers, operation) {
    let result = [];
    for (let num of numbers) {
        result.push(operation(num)); 
    }
    return result;
}
function double(num) {
    return num * 2;
}
function square(num) {
    return num * 2;
}
let nums = [1, 2, 3, 4];
let doubled = applyOperation(nums, double);
let squared = applyOperation(nums, square);
console.log("Doubled:", doubled);
console.log("Squared:", squared);
