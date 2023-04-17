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

    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);
//https://developers.arcgis.com/javascript/latest/add-a-point-line-and-polygon/
    const point = {
      type: "point",
      longitude: 15,
      latitude: 50
    };
    const simpleMarkerSymbol = {
      type: "simple-marker",
      color: [226, 119, 40],  // Orange
      outline: {
          color: [255, 255, 255], // White
          width: 1
      }
   };

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