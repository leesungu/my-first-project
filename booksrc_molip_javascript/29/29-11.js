window.onload = function(){
    var data = [
        {'textClass': 'dataClass', text: 'text-1'},
        {'textClass': 'dataClass', text: 'text-2'},
        {'textClass': 'dataClass', text: 'text-3'}
    ]

    var template = function(format){
        this.template = format;
    };

    template.prototype = {
        templateExp:  /\{([\w-]+)?\}/g,

        match: function(data){
            return this.template.replace(this.templateExp, function(src, key){
                return data[key];
            });
        }
    };

    var templateObj = new template('<div class="{textClass}">{text}</div>');
    var markupList = [];

    data.forEach(function(obj){
        markupList.push(templateObj.match(obj));
    }, this);

    document.getElementById('first').innerHTML = markupList.join(''); 
}
