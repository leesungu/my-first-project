
var value = 100;
function get(one){
    return one + this.value;
}

var result = get.call(this, 50);
js.log(result);
