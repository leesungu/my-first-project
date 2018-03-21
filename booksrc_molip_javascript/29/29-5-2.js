window.onload = function(){

    function sports(one){
        var value = 50;

        var getValue = function(two){
            value = value + one + two;
            return value;
        }
        return getValue;
    }

    var getObject = sports(10);

    js.log(getObject(20));
}
