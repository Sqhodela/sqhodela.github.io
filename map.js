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

    $("#button2").click(async function(){
      var userPosition = {
        lat:1,
        lon:1};
        navigator.geolocation.getCurrentPosition(function(position){
          userPosition.lat = position.coords.latitude;
          userPosition.lon = position.coords.longitude;
          CreatePoint(userPosition.lon,userPosition.lat)
        });

        
    });

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

    $("#button2").click(function(){
        
    });
    
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