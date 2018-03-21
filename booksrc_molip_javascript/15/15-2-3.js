// parse()

try {
    var result = JSON.parse('{"soccer": "55", "ball": "22"}',
        function(key, value){
            return key === 'soccer' ? 11 : value;
        });
} catch(e){
    console.log('JSON 변환 에러'); 
}

for (var key in result){
    js.log('name: ' + key + ', value: ' + result[key]);
}
