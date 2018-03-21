window.onload = function(){

    var value = function(){
        return 456;
    }();
    js.log('자동실행: ' + value);

    value = (function(){
        return 789;
    }());
    js.log(value);


    (function(){
        js.log('ABC');
    }());
}
