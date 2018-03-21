// throw

function showError(name){
    throw name + '를 선언하지 않았습니다.';
};

try {
    if (typeof sports == 'undefined'){
        showError('sports');
    }
} catch(e){
    js.log(e);
}
