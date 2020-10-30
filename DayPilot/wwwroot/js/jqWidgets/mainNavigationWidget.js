function initializeNavigationWidget() {
    $("#jqMainNavigationMenu").jqxMenu({ theme: 'darkblue', mode: 'vertical', width: '241px', minimizeWidth: 300 }).on('itemclick', function (event) {
        console.log();
        if (!event.args.dataset.buttontype) {
            //do Expand

            $('#diversifiedNavLogo').show(100, function () {
                $('.sidebar2').animate({
                    width: "243px"
                }, 500);
            });
        } else if (event.args.dataset.buttontype == 'colapse') {
            $('#jqMainNavigationMenu').jqxMenu('minimize');

            //$('#diversifiedNavLogo').hide(500);
            //
            //$('.sidebar2').width(50);

            $('.sidebar2').animate({
                width: "50px"
            }, 500, function () {
                $('#diversifiedNavLogo').hide(100);
            });
        }
    });
    $("#jqMainNavigationMenu").css('visibility', 'visible');

    $("#navColapseButton").on('click', function () {
        console.log('colapse clicked');
        $('#jqMainNavigationMenu').jqxMenu('minimize');
    });
}