function sports(){
    try {
        var check = member;
    } catch (e){
        debugger;
        js.log(e.message);
        return 'catch 수행';
    }
}
var result = window.sports();
js.log(result);
