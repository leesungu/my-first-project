// splice()

var value = [1, 2, 3, 4, 5, 6];
value.splice(-3);
js.log(value);

value = [1, 2, 3];
value.splice(-7, 2);
js.log(value);

value = [1, 2, 3];
value.splice(1, 0, 456);
js.log(value);
