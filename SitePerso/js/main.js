
$(document).ready(function () {
    $("#panel2").slideUp("fast");
    $("#panel").slideUp("fast");

    $("#flip").click(function () {
        $("#panel2").slideUp("slow");
        $("#panel").slideToggle("slow");
    });

    $("#flip2").click(function () {
        $("#panel").slideUp("slow");
        $("#panel2").slideToggle("slow");
    });

    $('#fullpage').fullpage({
        anchors: ['slideAbstract']
    });

    $('[data-toggle="tooltip"]').tooltip()
});

$(document).on('click', '.navbar-collapse', function (e) {
    if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
        $(this).collapse('hide');
    }
});