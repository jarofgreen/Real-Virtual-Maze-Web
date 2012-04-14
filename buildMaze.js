var map, layer;



function init(){

      OpenLayers.Control.Click = OpenLayers.Class(OpenLayers.Control, {                
                defaultHandlerOptions: {
                    'single': true,
                    'double': false,
                    'pixelTolerance': 0,
                    'stopSingle': false,
                    'stopDouble': false
                },

                initialize: function(options) {
                    this.handlerOptions = OpenLayers.Util.extend(
                        {}, this.defaultHandlerOptions
                    );
                    OpenLayers.Control.prototype.initialize.apply(
                        this, arguments
                    ); 
                    this.handler = new OpenLayers.Handler.Click(
                        this, {
                            'click': this.trigger
                        }, this.handlerOptions
                    );
                }, 

                trigger: function(e) {
                    var lonlat = map.getLonLatFromViewPortPx(e.xy);
                    alert("You clicked near " + lonlat.lat + " N, " +
                                              + lonlat.lon + " E");
                }

            });


    map = new OpenLayers.Map( 'Map');
    layer = new OpenLayers.Layer.OSM( "Simple OSM Map");
    map.addLayer(layer);
    map.setCenter(
        new OpenLayers.LonLat(-3.175312, 55.950352).transform(
            new OpenLayers.Projection("EPSG:4326"),
            map.getProjectionObject()
        ), 15
    );    

    var click = new OpenLayers.Control.Click();
    map.addControl(click);
    click.activate();

}



