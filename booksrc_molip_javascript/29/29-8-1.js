window.onload = function(){

    var base = {
        amount: 0,
        setAmount: function(param){
            this.amount = param;
            return this;
        },

        getAmount: function(param){
            return this.amount + param;
        }
    }

    base.setAmount(100);
    var amount = base.getAmount(200);
    js.log(amount);

    amount = base.setAmount(100).getAmount(200);
    js.log(amount);
}

