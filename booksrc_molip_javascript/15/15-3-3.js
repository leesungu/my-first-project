// stringify()

var result = JSON.stringify({sports: 'soccer', player: 55}, 
    function(key, value){
        return key === 'player' ? 11 : value;
    }
);
js.log(result);

js.log(JSON.stringify({sports: 'soccer', player: 11, time: 90}, ['sports', 'time']));
