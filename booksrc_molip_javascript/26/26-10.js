window.onload = function(){
    function Sports(){
        js.log(this.member);
    }

    Sports.prototype = {
        member: 123,
        getMember: function(value){
            js.log(this.member + value);
        }
    };

    var sportsObj = new Sports();
    sportsObj.getMember(500);
}
