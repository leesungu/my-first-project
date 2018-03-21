
window.onload = function(){
    var sports = {
        get: function(one) {
            var args = arguments;
            return this.value + args[0] + args[1] + args[2];
        }
    };

    var fnObj = sports.get.bind({value: 123}, 'soccer', '456');
    debugger;
    js.log(fnObj('swim'));
}
