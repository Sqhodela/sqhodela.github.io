require(["esri/config", 
"esri/Map", 
"esri/views/MapView", 
"esri/widgets/Locate", 
"esri/widgets/Track", 
"esri/Graphic", 
"esri/layers/GraphicsLayer"
]
, function(esriConfig, Map, MapView, Locate, Track, Graphic, GraphicsLayer) 
  
  {
    const delay = millis => new Promise((resolve, reject) => {
      setTimeout(_ => resolve(), millis)
    });

    esriConfig.apiKey = "AAPKd2b5511cd2544d6894e839880dd45998fa898LLkFa0v45C90oldPCYRRqKVoh7UHEwYXPzInfocrAE7I4PZssJtRFa2lGFN";

    const map = new Map({
        basemap: "arcgis-navigation"
    });
    
    const view = new MapView({
      map: map,
      center: [14.210, 47.56], // Longitude, latitude
      zoom: 7, // Zoom level
      container: "viewDiv" // Div element
    });

    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);
    var yeah = false;

    $("#button1").click(function(){
      var userPosition = {
        lat:1,
        lon:1};
        navigator.geolocation.getCurrentPosition(function(position){
          userPosition.lat = position.coords.latitude;
          userPosition.lon = position.coords.longitude;
          alert("You are at \nLatitude: " + userPosition.lat + "\nLongitude: " + userPosition.lon);
          CreatePoint(userPosition.lon,userPosition.lat)
        });
    });

    var interval = 1000; // ms
    var expected = Date.now() + interval;
    var timer = 0;

    setTimeout(step, interval);
    function step() {
        var dt = Date.now() - expected; // the drift (positive for overshooting)
        if (dt > interval) {
            // something really bad happened. Maybe the browser (tab) was inactive?
            // possibly special handling to avoid futile "catch up" run
        }
        timer++;
        
        expected += interval;
        setTimeout(step, Math.max(0, interval - dt)); // take into account drift
    }

    $("#button2").click(function(){
      if(!yeah){
        document.getElementById("buttonTrack").innerHTML = "Stop tracking";
        yeah = true;
        GetPosition();
    }
      else if(yeah){
        document.getElementById("buttonTrack").innerHTML = "Start tracking";
        yeah = false;
      }
    });

    async function GetPosition(){
      var userPosition = {
        lat:1,
        lon:1};
        navigator.geolocation.watchPosition(function(position){
          userPosition.lat = position.coords.latitude;
          userPosition.lon = position.coords.longitude;
          CreatePoint(userPosition.lon,userPosition.lat)
        });
      if(yeah){
      //await delay(1000);
      //GetPosition();
      }
    };

    function CreatePoint(longitude,latitude){
      const point = {
        type: "point",
        longitude: longitude,
        latitude: latitude
      };
      const simpleMarkerSymbol = {
        type: "simple-marker",
        color: [226, 119, 40],
        outline: {
          color: [0, 0, 0],
          width: 1
        }
    };

      const pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol
      });
      graphicsLayer.add(pointGraphic);
    }
    
    const locate = new Locate({
      view: view,
      useHeadingEnabled: false,
      goToOverride: function(view, options) {
        options.target.scale = 1500;
        return view.goTo(options.target);
      }
    });
    view.ui.add(locate, "top-left");

    const track = new Track({
      view: view,
      graphic: new Graphic({
        symbol: {
          type: "simple-marker",
          size: "12px",
          color: "black",
          outline: {
            color: "#ffffff",
            width: "1.5px"
          }
        }
      }),
      useHeadingEnabled: false
    });
    view.ui.add(track, "top-left");

  });