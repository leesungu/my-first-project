window.onload = function(){
    var sales = (function(){
        var value = 100;

        function setValue(param){
            value = value + param;
        }

        var getValue = function(){
            return value;
        }

        return {
            setValue: setValue,
            getValue: getValue,
            getAverage: function(param){
                return value / param;
            }
        }
    }());

    sales.setValue(260);
    js.log(sales.getValue());

    js.log(sales.getAverage(30));
}

