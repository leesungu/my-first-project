
function check(){
    var sports;
    try {
        sports = member;
    } catch (e){
        js.log('catch: ' + e.message);
    }
}
check();


//function check(){
//    var sports;
//    try {
//        if (!sports){
//            throw 'sports에 값이 없습니다.';
//        }
//    } catch (e){
//        js.log('catch: ' + e);
//    }
//}
//check();

//-------- new Error() --------
//var sports;
//try {
//    if (!sports){
//        throw new Error('sports에 값이 없습니다.');
//    }
//} catch (e){
//    js.log('catch: ' + e.message);
//}
