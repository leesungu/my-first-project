// throw

var sports;

try {
    if (!sports){
        throw {message: '에러', reason: '변수를 선언만 함'};
    }
} catch(e){
    js.log(e.message);
    js.log(e.reason);
}
