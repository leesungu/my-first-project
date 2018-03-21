
window.onload = function(){
    var element = document.getElementById('clickID');
    element.onclick = show.bind(sports, element);
}

var sports = {
    value: 123
};

function show(element, event) {
    debugger;
    js.log(element.textContent);
    js.log(event.target.id);
    js.log(this.value);
}
