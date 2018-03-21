
var obj = new Object();
js.log(obj);

var numObj = new Number(567);
var objNumber = new Object(numObj);
js.log(numObj === objNumber);


obj = new Object(12345);
js.log(typeof obj);
js.log(obj);

js.log(new Object(true));

var nodes = document.getElementsByTagName('script');
js.log(new Object(nodes[0]));

