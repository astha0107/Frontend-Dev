let bonus = 5000;
function calculateSalary(isPermanent) {
    let salary = 40000;

    console.log("Inside function before calculation:");
    console.log("Local isPermanent:", isPermanent);
    console.log("Global bonus:", bonus);

    if (isPermanent === true) {
        salary += bonus;  
    }

    console.log("Total Salary (inside function):", salary);
}
console.log("=== Case 1: Permanent Employee ===");
calculateSalary(true);
console.log("\n=== Case 2: Temporary Employee ===");
calculateSalary(false);

console.log("\nAfter function calls, global bonus is still:", bonus);
