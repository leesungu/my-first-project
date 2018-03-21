window.onload = function(){
    var baseball = {
        value: 123,
        getValue: function(){
            return this.value;
        }
    }

    var sports = {
        value: 456,
        setValue: function(param){
            this.value = param;
        }
    }

    js.log(sports.value);

    for (var name in baseball){
        sports[name] = baseball[name];
    }

    js.log(sports.getValue());
}
