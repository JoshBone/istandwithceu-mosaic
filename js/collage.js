var viewer = OpenSeadragon({
   	id: "collage",
   	prefixUrl: "openseadragon/images/",
   	tileSources: "istandwithCEU.dzi",
   	showNavigator:  true,
   	navigatorPosition: "TOP_RIGHT",
});

$('.cc-dismiss').click(function( event ) {
  	event.preventDefault();
  	$('.cc-window').hide();
});