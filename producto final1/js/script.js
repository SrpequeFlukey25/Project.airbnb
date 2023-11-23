$(document).ready(function () {
    //cambiar url
    var apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=20.6668&longitude=-103.3918&hourly=temperature_2m&timezone=auto&forecast_days=1';

    // API PEDORRA NO FUNCIONA
    $.getJSON(apiUrl, function (data) {
        console.log(data.hourly.temperature_2m[0]);//NO BORRAR NO FUNCIONA SI BORRADO


        let primeraHora = data.hourly.temperature_2m[0].toString();

        var climaInfo = '<h2>Temperatura Actual</h2>';
        
        if (primeraHora !== undefined) {
            primeraHora += '<p>' + primeraHora.value + ' °C</p>';
        } else {
            primeraHora += '<p>No hay datos disponibles para la hora actual.</p>';
        }

        $('#primeraHora').html(primeraHora);
    });
});



