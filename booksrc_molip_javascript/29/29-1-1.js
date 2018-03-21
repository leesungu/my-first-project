window.onload = function(){

    var sports = {
        soccer: {member: 11, time: 90}, 
        basketball: {merber: 5, time: 48}
    };

    function showValues(sports){
        var type, obj, name;
        for (type in sports){
            obj = sports[type];

            for (name in obj){
                js.log(name +': ' + obj[name]);
            }
        }
    }
    showValues(sports);
}
