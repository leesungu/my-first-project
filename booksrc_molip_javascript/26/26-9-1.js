
var sports = function(){
}
sports.prototype = {
    set: function(){},
    value: 12345
}

var sportsObj = new sports();
js.log(sportsObj.constructor);
