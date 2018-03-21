var get = function(){
    debugger;
    return this.valueOf();
}

var result = get.call(123);
js.log(result);
