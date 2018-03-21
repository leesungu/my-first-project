// break

var value = 0;
outLabel: {
    for (var k = 0; k < 5; k++){
        js.log('in: ' + value);

        if (k === 1){
            break outLabel;
        }
        value = value + 1;
    }
}
js.log('end');

