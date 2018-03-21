// hasOwnProperty()

var obj = Object();
obj.pty = 'check';
js.log(obj.hasOwnProperty('pty'));

obj.value = undefined;
js.log(obj.hasOwnProperty('value'));

js.log(obj.hasOwnProperty('hasOwnProperty'));
