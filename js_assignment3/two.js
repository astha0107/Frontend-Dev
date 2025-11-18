"use strict";
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];
function calculateBonus(emp) {
  try {
    if (!emp.name || !emp.salary || !emp.years) {
      throw new Error("Missing employee property");
    }
    const salary = Number(emp.salary);
    const years = Number(emp.years);
    if (isNaN(salary) || isNaN(years)) {
      throw new Error("Salary or years is not a valid number");
    }
    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
    console.log(`
-----------------------------
Employee: ${emp.name}
Salary: ₹${salary}
Years Worked: ${years}
Bonus Earned: ₹${bonus}
-----------------------------
    `);
  } catch (error) {
    console.error(`Error processing employee '${emp.name}': ${error.message}`);
  }
}
employees.forEach(calculateBonus);
