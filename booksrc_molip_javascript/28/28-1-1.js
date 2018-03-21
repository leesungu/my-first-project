function sports(){
    this.value = 123;
    function getValue(){
        return this.value;
    }
    return getValue();
}
sports();
