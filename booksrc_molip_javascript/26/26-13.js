window.onload = function(){
    var sports = function(){
    }
    sports.prototype = {
        member: 123,
        getMember: function(){
            return this.member;
        }
    };

    var sportsOne = new sports();
    var sportsTwo = new sports();

    sportsOne.member = 456;
    debugger;

    js.log(sportsOne.getMember());
    js.log(sportsTwo.getMember());

    js.log(sports.prototype.member);
}

