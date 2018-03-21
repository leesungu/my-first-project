window.onload = function(){
    var customEvent = function(){
        this.customObj = {};
    };

    customEvent.prototype = {
        fireEvent: function(type, option){
            this.customObj[type].forEach(function(custom){
                custom.method.call(custom.obj, option);
            }, this);
        },

        on: function(type, method, obj){
            if (type && method){
                var handle = this.customObj[type];
                if (!handle){
                    handle = this.customObj[type] = [];
                }
                handle.push({method: method, obj: obj});
            }
        },

        off: function(type, method, obj){
            this.customObj[type].forEach(function(custom, idx){
                if (method == custom.method && obj == custom.obj){
                    this.customObj[type].splice(idx--, 1);
                }
            }, this);
        }
    };

    var eventObj = new customEvent(); 
    
    eventObj.on('press', receiveMethod, this);
    eventObj.fireEvent('press');

    function receiveMethod(){
        js.log('이벤트 발생');
    };

    eventObj.off('press', receiveMethod, this);
}
