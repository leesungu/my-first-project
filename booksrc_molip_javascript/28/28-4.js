window.onload = function(){
    function Swim(){
        this.value = 123;
    }

    Swim.prototype.getValue = function(){
        return this.value;
    }

    var sports = {
        player: 1,
        swim: new Swim()
    }

    js.log(sports.swim.getValue());
}
