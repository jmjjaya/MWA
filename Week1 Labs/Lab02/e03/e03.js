function slow(callback) {
    if (Math.random() > 0.5) {
        return callback("Error", null);
    }
    return callback(null, {
        id: 1234
    });
}

function exec(fn) {

    var done = function (doneFn) {
        process.nextTick(doneFn, fn((a, b) => {
            if (a === null) {
                return b;
            }
            return a;
        }));
    };
    return this;
}
exec(slow).done(function (data) {
    console.log(data);
});