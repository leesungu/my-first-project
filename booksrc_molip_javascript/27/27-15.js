
var sports = {
    value: 123
};

function statusChange(xhr) {
    if (xhr && xhr.readyState == 4){
        if (xhr.status > 199 && xhr.status < 300) {
            debugger;
            js.log(xhr.statusText);
            js.log(this.value);
        }
    }
}

var xhr = new XMLHttpRequest();
xhr.open('get', 'http://www.temp_temp.com/temp.txt', true);

xhr.onreadystatechange = statusChange.bind(sports, xhr);
xhr.send();
