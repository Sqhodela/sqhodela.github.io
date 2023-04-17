require(["esri/config", "esri/Map", "esri/views/MapView"], function(esriConfig, Map, MapView) {

    esriConfig.apiKey = "AAPKd2b5511cd2544d6894e839880dd45998fa898LLkFa0v45C90oldPCYRRqKVoh7UHEwYXPzInfocrAE7I4PZssJtRFa2lGFN";

    const map = new Map({
      basemap: "arcgis-topographic" // Basemap layer service
    });

    const view = new MapView({
      map: map,
      center: [-118.805, 34.027], // Longitude, latitude
      zoom: 13, // Zoom level
      container: "viewDiv" // Div element
    });

  });