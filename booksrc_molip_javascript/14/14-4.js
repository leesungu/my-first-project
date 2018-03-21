// forEach()

var value = [1, 2, 3];
delete value[2];
js.log(value.length);

//---------------
for (var k = 0; k < value.length; k++){
    js.log('value: ' + value[k] + ', index: ' + k);
}

//---------------
value.forEach(function(element, index, list){
    js.log('value: ' + element + ', index: ' + index);
});

