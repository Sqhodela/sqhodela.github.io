require(["esri/config", 
"esri/Map", 
"esri/views/MapView", 
"esri/widgets/Locate", 
"esri/widgets/Track", 
"esri/Graphic", 
"esri/Graphic",
"esri/layers/GraphicsLayer"
]
, function(esriConfig, Map, MapView, Locate, Track, Graphic, GraphicsLayer) 
  
  {

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

    $("#button2").click(function(){
        alert("yeah")
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
    
  });