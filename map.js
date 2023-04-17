require(["esri/config", "esri/Map", "esri/views/MapView", "esri/widgets/Locate",], function(esriConfig, Map, MapView,Locate) {

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

    const locate = new Locate({
        view: view,
        goToOverride: function(view, options) {
          options.target.scale = 1000;
          return view.goTo(options.target);
        }
      });
      view.ui.add(locate, "top-left");
  });