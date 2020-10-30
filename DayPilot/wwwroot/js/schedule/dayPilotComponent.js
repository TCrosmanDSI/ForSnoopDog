let dpsList = [];

window.dayPilotComponent = {
    initialize: function (instanceId, dpInitPropertiesJSON, dayPilotJsInterop) {
        console.log('dayPilotComponent.initialize');
        let dps = new DayPilot.Scheduler(instanceId);
        let dpInitProperties = JSON.parse(dpInitPropertiesJSON);
        dps.eventMoveHandling = "Enabled";
        dps.eventMovingStartEndEnabled = true;
        dps.dynamicLoading = true;
        dps.dynamicEventRenderingCacheSweeping = true;

        dps.onEventMove = function (args) {
            if (args.areaData === "event-copy") {
                args.preventDefault();
            }
        }
        dps.onEventMoved = function (args) {
            var newEventData = args.e.data;
            newEventData.start = args.newStart;
            newEventData.end = args.newEnd;
            newEventData.resource = args.newResource;
            dayPilotJsInterop.invokeMethodAsync('OnEventMovedJs', JSON.stringify(newEventData));
            dps.update();
        }
        dps.onBeforeEventRender = function (args) {
            args.data.areas = [
                {
                    right: 2,
                    bottom: 2,
                    width: 16,
                    height: 16,
                    backColor: "#fff",
                    style: "box-sizing: border-box; border-radius: 7px; padding-left: 3px; border: 1px solid #ccc;font-size: 14px;line-height: 14px;color: #999; bar",
                    html: "&raquo;",
                    toolTip: "Copy",
                    action: "Move",
                    data: "event-copy"
                }
            ];
        }
        dps.onEventMoving = function (args) {
            if (args.external === true) {
                //var requestedDepartment = args.e.data.resourceDepartmentName;
                //var row = dp.rows.find(args.resource);
                //var currentTargetResourceDepartment = row.tags.taskCategory;
            } else {
                if (args.areaData && args.areaData === "event-copy") {
                    args.html = "Copying";
                }
            }
        };

        //dps.onScroll = function (args) {
        //    schedule.setScheduleData(args, dpSchedulePropertiesJSON);
        //};
        dpsList[instanceId] = dps;
        dps.init();
        dayPilotJsInterop.invokeMethodAsync('OnInitializedJs');
    },
    setProperties: function (instanceId, dpSchedulePropertiesJSON, dayPilotJsInterop) {
        console.log('dayPilotComponent.setProperties');
        let dps = dpsList[instanceId];
        let dpScheduleProperties = JSON.parse(dpSchedulePropertiesJSON);
        dps.scale = dpScheduleProperties.scale;
        dps.cellWidth = dpScheduleProperties.cellWidth;
        dps.height = dpScheduleProperties.height;
        dps.update();
    },
    setRange: function (instanceId, startDate, days, dayPilotJsInterop) {
        console.log('dayPilotComponent.setRange');
        let dps = dpsList[instanceId];
        dps.startDate = startDate;
        dps.days = days;
        dps.update();
        dayPilotJsInterop.invokeMethodAsync('OnRangeSetJs');
    },
    setResources: function (instanceId, dpScheduleResourcesJSON, dayPilotJsInterop) {
        console.log('dayPilotComponent.setResources');
        let dps = dpsList[instanceId];
        let dpScheduleResources = JSON.parse(dpScheduleResourcesJSON);        
        dps.resources = dpScheduleResources;
        dps.update();
        dayPilotJsInterop.invokeMethodAsync('OnResourcesSetJs');
    },
    setEvents: function (instanceId, dpScheduleEventsJSON, dayPilotJsInterop) {
        console.log('dayPilotComponent.setEvents');
        let dps = dpsList[instanceId];
        let dpScheduleEvents = JSON.parse(dpScheduleEventsJSON);
        dps.events.list = dpScheduleEvents;
        dps.update();
    },
    updateEvent: function (instanceId, dpEventJSON) {
        console.log('dayPilotComponent.updateEvent');
        let dps = dpsList[instanceId];
        let dpEvent = JSON.parse(dpEventJSON);
        let EventIndex = dps.events.list.find(x => x.id === dpEvent.id).index;
        dps.events.list[EventIndex] = dpEvent;
        dps.update();
    },
    dispose: function (instanceId) {
        console.log('dayPilotComponent.dispose');
        delete dpsList[instanceId];
    },
};