function kimonoCallback(slwHeight) {
    var slwWave = slwHeight.results['collection1'][0]['Wave Height'];
    document.getElementById("slwWave").innerHTML=slwWave;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/6ct6pmu0?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback",
    "crossDomain":true,
    "dataType":"jsonp"
});

function kimonoCallback2(slwWTemp) {
    var slwTemp = slwWTemp.results['collection1'][0]['Water Temp'];
    document.getElementById("slwTemp").innerHTML=slwTemp;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/97ycvjoe?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback2",
    "crossDomain":true,
    "dataType":"jsonp"
}); 

function kimonoCallback7(slwWind) {
    var swWind = slwWind.results['collection1'][0]['Wind Speed'];
    document.getElementById('swWind').innerHTML=swWind;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/bo6fmm3c?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback7",
    "crossDomain":true,
    "dataType":"jsonp"
});  
  
function kimonoCallback3(wmHeight) {
    console.log(JSON.stringify(wmHeight));
    var wmWave = wmHeight.results['collection1'][0]['Wave Height'];
    document.getElementById("wmWave").innerHTML=wmWave;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/6jtsg84u?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback3",
    "crossDomain":true,
    "dataType":"jsonp"
});

function kimonoCallback4(wmsWind) {
    var wmWind = wmsWind.results['collection1'][0]['Wind Speed'];
    document.getElementById("wmWind").innerHTML=wmWind;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/apnz96os?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback4",
    "crossDomain":true,
    "dataType":"jsonp"
});
  
function kimonoCallback5(wmsWater) {
    var wmWater = wmsWater.results['collection1'][0]['Water Temp'];
    document.getElementById("wmWater").innerHTML=wmWater;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/7ik8qaym?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback5",
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