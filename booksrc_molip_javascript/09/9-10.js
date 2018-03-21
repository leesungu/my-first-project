// propertyIsEnumerable()

var obj = new Object();
obj.value = '값';
js.log(Object.keys(obj));
js.log(obj.propertyIsEnumerable('value'));


Object.prototype.add = '더하기';

var addObj = new Object();
js.log(addObj.add);
js.log(addObj.propertyIsEnumerable('add'));

