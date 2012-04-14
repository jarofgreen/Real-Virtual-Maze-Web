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

function getData() {

	var html = '';

	for(i in lineLayer.features) {
		var f = lineLayer.features[i];
		for (j in f.geometry.components) {
			var p = f.geometry.components[j];

			var ll = new OpenLayers.LonLat(p.x, p.y).transform(
				map.getProjectionObject(),
	            new OpenLayers.Projection("EPSG:4326"),
         		15);

			html += ll.lat +","+ ll.lon + "\n";

		}
		html += "END\n";
	}

	$('#Results').val(html);

}


