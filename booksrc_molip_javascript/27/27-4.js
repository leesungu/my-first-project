var sports = {
    member: 123,
    get: function(){
        var member = 789;
        var result = this === sports.get;
        debugger;

        js.log(result);
        js.log(this.member === 123);
    }
};
sports.get();
