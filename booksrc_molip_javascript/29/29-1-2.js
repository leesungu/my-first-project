window.onload = function(){

    var sports = {
        soccer: {member: 11, time: 90}, 
        basketball: {merber: 5, time: 48}
    };

    function showValues(sports){
        var type, obj;
        for (type in sports){
            obj = sports[type];
            typeof obj === 'object' ? showValues(obj) : js.log(type +': ' + obj);
        }
    }
    showValues(sports);
}
