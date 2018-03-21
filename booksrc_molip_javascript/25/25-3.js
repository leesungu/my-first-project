
var set = function(){
    var set111 = function(){set222();}
    var set222 = function(){set333();}
    var set333 = function(){
        debugger;
    }
    set111();
}
set();
