// decodeURI()

var uri = "saveData.jsp?name=축구&player=11명";
var encode = encodeURI(uri);
js.log(encode);

var decode = decodeURI(encode);
js.log(decode);

