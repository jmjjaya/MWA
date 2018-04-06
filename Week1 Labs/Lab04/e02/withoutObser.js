var os = require('os');

function checkSystem() {
    console.log("Checking Your System...");
    const cpu = os.cpus().length;
    const mem = os.totalmem() / 1073741824;

    if (cpu >= 2 && mem >= 2) {
        console.log("System is checked successfully");
    } else {
        if (mem < 2) {
            console.log("This app at least needs 2 GB of RAM");
        }
        if (cpu < 2) {
            console.log("Processor is not supported");
        }
    }
}

checkSystem();