
$(document).ready(function () {
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?lat=40.22&lon=44.46&appid=92c60df2a359d71c11bbf45ed918c2e2',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data.coord.lat);
            $('.card').append("<div class='m-3'><span>"+data.coord.lon+"</span> <span>"+data.coord.lat+"</span></div>");
        }

    });
});
