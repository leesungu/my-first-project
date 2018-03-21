var sports = {
    value: 123,
    soccer : {
        value: 456,
        get: function () {
            js.log(this === sports.soccer);
            js.log(this.value);
        }
    }
};
sports.soccer.get();
