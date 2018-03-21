function Sports(){
}
Sports.prototype = {
    member: 123,
    getMember: function(){
        return this.member;
    }
};

var sportsOne = new Sports();
var sportsTwo = new Sports();

Sports.prototype.member = 456;

js.log(sportsOne.getMember());
js.log(sportsTwo.getMember());
