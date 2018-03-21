// throw

var sports;
try {
    if (!sports){
        throw new Error('Error 인스턴스');
    }
} catch(e){
    js.log(e.message);
}
