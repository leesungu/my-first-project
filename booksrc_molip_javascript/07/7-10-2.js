// continue

var value = 0;
for (var k = 0; k < 2; k++){
    js.log('시작: ' + k);

    inLabel:
    for (var m = 0; m < 3; m++){
        js.log('중간: ' + m);
        if (value === 1){
            continue inLabel;
        }
        value = value + 1;
    }
    js.log('아래');
}
