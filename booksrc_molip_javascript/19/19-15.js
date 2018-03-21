
var obj = new Date();

obj.setFullYear(2012);
js.log(obj.toLocaleString());

obj.setFullYear(2011, 10);
js.log(obj.toLocaleString());

obj.setFullYear(2010, 10, 3);
js.log(obj.toLocaleString());

obj.setYear(78);
js.log(obj.toLocaleString());

