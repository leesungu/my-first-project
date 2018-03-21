// split(): 브라우저 차이

var result = '_012_345'.split(/_/g);
js.log(result);
js.log(result.length);

result = '12_34_56'.split(/(_)/g);
js.log(result);
js.log(result.length);
