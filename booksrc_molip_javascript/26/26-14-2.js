
window.onload = function(){
    var sports = function(){
    }
    sports.prototype.soccer = {member: 123};

    var sportsObj = new sports();
    sportsObj.soccer = {member: 456};
    debugger;

    js.log(sportsObj.soccer.member);
    js.log(sports.prototype.soccer.member);
}
