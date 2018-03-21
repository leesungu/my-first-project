window.onload = function(){

    var sports = {member: 11};
    var dup = {};
    for (var name in sports){
        dup[name] = sports[name];
    }
    dup.member = 'ABC';

    js.log(sports.member);
}
