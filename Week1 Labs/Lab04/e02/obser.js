const Rx = require('@reactivex/rxjs');

var myObservable = Rx.Subject();
myObservable.subscribe(value => console.log(value));
myObservable.next("jewan");