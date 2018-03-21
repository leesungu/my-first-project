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

    Sports.prototype = Object.create(Soccer.prototype, {
        setMember: {
            value: function(param){this.member = param}
        }
    });
    debugger;
    Sports.prototype.constructor = Sports;

    var sportsObj = new Sports();
    sportsObj.setMember(789);
    js.log(sportsObj.getMember());
}
