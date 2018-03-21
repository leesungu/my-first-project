window.onload = function(){
    var getObject = (function(){
        var value = 100;

        var getValue = function(param){
            value = value + param;
            return value;
        }
        return getValue;
    }());

    js.log(getObject(123));
}
