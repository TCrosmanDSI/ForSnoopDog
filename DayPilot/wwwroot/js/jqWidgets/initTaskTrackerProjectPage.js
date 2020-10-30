function initTaskTrackerProjectPage(elementId) {
    var data = [
        {
            "Department": "Design Engineering",
            "Wiring": 25,
            "Sketch": 0,
            "SOW": 0,
            "BOM": 0,
            "Review": 0
        }
    ];

    // prepare the data
    var source =
    {
        datatype: "json",
        datafields: [
            { name: 'Department', type: 'string' },
            { name: 'Wiring', type: 'int' },
            { name: 'Sketch', type: 'int' },
            { name: 'SOW', type: 'int' },
            { name: 'BOM', type: 'int' },
            { name: 'Review', type: 'int' }
        ],
        localdata: data
    };
    var dataAdapter = new $.jqx.dataAdapter(source);
    $("#" + elementId).jqxGrid(
        {
            theme: 'darkblue',
            width: '100%',
            source: dataAdapter,
            editable: true,
            selectionmode: 'singlecell',
            columnsresize: true,
            columns: [
                { text: 'Project', datafield: 'Department', width: 250 },
                { text: 'Wiring', datafield: 'Wiring', width: 250 },
                { text: 'Sketch', datafield: 'Sketch', width: 250 },
                { text: 'SOW', datafield: 'SOW', width: 250 },
                { text: 'BOM', datafield: 'BOM', width: 250 },
                { text: 'Review', datafield: 'Review', width: 250 },
            ]
        });
}