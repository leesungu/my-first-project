window.onload = function(){
    var outside = 77;

    var sports = function(){
        js.log('sports: ' + outside);

        var value = 250;

        this.getValue = function(){
            js.log('getValue: ' + outside);
            return value;
        }
    }

    sports.prototype.getAverage = function(param){
        js.log('outside: ' + outside);
        return this.getValue() / param;
    };

    var sportsObj = new sports();
    js.log(sportsObj.getAverage(50));
}

