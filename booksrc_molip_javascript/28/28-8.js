window.onload = function(){
    function Soccer(){
        this.member = 123;
    }
    Soccer.prototype.getMember = function(){
        return this.member + ': Soccer';
    }

    function Sports(){
        this.member = 456;
    }
    Sports.prototype = new Soccer();

    Sports.prototype.getMember = function(){
        return 'sports';
    }

    var sportsObj = new Sports();
    js.log(sportsObj.getMember());

    js.log(Soccer.prototype.getMember.call(sportsObj));
}

/*
Soccer.prototype.getMember();
Soccer.prototype.getMember.call();
Soccer.prototype.getMember.call(Soccer);
Soccer.prototype.getMember.call(Sports);
*/
