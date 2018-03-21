
var obj = new Date();

obj.setMinutes(37);
js.log(obj.toLocaleString());

obj.setMinutes(15, 45);
js.log(obj.toLocaleString());

obj.setMinutes(34, 56, 789);
js.log(obj.toLocaleString());
