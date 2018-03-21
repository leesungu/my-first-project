
var sports = function(){};

js.log(sports === sports.prototype.constructor);

var sportsObj = new sports();

js.log(sportsObj.constructor === sports);

js.log(typeof sports);
js.log(typeof sportsObj);
