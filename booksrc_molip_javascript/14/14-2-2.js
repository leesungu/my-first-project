
if (!Array.isArray) {
    Array.isArray = function (args) {
        return Object.prototype.toString.call(args) === "[object Array]";
    };
}

js.log(Array.isArray([1, 2]));
