
var sports = function(){
};

sports.prototype.getMember = function(member){
    js.log('파라미터: ', member);
};

var sportsObj = new sports();

sportsObj.getMember(123);
debugger;

