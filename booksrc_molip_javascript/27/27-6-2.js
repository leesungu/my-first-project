var sports = {
    value: 123,
    get: function () {
        js.log(this === window);
        js.log(this.value);
    }
};
var comp = sports.get;
comp();

//sports.get();
