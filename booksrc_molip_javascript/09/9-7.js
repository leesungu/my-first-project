// valueOf()

var value = Object().valueOf();
js.log(typeof value);
js.log(value);

var nodes = document.getElementsByTagName('script');
js.log(Object.prototype.valueOf.call(nodes[0]));

js.log(new Number(123).valueOf());

