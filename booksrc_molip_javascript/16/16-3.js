// new Function()

var obj = new Function('book', 'return book;');
js.log(obj('책'));


obj = new Function('return 1 + 2 + 3;');
js.log(obj());

