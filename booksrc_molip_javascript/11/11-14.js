// match()

var value = 'Sports';

var result = value.match(/s/);
js.log(Array.isArray(result));
js.log(result);

js.log(value.match('S'));

js.log(value.match(/s/ig));

js.log(value.match('spt'));

js.log(/S/.test(value));

