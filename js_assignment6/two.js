function getBugs() {
    return new Promise((resolve, reject) => {
        const apiFailed = Math.random() < 0.4;   

        setTimeout(() => {
            if (apiFailed) {
                reject("API Failed to fetch bugs");
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}
getBugs()
    .then(bugs => {
        console.log("Bugs Retrieved Successfully!");
        console.table(bugs);  
    })
    .catch(error => {
        console.error(error);
    });
