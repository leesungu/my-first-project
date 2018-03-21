
function execWith(){
    var amount = 123,
        soccer = {player: '11명', time: '90분'},
        basketball = {player: '5명', time: '48분'};

    [soccer, basketball].forEach(function(obj){
        with(obj){
            js.log('player: ' + player + ', time: ' + time + ', ticket: ' + amount);
        }
    }, this);
}
execWith();
