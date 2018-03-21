
var bonus = {
    get: function() {
        return Array.prototype.slice.call(arguments);
    }
};
var fnObj = bonus.get.bind({value: 10}, 20, 30);

js.log(fnObj(40, 50));
