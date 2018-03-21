// encodeURIComponent()

var uri = "saveData.jsp?name=축구&player=11명";
js.log(encodeURIComponent(uri));

// saveData.jsp?name=%EC%B6%95%EA%B5%AC&player=11%EB%AA%85
// saveData.jsp%3Fname%3D%EC%B6%95%EA%B5%AC%26player%3D11%EB%AA%85 
