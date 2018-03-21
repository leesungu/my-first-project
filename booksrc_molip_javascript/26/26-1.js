
window.onload = function(){
    function sports(value){
        this.value = value;
    }
    sports.prototype.amount = 456;

    var sportsObj = new sports(123);
}