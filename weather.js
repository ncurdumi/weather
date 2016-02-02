$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "<h1>Weather Forecast</h1>" +
      "<h2>Right Now</h2>" +
        "<p> <b>" + data.currently.summary + ". " + data.hourly.summary + "</b> <p>" +
        "<ul><li> Right now, the temperature is " + data.currently.temperature + " degrees. </li>" +
        "<li>Wind speeds of " + data.currently.windSpeed + " mph. </li></ul>" +
      "<h2>Looking Ahead</h2>" +
          "<p>" + data.daily.summary + "</li></p>" +
        "<h3>Temperatures</h3>" +
          "<ul><li><i> Tomorrow: </i> A low of <b>" + data.daily.data[1].temperatureMin + " degrees </b>and a high of <b>" +data.daily.data[1].temperatureMax +" degrees</b>. </li>" +
          "<li><i> The day after tomorrow: </i> A low of <b>" + data.daily.data[2].temperatureMin + " degrees </b>and a high of <b>" +data.daily.data[1].temperatureMax +" degrees</b>. </li>" +
          "<li><i> The following day: </i> A low of <b>" + data.daily.data[3].temperatureMin + " degrees </b>and a high of <b>" +data.daily.data[1].temperatureMax +" degrees</b>. </li></ul>"

// Format for daily: use console to look up variable. check out week 3 survival guide for help.
    // "<ul><li> Temperature:" + data.currently.variable + "text"<li>



// For next days Look at data array, data.daily.data[1].variable for tomorrow and so on

    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
