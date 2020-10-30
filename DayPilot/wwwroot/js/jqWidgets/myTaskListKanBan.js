function initializeMyTaskListKanBan(elementId, dotNetReferenceCallBack) {
    var fields = [
        { name: "id", type: "string" },
        { name: "status", map: "state", type: "string" },
        { name: "text", map: "label", type: "string" },
        { name: "tags", type: "string" },
        { name: "color", map: "hex", type: "string" },
        { name: "resourceId", type: "number" }
    ];
    var source =
    {
        localData: [
            { id: "1161", state: "new", label: "Combine Orders", tags: "orders, combine", hex: "#5dc3f0", resourceId: 3 },
            { id: "1645", state: "work", label: "Change Billing Address", tags: "billing", hex: "#f19b60", resourceId: 1 },
            { id: "9213", state: "new", label: "One item added to the cart", tags: "cart", hex: "#5dc3f0", resourceId: 3 },
            { id: "6546", state: "done", label: "Edit Item Price", tags: "price, edit", hex: "#5dc3f0", resourceId: 4 },
            { id: "9034", state: "new", label: "Login 404 issue", tags: "issue, login", hex: "#6bbd49" }
        ],
        dataType: "array",
        dataFields: fields
    };
    var dataAdapter = new $.jqx.dataAdapter(source);
    var resourcesAdapterFunc = function () {
        var resourcesSource =
        {
            localData: [
                { id: 0, name: "No name", image: "js/jqWidgets/images/common.png", common: true },
                { id: 1, name: "Andrew Fuller", image: "js/jqWidgets/images/andrew.png" },
                { id: 2, name: "Janet Leverling", image: "js/jqWidgets/images/janet.png" },
                { id: 3, name: "Steven Buchanan", image: "js/jqWidgets/images/steven.png" },
                { id: 4, name: "Nancy Davolio", image: "js/jqWidgets/images/nancy.png" },
                { id: 5, name: "Michael Buchanan", image: "js/jqWidgets/images/Michael.png" },
                { id: 6, name: "Margaret Buchanan", image: "js/jqWidgets/images/margaret.png" },
                { id: 7, name: "Robert Buchanan", image: "js/jqWidgets/images/robert.png" },
                { id: 8, name: "Laura Buchanan", image: "js/jqWidgets/images/Laura.png" },
                { id: 9, name: "Laura Buchanan", image: "js/jqWidgets/images/Anne.png" }
            ],
            dataType: "array",
            dataFields: [
                { name: "id", type: "number" },
                { name: "name", type: "string" },
                { name: "image", type: "string" },
                { name: "common", type: "boolean" }
            ]
        };
        var resourcesDataAdapter = new $.jqx.dataAdapter(resourcesSource);
        return resourcesDataAdapter;
    }
    $('#' + elementId).jqxKanban({
        height: 300,
        width: '100%',
        theme: 'darkblue',
        resources: resourcesAdapterFunc(),
        source: dataAdapter,
        columns: [
            { text: "Not Started", dataField: "new", maxItems: 5 },
            { text: "In Progress", dataField: "work", maxItems: 5 },
            { text: "Done", dataField: "done", maxItems: 5 }
        ]
    });
}