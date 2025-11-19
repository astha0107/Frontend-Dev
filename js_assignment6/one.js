function randomDelay() {
  return 1000 + Math.floor(Math.random() * 1000); 
}
function boilWater() {
  return new Promise((resolve, reject) => {
    const delay = randomDelay();
    console.log("-> Starting to boil water...");
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error("Boiling failed: kettle malfunction!"));
      } else {
        console.log("Water boiled.");
        resolve("boiled water");
      }
    }, delay);
  });
}
function brewCoffee(prevResult) {
  return new Promise((resolve, reject) => {
    const delay = randomDelay();
    console.log("-> Starting to brew coffee with", prevResult, "...");
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error("Brewing failed: ground coffee shortage!"));
      } else {
        console.log("Coffee brewed.");
        resolve("brewed coffee");
      }
    }, delay);
  });
}
function pourIntoCup(prevResult) {
  return new Promise((resolve, reject) => {
    const delay = randomDelay();
    console.log("-> Pouring", prevResult, "into the cup...");
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error("Pouring failed: cup cracked!"));
      } else {
        console.log(" Coffee poured into the cup.");
        resolve("coffee in cup");
      }
    }, delay);
  });
}
console.log("Morning coffee automation started.\n");

boilWater()
  .then(boiled => brewCoffee(boiled))    
  .then(brewed => pourIntoCup(brewed)) 
  .then(() => {
    console.log("\n Coffee ready for the team!");
  })
  .catch(err => {
    console.error("\n Coffee process failed:", err.message);
  });
