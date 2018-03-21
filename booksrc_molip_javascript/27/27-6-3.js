
function get(){
    js.log('global');
}
var sports = function(){
    function get(){
        js.log('sports');
    };

    this.get();
    get();
}
sports();

