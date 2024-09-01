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


$(document).ready(function () {
    

    $(".carousel-circle").click(function (e) { 
        
        content = {
            circle1: {
                role: "The terminology",
                name: "Launch vehicle",
                imgSrc: "assets/technology/image-launch-vehicle-portrait.jpg",
                text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a  payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
            },

            circle2: {
                role: "The terminology",
                name: "Space capsule",
                imgSrc: "assets/technology/image-space-capsule-portrait.jpg",
                text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry  capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained"
            },

            circle3: {
                role: "The terminology",
                name: "Spaceport",
                imgSrc: "assets/technology/image-spaceport-portrait.jpg",
                text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch"
            },
        };

        const circleClass = $(this).attr("class").split(" ")[1];

        $(".carousel-circle").css("border", "1px solid rgba(255,255,255, 0.3)");
        $(".carousel-circle").css("background-color", "transparent");
        $(".carousel-circle").css("color", "white");
        $(this).css("border", "1px solid rgba(255,255,255, 0)");
        $(this).css("background-color", "white");
        $(this).css("color", "black");

        

        if(content[circleClass]){
            const {role, name, imgSrc, text} = content[circleClass];

            $(".role-h1").stop(true, true).fadeOut(100, function () { 
                $(this).html(role).fadeIn(300);
            });
            $(".name").stop(true, true).fadeOut(100, function () { 
                $(this).html(name).fadeIn(300);
            });
            $(".fadeout-img").stop(true, true).fadeOut(100, function () { 
                $(this).attr("src", imgSrc).fadeIn(300);
            });
            $(".destination-text-p").stop(true, true).fadeOut(100, function () { 
                $(this).html(text).fadeIn(300);
            });
        }

    });
});