var check= false;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    check = !check;
    console.log(check);
    
    if(check) {
      var Toolqtip = $("p, a, h3, h1, h2, h4, h5, h6, blockquote, li, span, b, i, em, strong").qtip({ 
          show: { when: { event: 'click', } },
          content: {
            text: function() {
                  var styleProps = $(this).css([
                    "font-family", "font-size", "font-weight", "font-style", "color", "letter-spacing", "line-height", "text-decoration"
                  ]);
            var texter = "";
            $.each( styleProps, function( prop, value ) {
              texter += "<b>" + prop + ":</b> " + value + "<br>";
            });
            return texter;
          },
        },
        position: {
          target: 'mouse', 
          adjust: { x: 5, y: 5 } 
        }
    });
  }
    
  else {
    $("p, a, h3, h1, h2, h4, h5, h6, blockquote, li, span, b, i, em, strong").qtip('destroy', false) 
  }
});




