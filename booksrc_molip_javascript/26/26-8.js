
var sports = function(){
};

sports.prototype.set = function(){};
sports.prototype.get = function(){
    return this.value
};
sports.prototype.value = 12345;

var sportsObj = new sports();

js.log(sportsObj.value);
js.log(sportsObj.get());

debugger;
