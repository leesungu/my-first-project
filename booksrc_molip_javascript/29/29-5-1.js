window.onload = function(){
    function sports(){
        var value = 100;

        function setValue(param){
            value = param;
        };

        var getValue = function(param){
            value = value + param;
            return value;
        }
        return getValue;
    }

    var getObject = sports();

    debugger;
    js.log(getObject(123));

    js.log(getObject(77));
}
