var get = function(value){
    return this.base * this.rate + value;
}

var result = get.call({base: 20, rate: 30}, 50);
js.log(result);
