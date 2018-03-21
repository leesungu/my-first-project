window.onload = function(){
    var baseball = {
        value: 123,
        getValue: function(){return this.value},
        setValue: function(param){this.value = param}
    }

    var sports = Object.create(baseball, {
        value: {
            value: 456,
            writable: true
        },
        getValue: {
            value: function(){return this.value}
        }
    })

    debugger;

    js.log(sports.getValue());
    
    sports.setValue(789);

    js.log(sports.getValue());
}
