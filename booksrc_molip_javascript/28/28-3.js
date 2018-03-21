window.onload = function(){
    var baseball = {
        value: 123,
        getValue: function(){
            return this.value;
        }
    }

    var sports = {
        value: 456,
        getValue: function(){
            return this.value;
        },
        baseball: baseball
    }

    js.log(sports.getValue());
    js.log(sports.baseball.getValue());
    debugger;
}
