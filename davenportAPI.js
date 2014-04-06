function kimonoCallback(sldHeight) {
    var sldWave = sldHeight.results['collection1'][0]['Wave Height'];
    document.getElementById("sldWave").innerHTML=sldWave;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/4nd0t5kq?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback",
    "crossDomain":true,
    "dataType":"jsonp"
});

function kimonoCallback2(sldWTemp) {
    var sldTemp = sldWTemp.results['collection1'][0]['Water Temp'];
    document.getElementById("sldTemp").innerHTML=sldTemp;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/7jjws6w2?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback2",
    "crossDomain":true,
    "dataType":"jsonp"
}); 

function kimonoCallback7(sldWind) {
    var sdWind = sldWind.results['collection1'][0]['property1'];
    document.getElementById('sdWind').innerHTML=sdWind;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/bb0bq5ii?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback7",
    "crossDomain":true,
    "dataType":"jsonp"
});  
  
function kimonoCallback3(dmHeight) {
    var dmWave = dmHeight.results['collection1'][0]['property1'];
    document.getElementById("dmWave").innerHTML=dmWave;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/23kllrlk?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback3",
    "crossDomain":true,
    "dataType":"jsonp"
});

function kimonoCallback4(dmsWind) {
    var dmWind = dmsWind.results['collection1'][0]['property1'];
    document.getElementById("dmWind").innerHTML=dmWind;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/7njevo2u?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback4",
    "crossDomain":true,
    "dataType":"jsonp"
});
  
function kimonoCallback5(dmsWater) {
    console.log(JSON.stringify(dmsWater));
    var dmWater = dmsWater.results['collection1'][0]['property1'];
    document.getElementById("dmWater").innerHTML=dmWater;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/cwmnifu8?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback5",
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