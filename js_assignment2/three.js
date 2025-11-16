let scores = Array.from({ length: 8 }, () =>
  Math.floor(Math.random() * (100 - 30 + 1)) + 30
);
let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let average =
  scores.reduce((sum, score) => sum + score, 0) / scores.length;
let passedCount = scores.filter(score => score >= 50).length;
console.log("===== STUDENT PERFORMANCE REPORT =====");
console.log("Scores:", scores.join(", "));
console.log("Highest Score:", highest);
console.log("Lowest Score:", lowest);
console.log("Average Score:", average.toFixed(2));
console.log("Students Passed:", passedCount, "/", scores.length);
console.log("======================================");
