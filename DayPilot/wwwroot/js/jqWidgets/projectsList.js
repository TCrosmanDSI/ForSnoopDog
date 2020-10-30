function initializeProjectListWidget(elementId, jsonData) {
    var projectListSource =
    {
        dataType: 'json',
        dataFields: [
            { name: 'Id', type: 'string' },
            { name: 'Number', type: 'string' },
            { name: 'Name', type: 'string' },

            { name: 'ProjectManagerId', type: 'int' },
            { name: 'ProjectManager_PrimaryDisplayProperty', type: 'string' },

            { name: 'AccountExecutiveId', type: 'int' },
            { name: 'AccountExecutive_PrimaryDisplayProperty', type: 'string' },

            { name: 'DeliveringOfficeId', type: 'int' },
            { name: 'DeliveringOffice_PrimaryDisplayProperty', type: 'string' },

            { name: 'CustomerId', type: 'int' },
            { name: 'Customer_PrimaryDisplayProperty', type: 'string' },

            { name: 'Notes', type: 'string' }
        ],
        sortcolumn: 'Number',
        sortdirection: 'desc',
        id: 'Id',
        localdata: jsonData
    };
    var projectListDataAdapter = new $.jqx.dataAdapter(projectListSource);

    var initRowDetailsCallBack = function (id, row, element, rowinfo) {
        console.log(row);

        rowinfo.detailsHeight = 400;

        var detailsTable = "<table id='details_" + row.Id + "' class='table table-bordered table-hover table-striped'><tbody></tbody></table>";

        element.append($("" +
            "<div>" + detailsTable + "</div>"));

        var detailsTable = $("#details_" + row.Id);

        addDetailsRow('Notes', row.Notes, detailsTable);
    };

    $("#" + elementId).jqxDataTable(
        {
            width: '100%',
            theme: 'ui-redmond',
            source: projectListDataAdapter,
            columnsResize: true,
            columnsReorder: true,
            altRows: true,
            filterable: true,
            filterMode: 'advanced',
            incrementalSearch: false,
            sortable: true,
            rowDetails: true,
            pageable: true,
            pageSize: 25,
            initRowDetails: initRowDetailsCallBack,
            columns: [
                { text: 'Project Number', dataField: 'Number' },
                { text: 'Project Name', dataField: 'Name' },
                { text: 'Customer', dataField: 'Customer_PrimaryDisplayProperty' },
                { text: 'Project Manager', dataField: 'ProjectManager_PrimaryDisplayProperty' },
                { text: 'Account Executive', dataField: 'AccountExecutive_PrimaryDisplayProperty' },
                { text: 'Delivering Office', dataField: 'DeliveringOffice_PrimaryDisplayProperty' },
                {
                    text: 'Open', columntype: 'none', dataField: 'Id', width: 75, align: 'center', cellsAlign: 'center',
                    cellsRenderer: function (row, column, value, rowData) {
                        return buildProjectsListPageLinkButton(rowData.Id);
                    }
                }
            ],
            ready: function () {
                /*$("#" + elementId + " > div.jqx-rc-all.jqx-rc-all-ui-redmond.jqx-widget.jqx-widget-ui-redmond.jqx-input-group.jqx-input-group-ui-redmond > input").on('keyup', function (event) {
                    $('#' + elementId + 'Table > div.jqx-rc-all.jqx-rc-all-ui-redmond.jqx-widget.jqx-widget-ui-redmond.jqx-input-group.jqx-input-group-ui-redmond > div.jqx-fill-state-normal.jqx-fill-state-normal-ui-redmond.jqx-rc-r.jqx-rc-r-ui-redmond.jqx-input-group-addon.jqx-input-group-addon-ui-redmond').click();
                });*/
                $("#" + elementId).jqxDataTable('focus');
                //console.log(jsonData);
            }
        });
}

function buildProjectsListPageLinkButton(projectId) {
    return "<a href='/project/" + projectId + "' class='btn btn-primary' target='_blank'>Open</a>";
}

function addDetailsRow(key, value, tableReference) {
    tableReference.find('tbody').append(
        $('<tr>').append(
            $('<th>').append(key)
        ).append(
            $('<td>').append(value)
        )
    );
}