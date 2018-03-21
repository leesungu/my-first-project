var sports = {
    value: 123,
    soccer: {
        value: 456,
        get: function () {
            return this.value;
        }
    }
};

js.log(sports.soccer.get.call(sports));

js.log(sports.soccer.get.call(sports.soccer));
