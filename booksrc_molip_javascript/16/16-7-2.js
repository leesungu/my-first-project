
var yourHome = function myHome(param) {
    if (param === 101){
        return param;
    }
    return myHome(param + 1);
};

var result = yourHome(100);
js.log(result);
