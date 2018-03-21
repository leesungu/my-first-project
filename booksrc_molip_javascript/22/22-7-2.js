
function get(){
    var total = 0,
        args = arguments[0];

    for (var k = 0; k < args.length; k++){
        total += args[k];
    }
    return total;
};

js.log(get([1, 2, 3, 4, 5]));
