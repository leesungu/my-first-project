
qty = 20;
var sales = function(){
    var price = 30;

    function get(){
        var price = 40;
        return qty * price;
    };
    return get();
}
js.log(sales());
