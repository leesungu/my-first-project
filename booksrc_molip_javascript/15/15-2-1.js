// parse()

var result = JSON.parse("123");
js.log(result);
js.log(typeof result);

js.log(typeof JSON.parse('true'));

js.log(Array.isArray(JSON.parse("[]")));

result = JSON.parse('["ABC", "가나다"]');
for (var k = 0; k < result.length; k++){
    js.log(result[k]);
}
