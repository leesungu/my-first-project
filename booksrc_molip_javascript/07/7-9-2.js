// break 문

var m = 0, 
    value = 0;

start:
for (var k = 0; k < 4; k++){
    js.log('k: ' + k + ', m: ' + m + ', value: ' + value);
    m = 0;
    for (; m < 2; m++){
        if (value === 2){
            break start;
        }
        value = value + 1;
    }
}
js.log('end');
