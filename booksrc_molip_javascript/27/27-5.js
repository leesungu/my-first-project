
window.onload = function(){
    String.prototype.calcValue = function(){
        var total = 0, values = this.split('');
        debugger;
        values.forEach(function(value){
            total += Number(value);
        }, this);
        return total;
    }

    var result = '123'.calcValue();
    js.log(result);
}
