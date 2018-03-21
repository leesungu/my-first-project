window.onload = function(){
    var sports = function(){
        var value = 100;

        this.addValue = function(param){
            value = value + param;
        };

        this.getValue = function(){
            return value;
        }
    }

    var sportsObj = new sports();

    sportsObj.addValue(260);
    js.log(sportsObj.getValue());
}
