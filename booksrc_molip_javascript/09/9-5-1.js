// toString()

js.log(Object().toString());

var obj = new Object();
js.log(obj.toString.call(new Number()));

js.log(obj.toString.call(undefined));

js.log(obj.toString.call(null));

