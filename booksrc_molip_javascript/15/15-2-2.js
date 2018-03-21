// parse()

js.log(JSON.parse("null"));

var result = JSON.parse('{"sports": "soccer"}');
for (var name in result){
    js.log('name: ' + name + ', value: ' + result[name]);
}

