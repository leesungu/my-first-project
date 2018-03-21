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
    Sports.prototype.getMember = function(){
        return this.member;
    };

    this.sportsObj = new Sports();
    this.sportsObj.soccerObj = new Soccer();

    js.log(this.sportsObj.getMember());
    js.log(this.sportsObj.soccerObj.getMember());
}

