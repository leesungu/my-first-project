// forEach()

var value = [1, 2];
value.forEach(function(element, index, list){
    if (index === 0){
        list.push('ABC');
    }    
    js.log('value: ' + element);
});

js.log('forEach 종료 후: ' + value);
