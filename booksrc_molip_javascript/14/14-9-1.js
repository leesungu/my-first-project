// reduce()

var value = [10, 20, 30, 40];
var result = value.reduce(function(previous, current, index, list){
    js.log('previous: ' + previous + ', current: ' + current);
    return previous + current;
});
js.log(result);


