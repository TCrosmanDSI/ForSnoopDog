function initializeProjectRoomsList(elementId) {
    var data = [{
        "RoomName": "Jasper",
        "RoomType": "Conf Room",
        "TurnOverDate": "10/30",
        "TestingStatus": "34%"
    }, {
        "RoomName": "Carry",
        "RoomType": "Huddle Room",
        "TurnOverDate": "11/30",
        "TestingStatus": "88%"
    }, {
        "RoomName": "Williamton",
        "RoomType": "MPR",
        "TurnOverDate": "12/30",
        "TestingStatus": "20%"
    }];

    var projectRoomsSource =
    {
        dataType: 'json',
        dataFields: [
            { name: 'RoomName', type: 'string' },
            { name: 'RoomType', type: 'string' },
            { name: 'TurnOverDate', type: 'string' },
            { name: 'TestingStatus', type: 'string' }
        ],
        sortcolumn: 'RoomName',
        sortdirection: 'desc',
        id: 'Id',
        localdata: data
    };
    var projectRoomsDataAdapter = new $.jqx.dataAdapter(projectRoomsSource);

    $("#" + elementId).jqxDataTable(
        {
            pageable: true,
            width: '100%',
            theme: 'ui-redmond',
            source: projectRoomsDataAdapter,
            columnsResize: true,
            columnsReorder: true,
            altRows: true,
            filterable: true,
            filterMode: 'simple',
            incrementalSearch: false,
            sortable: true,
            rowDetails: false,
            pageSize: 25,
            columns: [
                { text: 'Room Name', dataField: 'RoomName' },
                { text: 'Room Type', dataField: 'RoomType' },
                { text: 'Turn Over Date', dataField: 'TurnOverDate' },
                { text: 'Testing Status', dataField: 'TestingStatus' }
            ]
        });
}