
var obj = new Date();
js.log(obj.toJSON());

js.log(JSON.stringify({key: obj}));

js.log(JSON.stringify({key: obj.toJSON()}));
