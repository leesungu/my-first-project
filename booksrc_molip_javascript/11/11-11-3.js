// indexOf()

function isContain(value, compare, start){
    return value.indexOf(compare, start) > -1;
}
js.log(isContain('12345', 3, 0) ? '있음' : '없음');

