var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Hhenfestpunkte_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geodienste.hamburg.de/HH_WMS_Hoehenpunkte",
    attributions: ' ',
                              params: {
                                "LAYERS": "hoehenfestpunkte",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Höhenfestpunkte",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Hhenfestpunkte_1, 0]);

lyr_OpenStreetMap_0.setVisible(true);lyr_Hhenfestpunkte_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Hhenfestpunkte_1];
