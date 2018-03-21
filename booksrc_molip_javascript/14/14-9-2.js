// reduce()

var value = [10, 20, 30];
var result = value.reduce(function(previous, current, index, list){
    js.log('previous: ' + previous + ', current: ' + current);
    return previous + current;
}, 50);

js.log(result);
