var map, layer;

var lineLayer;

var control;

function init(){

    map = new OpenLayers.Map( 'Map');
    layer = new OpenLayers.Layer.OSM( "Simple OSM Map");
    map.addLayer(layer);
    map.setCenter(
        new OpenLayers.LonLat(-3.175312, 55.950352).transform(
            new OpenLayers.Projection("EPSG:4326"),
            map.getProjectionObject()
        ), 15
    );    

	lineLayer = new OpenLayers.Layer.Vector("Line Layer");
	map.addLayer(lineLayer);

	control = new OpenLayers.Control.DrawFeature(lineLayer,OpenLayers.Handler.Path);
	map.addControl(control);
	control.activate();

}



