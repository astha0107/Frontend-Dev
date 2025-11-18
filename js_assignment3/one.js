const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
let validNumbers = [];
let invalidNumbers = [];

let report = [];

for (let value of apiData) {
    const asNumber = Number(value);
    const asBoolean = Boolean(value);
    const asString = String(value);

    if (!isNaN(asNumber) && value !== " " && value !== "" && typeof value !== "undefined") {
        validNumbers.push(asNumber);
    } else {
        invalidNumbers.push(value);
    }

    report.push({
        original: value,
        number: asNumber,
        boolean: asBoolean,
        string: asString
    });
}
console.log("Detailed Conversion Report");
for (let item of report) {
    console.log(`
Original Value : ${item.original}
Number Form    : ${item.number}
Boolean Form   : ${item.boolean}
String Form    : "${item.string}"
--------------------------------------------`);
}
console.log("Valid Numeric Values");
console.log(validNumbers);

console.log("Invalid Numeric Values");
console.log(invalidNumbers);
