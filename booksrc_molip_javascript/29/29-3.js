window.onload = function(){

    var sports = {};
    sports.deepCopy = function(target, dup){
        if (Array.isArray(dup)){
            dup.forEach(function(element, index){
                if (Array.isArray(element)){
                    if (!target[index]){
                        target[index] = [];
                    }
                    this.dedpCopy(target[index], element);
                } else if (typeof element === 'object'){
                    if (!target[index]){
                        target[index] = {};
                    }
                    this.deepCopy(target[index], element);
                } else {
                    target[index] = element;
                }
            }, this);
                
        } else if (typeof dup === 'object'){
            for (var pty in dup){
                var value = dup[pty];
                if (Array.isArray(value)){
                    if (!target[pty]){
                        target[pty] = [];
                    }
                    this.deepCopy(target[pty], value);
                
                } else if (typeof value === 'object'){
                    if (!target[pty]){
                        target[pty] = {};
                    }
                    this.deepCopy(target[pty], value);
                    
                } else {
                    target[pty] = value;
                }
            }
        }
    }

    sports.data = [
        {swim: [{member: 1}, {member: 8}]},
        {basketball: {member: 5}}
    ];
    sports.dup = {};
    
    sports.deepCopy(sports.dup, sports.data);

    sports.dup[1].basketball.member = 123;

    js.log(sports.data[1].basketball.member);
    js.log(sports.dup[1].basketball.member);
}
