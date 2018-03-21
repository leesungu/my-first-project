
function Sports(){
};
var sportsObj = new Sports();

try {
    new sportsObj();
} catch(e){
    js.log('인스턴스 생성 불가');
}

var consObj = new sportsObj.constructor();
js.log(typeof consObj);
