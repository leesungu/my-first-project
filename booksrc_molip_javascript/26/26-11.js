window.onload = function(){
    var sports = function(){
    }
    sports.prototype.member = 123;
    var sportsObj = new sports();

    sports.prototype.getMember = function(){
        return this.member;
    }

    debugger;    
    js.log(sportsObj.getMember());
}
