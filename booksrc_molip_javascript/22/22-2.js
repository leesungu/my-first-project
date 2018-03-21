
var getTotal = function(qty, price){
    if (qty !== undefined && !isNaN(Number(qty)) && 
            price !== undefined && !isNaN(Number(price))){
        return qty * price;
    }
    return undefined;
};

js.log(getTotal(100));

js.log(getTotal(100, 77));

js.log(getTotal(100, 60, 500));
