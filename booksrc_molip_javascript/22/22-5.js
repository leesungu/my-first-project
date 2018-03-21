
var get = function(one){
    js.log('arguments: ' + arguments.length);
};

js.log('get 파라미터 수: ' + get.length);

get(1, 2, 3);
get([4, 5], 6);

