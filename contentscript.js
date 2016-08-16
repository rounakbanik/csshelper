$('p, a, h3, h1, h2, h4, h5, h6, blockquote, li, span, b, i, em, strong').qtip({ 
    show: { when: { event: 'click', } },// Grab some elements to apply the tooltip to
    content: {
        text: function() {
          var styleProps = $(this).css([
          "font-family", "font-size", "font-weight", "font-style", "color", "letter-spacing", "line-height", "text-decoration"
        ]);
        var texter = "";
        $.each( styleProps, function( prop, value ) {
          texter += "<b>" + prop + ":</b> " + value + "<br>";
        });
        //texter += ""
          return texter;
        },
    },
    position: {
        target: 'mouse', 
        adjust: { x: 5, y: 5 } 
    }

});

