const Rx = require('@reactivex/rxjs');
var os = require('os');

var myObservable = new Rx.Subject();
myObservable.subscribe(value => console.log(value));
myObservable.next("Checking Your System...");
const cpu = os.cpus().length;
const mem = os.totalmem() / 1073741824;

if (cpu >= 2 && mem >= 2) {
    myObservable.next("System is checked successfully");
} else {
    if (mem < 2) {
        myObservable.next("This app at least needs 2 GB of RAM");
    }
    if (cpu < 2) {
        myObservable.next("Processor is not supported");
    }
}