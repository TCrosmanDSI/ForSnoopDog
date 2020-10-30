function initializeProjectEquipmentList(elementId, jsonData) {

    var projectEquipmentSource =
    {
        dataType: 'json',
        dataFields: [
            { name: 'ItemDivId', type: 'string' },
            { name: 'ManufacturerName', type: 'string' },
            { name: 'ManufacturerPartNumber', type: 'string' },
            { name: 'ManufacturerDescription', type: 'string' },
            { name: 'Quantity', type: 'string' },
            { name: 'ItemCategory', type: 'string' },
            { name: 'ItemTaskName', type: 'string' }
        ],
        sortcolumn: 'ManufacturerName',
        sortdirection: 'desc',
        id: 'Id',
        localdata: jsonData
    };
    var projectEquipmentDataAdapter = new $.jqx.dataAdapter(projectEquipmentSource);

    $("#" + elementId).jqxDataTable(
        {
            pageable: true,
            width: '100%',
            theme: 'ui-redmond',
            source: projectEquipmentDataAdapter,
            columnsResize: true,
            columnsReorder: true,
            altRows: true,
            filterable: true,
            filterMode: 'simple',
            incrementalSearch: false,
            sortable: true,
            rowDetails: false,
            pageSize: 25,
            //initRowDetails: initRowDetailsCallBack,
            columns: [
                { text: 'Div-Id', dataField: 'ItemDivId' },
                { text: 'Manufacturer', dataField: 'ManufacturerName' },
                { text: 'Part Number', dataField: 'ManufacturerPartNumber' },
                { text: 'Description', dataField: 'ManufacturerDescription' },
                { text: 'Quantity', dataField: 'Quantity' },
                { text: 'Item Category', dataField: 'ItemCategory' },
                { text: 'Task Name', dataField: 'ItemTaskName' }
            ],
            ready: function () {
                $("#" + elementId + " > div.jqx-rc-all.jqx-rc-all-ui-redmond.jqx-widget.jqx-widget-ui-redmond.jqx-input-group.jqx-input-group-ui-redmond > input").on('keyup', function (event) {
                    $('#' + elementId + 'Table > div.jqx-rc-all.jqx-rc-all-ui-redmond.jqx-widget.jqx-widget-ui-redmond.jqx-input-group.jqx-input-group-ui-redmond > div.jqx-fill-state-normal.jqx-fill-state-normal-ui-redmond.jqx-rc-r.jqx-rc-r-ui-redmond.jqx-input-group-addon.jqx-input-group-addon-ui-redmond').click();
                });
            }
        });
}