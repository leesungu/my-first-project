function get(one, two){
    js.log(one + two + arguments[2]);
}

get.apply(this, [10, 20, 50]);
