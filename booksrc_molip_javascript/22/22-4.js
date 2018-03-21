
var get = function(qty, price){
    var amount;
    if (qty !== undefined && price !== undefined){
        amount = qty * price;
        if (arguments[2] !== undefined){
            amount = amount - arguments[2];
        }
    }
    return amount;
};

js.log(get(100, 20, 500));
