window.onload = function(){
    var data = [
        {field: '강남점', name: '이순신', point: 500},
        {field: '홍대점', name: '홍길동', point: 100}
    ];
    var template = document.getElementById('row');

    data.forEach(function(obj, k){
        var clone = template.content.cloneNode(true);
        var cells = clone.querySelectorAll('td');

        cells[0].textContent = obj.field;
        cells[1].textContent = obj.name;
        cells[2].textContent = obj.point;

        template.parentNode.appendChild(clone);
    });
}
