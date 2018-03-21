
var bonus = {
    value: 123,
    get: function() {
        return this.value;
    }
};

js.log(bonus.get());

var fnObj = bonus.get.bind({value: 456});
js.log(fnObj());

