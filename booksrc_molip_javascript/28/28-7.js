window.onload = function(){
    function Soccer(){
        this.member = 123;
    }

    Soccer.prototype.getMember = function(){
        return this.member;
    }

    function Sports(){
        this.member = 456;
    }
    Sports.prototype = new Soccer();

    var sportsObj = new Sports();
    js.log(sportsObj.getMember());
    debugger;
}
