// forEach()

var value = ['A', 'B', 'C', 'D'];
value.forEach(function(element, index, list){
    if (index === 1){
        list.shift();
    }    
    js.log('value: ' + element + ', index: ' + index);
});

js.log('forEach 종료 후: ' + value);
