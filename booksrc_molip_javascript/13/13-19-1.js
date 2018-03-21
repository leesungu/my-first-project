// splice()

var value = [1, 2, 3, 4, 5, 6];

var result = value.splice(1, 3);
js.log(result);
js.log(value);

value = [1, 2, 3, 4, 5, 6];
value.splice(1, 3, 'A', 'B');
js.log(value);

value = [1, 2, 3];
value.splice();
js.log(value);
