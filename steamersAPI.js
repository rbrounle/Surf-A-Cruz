function kimonoCallback(slHeight) {
    var slWave = slHeight.results['collection1'][0]['Wave Height'];
    document.getElementById("slWave").innerHTML=slWave;
    //console.log(JSON.stringify(data));
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/53ev7ll8?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback",
    "crossDomain":true,
    "dataType":"jsonp"
});

function kimonoCallback2(slWTemp) {
    var slTemp = slWTemp.results['Surfline Steamer Lane'][0]['Water Temperature'];
    document.getElementById("slTemp").innerHTML=slTemp;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/8orc9khi?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback2",
    "crossDomain":true,
    "dataType":"jsonp"
});
  
function kimonoCallback3(smHeight) {
    var smWave = smHeight.results['MSW Steamer Lane Wave Height'][0]['Wave Height'];
    document.getElementById("smWave").innerHTML=smWave;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/9tyt8t2a?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback3",
    "crossDomain":true,
    "dataType":"jsonp"
});
  

function kimonoCallback4(smsWind) {
    var smWind = smsWind.results['collection1'][0]['Wind Speed'];
    document.getElementById("smWind").innerHTML=smWind;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/9wpvymts?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback4",
    "crossDomain":true,
    "dataType":"jsonp"
});
  
function kimonoCallback5(smsWater) {
    var smWater = smsWater.results['collection1'][0]['Water Temp'];
    document.getElementById("smWater").innerHTML=smWater;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/64fgtaqe?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback5",
    "crossDomain":true,
    "dataType":"jsonp"
});
  
function kimonoCallback6(bweather) {
    //console.log(JSON.stringify(bweather));
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
  
function kimonoCallback7(slsCond) {
    console.log(JSON.stringify(slsCond));
    var ssCond = slsCond.results['collection1'][0]['Condition'];
    document.getElementById("ssCond").innerHTML=ssCond;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/9tcwwioo?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback7",
    "crossDomain":true,
    "dataType":"jsonp"
});