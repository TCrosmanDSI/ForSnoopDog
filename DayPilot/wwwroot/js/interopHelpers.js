window.interopHelpers = {
    writeToConsole: function (input) {
        console.log(input);
    },
    clickElement: function (element) {
        console.log("interopHelpers.click");
        element.click();
    }
}