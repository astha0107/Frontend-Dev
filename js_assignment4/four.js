//employee
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; 
    }
    getAnnualSalary() {
        return this.salary * 12;
    }
    applyBonus(percent) {
        let bonusAmount = (this.salary * percent) / 100;
        this.salary += bonusAmount;
    }
}
let e1 = new Employee(1, "Riya", "HR", 35000);
let e2 = new Employee(2, "Priya", "Finance", 45000);
let e3 = new Employee(3, "Rohit", "IT", 55000);
let e4 = new Employee(4, "Ram", "Marketing", 30000);
let e5 = new Employee(5, "Stuti", "Operations", 40000);

let employees = [e1, e2, e3, e4, e5];
console.log("Annual Salaries:");
employees.forEach(emp => {
    console.log(`${emp.name}: ₹${emp.getAnnualSalary()}`);
});

let totalPayout = employees.reduce((acc, emp) => {
    return acc + emp.getAnnualSalary();
}, 0);

console.log("\nTotal Annual Payout of Company: ₹" + totalPayout);
