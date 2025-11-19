function design(cb) {
    setTimeout(() => { console.log("Designing..."); cb(); }, 1000);
}
function build(cb) {
    setTimeout(() => { console.log("Building..."); cb(); }, 1000);
}
function test(cb) {
    setTimeout(() => { console.log("Testing..."); cb(); }, 1000);
}
function deploy(cb) {
    setTimeout(() => { console.log("Deploying..."); cb(); }, 1000);
}
function celebrate(cb) {
    setTimeout(() => { console.log("Celebrating!"); cb(); }, 1000);
}
//Callback Hell Execution
design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate(() => {
                    console.log(" Pipeline Finished (Callback Hell)");
                });
            });
        });
    });
});

//ASYNC / AWAIT CLEAN VERSION
function wait(ms) {
    return new Promise(res => setTimeout(res, ms));
}

async function designAsync() {
    await wait(1000);
    console.log("Designing...");
}

async function buildAsync() {
    await wait(1000);
    console.log("Building...");
}

async function testAsync() {
    await wait(1000);
    console.log("Testing...");
}

async function deployAsync() {
    await wait(1000);
    console.log("Deploying...");
}

async function celebrateAsync() {
    await wait(1000);
    console.log("Celebrating!");
}

async function runPipeline() {
    await designAsync();
    await buildAsync();
    await testAsync();
    await deployAsync();
    await celebrateAsync();
    console.log("Pipeline Finished (Async/Await)");
}
runPipeline();
