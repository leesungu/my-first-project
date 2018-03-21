
function get(){
    js.log('length: ' + arguments.length);

    for (var key in arguments){
        js.log('index: ' + key);

        var obj = arguments[key];
        for (var name in obj){
            js.log(name + ': ' + obj[name]);
        }
    }
};

get({soccer: 11}, {book: 20});
