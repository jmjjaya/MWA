function slow(callback) {
    if (Math.random() > 0.5) {
        return callback("Error", null);
    }
    return callback(null, {
        id: 1234
    });
}

function exec(fn) {
    const result = fn((a, b) => {
        if (a === null) {
            return b;
        }
        return a;
    });
    return {
        done: function (doneFn) {
            if (result != "Error") {
                process.nextTick(doneFn, result);
            }
            return this;
        },
        fail: function (failFn) {
            if (result === "Error") {
                process.nextTick(failFn, result);
            }
        }
    };
}
exec(slow).done((data) => {
    console.log(data);
}).fail((error) => {
    console.log("Error: " + error);
});