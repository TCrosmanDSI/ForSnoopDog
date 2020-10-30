function initializeEquipmentPoolList(elementId) {
    var equipmentPoolSource =
    {
        dataType: 'json',
        dataFields: [
            { name: 'id', type: 'int' },
            { name: 'itemnumber', type: 'string' },
            { name: 'projectcategoryid', type: 'string' },
            { name: 'manufacturername', type: 'string' },
            { name: 'manufacturerpartnumber', type: 'string' },
            { name: 'productdescription', type: 'string' }
        ],
        sortcolumn: 'ITEMNUMBER',
        sortdirection: 'desc',
        id: 'id',
        root: 'value', //for Odata
        url: '/api/EquipmentPoolItems'
    };
    var equipmentPoolDataAdapter = new $.jqx.dataAdapter(equipmentPoolSource);

    $("#" + elementId).jqxDataTable(
        {
            width: '100%',
            theme: 'ui-redmond',
            source: equipmentPoolDataAdapter,
            columnsResize: true,
            columnsReorder: true,
            altRows: true,
            filterable: true,
            filterMode: 'advanced',
            incrementalSearch: false,
            sortable: true,
            rowDetails: false,
            pageable: true,
            pageSize: 25,
            //initRowDetails: initRowDetailsCallBack,
            columns: [
                { text: 'Div-Id Number', dataField: 'itemnumber' },
                { text: 'Category Name', dataField: 'projectcategoryid' },
                { text: 'Manufacturer', dataField: 'manufacturername' },
                { text: 'Part Number', dataField: 'manufacturerpartnumber' },
                { text: 'Description', dataField: 'productdescription' }
            ],
            ready: function () {
                $("#" + elementId).jqxDataTable('focus');
            }
        });
}