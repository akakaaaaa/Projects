$(document).ready(function () {

    $(document).keydown(function(event) {
        if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
                event.preventDefault();
             }
            // 107 Num Key  +
            // 109 Num Key  -
            // 173 Min Key  hyphen/underscore key
            // 61 Plus key  +/= key
        });
        
        document.addEventListener('wheel', function(event) {
            if (event.ctrlKey) {
                event.preventDefault(); 
            }
        }, { passive: false });
        
        document.addEventListener('mousewheel', function(event) {
            if (event.ctrlKey) {
                event.preventDefault(); 
            }
        }, { passive: false });
        
        document.addEventListener('DOMMouseScroll', function(event) {
            if (event.ctrlKey) {
                event.preventDefault(); 
            }
        }, { passive: false });

$(window).bind('mousewheel DOMMouseScroll', function (event) {
       if (event.ctrlKey == true) {
       event.preventDefault();
       }
});
    
   
 
    
    $(".button").click(function (e) { 
        e.preventDefault();
        
        window.location.assign("destination-moon.html");

    });

});

