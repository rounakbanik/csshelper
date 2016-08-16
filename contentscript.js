console.log("hello, world");

/*var elem = null;
$("*").hover(function() {
	elem = this;
	console.log("Hello "+ elem);

	var styleProps = $(this).css([
    	"width", "height", "color", "background-color", "font-family", "font-size", "letter-spacing", "color", "display"
  	]);
	$.each( styleProps, function( prop, value ) {
    	console.log( prop + ": " + value );
  	});

});*/

$('*').qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: function() {
        	var styleProps = $(this).css([
    			"width", "height", "color", "background-color", "font-family", "font-size", "font-weight", "letter-spacing", "color", "display"
  			]);
  			var texter = "<h3>CSS Properties</h3><br><ul>";
  			$.each( styleProps, function( prop, value ) {
    			texter += "<li><b>" + prop + ":</b> " + value + "</li>";
  			});
  			texter += "</ul>"
        	return texter;
        },
    },
    position: {
        target: 'mouse', // Track the mouse as the positioning target
        adjust: { x: 5, y: 5 } // Offset it slightly from under the mouse
    }

});

var tester = function() {
	return "Default";
}