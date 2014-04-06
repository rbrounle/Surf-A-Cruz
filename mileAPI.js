function kimonoCallback(sl4Height) {
    var sl4Wave = sl4Height.results['collection1'][0]['property1'];
    document.getElementById("sl4Wave").innerHTML=sl4Wave;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/7u1nel36?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback",
    "crossDomain":true,
    "dataType":"jsonp"
});

function kimonoCallback2(sl4WTemp) {
    var sl4Temp = sl4WTemp.results['collection1'][0]['property1'];
    document.getElementById("sl4Temp").innerHTML=sl4Temp;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/e8yr2r3k?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback2",
    "crossDomain":true,
    "dataType":"jsonp"
}); 

function kimonoCallback7(sl4Wind) {
    var s4Wind = sl4Wind.results['collection1'][0]['property1'];
    document.getElementById('s4Wind').innerHTML=s4Wind;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/7fzsp34i?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback7",
    "crossDomain":true,
    "dataType":"jsonp"
});  
  
function kimonoCallback3(fourmHeight) {
    var fourmWave = fourmHeight.results['collection1'][0]['property1'];
    document.getElementById("fourmWave").innerHTML=fourmWave;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/2ugz9kzi?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback3",
    "crossDomain":true,
    "dataType":"jsonp"
});

function kimonoCallback4(fourmsWind) {
    var fourmWind = fourmsWind.results['collection1'][0]['property1'];
    document.getElementById("fourmWind").innerHTML=fourmWind;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/bravtiiq?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback4",
    "crossDomain":true,
    "dataType":"jsonp"
});
  
function kimonoCallback5(fourmsWater) {
    var fourmWater = fourmsWater.results['collection1'][0]['property1'];
    document.getElementById("fourmWater").innerHTML=fourmWater;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/9hyfk9l0?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback5",
    "crossDomain":true,
    "dataType":"jsonp"
});
  
function kimonoCallback6(bweather) {
    console.log(JSON.stringify(bweather));
    var weather = bweather.results['collection1'][0]['Temperature'] + "F";
    document.getElementById("weather").innerHTML=weather;
    var icon = bweather.results['collection2'][0]['Conditions']['src'];
    document.getElementById("icon").innerHTML=icon;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/cqsq9jx2?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback6",
    "crossDomain":true,
    "dataType":"jsonp"
});