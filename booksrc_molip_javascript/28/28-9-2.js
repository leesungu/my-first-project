window.onload = function(){

    function Soccer(param){
        this.member = param;
    }

    function Sports(superParam){
        Soccer.call(this, superParam);
    }
    Sports.prototype = Object.create(Soccer.prototype, {});

    var sportsObj = new Sports(123);
    js.log(sportsObj.member);
}

