function kimonoCallback(slpHeight) {
    var slpWave = slpHeight.results['collection1'][0]['property1'];
    document.getElementById("slpWave").innerHTML=slpWave;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/9rkpt1rm?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback",
    "crossDomain":true,
    "dataType":"jsonp"
});

/*function kimonoCallback2(slmaWTemp) {
    var slmaTemp = slmaWTemp.results['collection1'][0]['property1'];
    document.getElementById("slmaTemp").innerHTML=slmaTemp;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/4mzpzej6?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback2",
    "crossDomain":true,
    "dataType":"jsonp"
}); 

function kimonoCallback7(slmaWind) {
    var smaWind = slmaWind.results['collection1'][0]['property1'];
    document.getElementById('smaWind').innerHTML=smaWind;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/cesd5qxe?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback7",
    "crossDomain":true,
    "dataType":"jsonp"
});  
  
function kimonoCallback3(mamHeight) {
    var mamWave = mamHeight.results['collection1'][0]['property1'];
    document.getElementById("mamWave").innerHTML=mamWave;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/eda7udrq?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback3",
    "crossDomain":true,
    "dataType":"jsonp"
});

function kimonoCallback4(mamsWind) {
    var mamWind = mamsWind.results['collection1'][0]['property1'];
    document.getElementById("mamWind").innerHTML=mamWind;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/2c95fu5m?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback4",
    "crossDomain":true,
    "dataType":"jsonp"
});
  
function kimonoCallback5(mamsWater) {
    console.log(JSON.stringify(mamsWater));
    var mamWater = mamsWater.results['collection1'][0]['property1'];
    document.getElementById("mamWater").innerHTML=mamWater;
  }

  $.ajax({
    "url":"http://www.kimonolabs.com/api/e2de173g?apikey=b4dfe17359a0df9443cebb37c8d91400&callback=kimonoCallback5",
    "crossDomain":true,
    "dataType":"jsonp"
});*/
  
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
  
function thumbs(data) {
    var count = data['count'];
    document.getElementById('thumb_count').innerHTML = count;
  }

  $.ajax({
    "url":"http://169.233.200.61:8888/?beach=pleasurepoint&callback=thumbs",
    "crossDomain":true,
    "dataType":"jsonp"
});