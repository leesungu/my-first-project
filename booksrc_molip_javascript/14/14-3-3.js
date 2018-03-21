// forEach()

var value = [1, 2, 3, 4];
value.forEach(function(element, index, list){
    if (index === 0){
        list.pop();
    }    
    js.log('value: ' + element);
});

js.log('forEach 종료 후: ' + value);
