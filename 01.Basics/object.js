var myList = [];
for (var i = 0; i < 5; i++) {
    var item = {
        value: i,
        printValue: function () {
            console.log(this.value);
        }
    };
    myList.push(item);
}
for (var _i = 0, myList_1 = myList; _i < myList_1.length; _i++) {
    var listItem = myList_1[_i];
    listItem.printValue();
}
