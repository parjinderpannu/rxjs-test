import { Observable, Observer } from "rxjs";

let numbers = [1, 5, 10];
let source = Observable.from(numbers);

class MyObserver implements Observer<number> {

    next2(value) {
        console.log(`Value: ${value}`);
    }

    error(e) {
        console.log(`error: ${e}`);
    }

    complete() {
        console.log("complete");
    }
}

source.subscribe(new MyObserver());