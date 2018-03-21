
var obj = new Date();

obj.setHours(15);
js.log(obj.toLocaleString());

obj.setHours(16, 37);
js.log(obj.toLocaleString());

obj.setHours(17, 45, 56);
js.log(obj.toLocaleString());

obj.setHours(22, 34, 45, 789);
js.log(obj.toLocaleString());
