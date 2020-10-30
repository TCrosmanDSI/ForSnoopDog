function initTaskTracker(elementId) {
    var data = [{
        "ProjectNumber": "AV4Ken1056",
        "Wiring": 25,
        "Sketch": 0,
        "SOW": 0,
        "BOM": 0,
        "Review": 0
    }, {
        "ProjectNumber": "AV4Ken2048",
        "Wiring": 25,
        "Sketch": 0,
        "SOW": 0,
        "BOM": 0,
        "Review": 0
    }, {
        "ProjectNumber": "AV4Ken4096",
        "Wiring": 25,
        "Sketch": 0,
        "SOW": 0,
        "BOM": 0,
        "Review": 0
    }];
    // prepare the data
    var source =
    {
        datatype: "json",
        datafields: [
            { name: 'ProjectNumber', type: 'string' },
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
                { text: 'Project', datafield: 'ProjectNumber', width: 250 },

                {
                    text: 'Wiring Task', width: 200, columntype: 'custom', datafield: 'Wiring',
                    createeditor: function (row, cellvalue, editor, cellText, width, height) {
                        editor.css('margin-top', '2px');
                        editor.jqxSlider({ theme: 'darkblue', step: 25, mode: 'fixed', showTicks: true, ticksFrequency: 25, min: 0, max: 100, width: width, height: height });
                    },
                    initeditor: function (row, cellvalue, editor, celltext, pressedkey) {
                        var value = parseInt(cellvalue);
                        if (isNaN(value)) value = 0;
                        editor.jqxSlider('setValue', value);
                    },
                    geteditorvalue: function (row, cellvalue, editor) {
                        return editor.val();
                    }
                },
                {
                    text: 'Sketch Task', width: 200, columntype: 'custom', datafield: 'Sketch',
                    createeditor: function (row, cellvalue, editor, cellText, width, height) {
                        editor.css('margin-top', '2px');
                        editor.jqxSlider({ theme: 'darkblue', step: 25, mode: 'fixed', showTicks: true, ticksFrequency: 25, min: 0, max: 100, width: width, height: height });
                    },
                    initeditor: function (row, cellvalue, editor, celltext, pressedkey) {
                        var value = parseInt(cellvalue);
                        if (isNaN(value)) value = 0;
                        editor.jqxSlider('setValue', value);
                    },
                    geteditorvalue: function (row, cellvalue, editor) {
                        return editor.val();
                    }
                },
                {
                    text: 'SOW Task', width: 200, columntype: 'custom', datafield: 'SOW',
                    createeditor: function (row, cellvalue, editor, cellText, width, height) {
                        editor.css('margin-top', '2px');
                        editor.jqxSlider({ theme: 'darkblue', step: 25, mode: 'fixed', showTicks: true, ticksFrequency: 25, min: 0, max: 100, width: width, height: height });
                    },
                    initeditor: function (row, cellvalue, editor, celltext, pressedkey) {
                        var value = parseInt(cellvalue);
                        if (isNaN(value)) value = 0;
                        editor.jqxSlider('setValue', value);
                    },
                    geteditorvalue: function (row, cellvalue, editor) {
                        return editor.val();
                    }
                },
                {
                    text: 'BOM Task', width: 200, columntype: 'custom', datafield: 'BOM',
                    createeditor: function (row, cellvalue, editor, cellText, width, height) {
                        editor.css('margin-top', '2px');
                        editor.jqxSlider({ theme: 'darkblue', step: 25, mode: 'fixed', showTicks: true, ticksFrequency: 25, min: 0, max: 100, width: width, height: height });
                    },
                    initeditor: function (row, cellvalue, editor, celltext, pressedkey) {
                        var value = parseInt(cellvalue);
                        if (isNaN(value)) value = 0;
                        editor.jqxSlider('setValue', value);
                    },
                    geteditorvalue: function (row, cellvalue, editor) {
                        return editor.val();
                    }
                },
                {
                    text: 'Review Task', width: 200, columntype: 'custom', datafield: 'Review',
                    createeditor: function (row, cellvalue, editor, cellText, width, height) {
                        editor.css('margin-top', '2px');
                        editor.jqxSlider({ theme: 'darkblue', step: 25, mode: 'fixed', showTicks: true, ticksFrequency: 25, min: 0, max: 100, width: width, height: height });
                    },
                    initeditor: function (row, cellvalue, editor, celltext, pressedkey) {
                        var value = parseInt(cellvalue);
                        if (isNaN(value)) value = 0;
                        editor.jqxSlider('setValue', value);
                    },
                    geteditorvalue: function (row, cellvalue, editor) {
                        return editor.val();
                    }
                }
            ]
        });
}