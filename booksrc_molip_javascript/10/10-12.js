// decodeURIComponent()

var uri = "saveData.jsp?name=축구&player=11명";
var encode = encodeURIComponent(uri);
js.log(encode);

js.log(decodeURIComponent(encode));

