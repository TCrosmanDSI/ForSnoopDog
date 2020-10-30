function initJqWidget(elementId, dotNetReference) {

    var source = [
        {
            label: "Peppermint Hot Chocolate",
            value: "1",
            checked: true,
            index: 0,
            dateCreated: '2020-08-31'
        },
        {
            label: "French",
            value: "2",
            checked: true,
            index: 1,
            dateCreated: '2020-08-31'
        },
        {
            label: "October",
            value: "3",
            checked: true,
            index: 2,
            dateCreated: '2020-08-31'
        }
    ];

    //, renderer: function (index, label, value) {
//    console.log(index);
//    var table = '<table>';
//    table += '<tr><td colspan=2>' + label + '</td></tr>';
//    table += '<tr><th>Due: </th><td>' + source[index].dateCreated + '</td></tr>';
//    table += '</table >';
//    return table;
//}

    $("#" + elementId).jqxListBox({
        theme: 'ui-redmond', allowDrop: true, allowDrag: true, width: 350, source: source, checkboxes: true, height: 350
    }).on('dragStart', function (event) {
        console.log(event);
    });

}