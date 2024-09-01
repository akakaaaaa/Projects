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


    const style = $('<style></style>').appendTo('head');

    const content = {
        circle1: {
            role: "Commander",
            name: "Douglas Hurley",
            imgSrc: "assets/crew/image-douglas-hurley.webp",
            text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
            margin: "17"  
        },
        circle2: {
            role: "Mission Specialist",
            name: "Mark Shuttleworth",
            imgSrc: "assets/crew/image-mark-shuttleworth.webp",
            text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
            margin: "46"   
        },
        circle3: {
            role: "Pilot",
            name: "Victor Glover",
            imgSrc: "assets/crew/image-victor-glover.webp",
            text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64 and served as a station systems flight engineer.",
            margin: "45"
        },
        circle4: {
            role: "Flight Engineer",
            name: "Anousheh Ansari",
            imgSrc: "assets/crew/image-anousheh-ansari.webp",
            text: "Anousheh Ansari is an Iranian-American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
            margin: "60"
        }
    };

    

    $(".carousel-circle").click(function (e) { 
        e.preventDefault();

        $(".carousel-circle").css("opacity", "20%");
        $(this).css("opacity", "99.99%"); 

        const circleClass = $(this).attr("class").split(" ")[1];

        if (content[circleClass]) {
            const { role, name, imgSrc, text, margin } = content[circleClass];

            $('<style></style>').fadeOut(100,function () {
                style.text(`
                    .moon::after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 20%;
                        background: linear-gradient(to bottom, rgba(11, 13, 23, 0) 0%, rgba(11, 13, 23, 1) 100%); 
                        pointer-events: none; 
                        margin-bottom: ${margin}px;
                    }

                `);
                $('<style></style>').fadeIn();
            })

            

            $(".role-h1").stop(true, true).fadeOut(100, function() {
                $(this).html(role).fadeIn(300);
            });

            $(".name").stop(true, true).fadeOut(100, function() {
                $(this).html(name).fadeIn(300);
            });

            $(".fadeout-img").stop(true, true).fadeOut(100, function() {
                $(this).attr("src", imgSrc).fadeIn(300);
            });

            $(".destination-text-p").stop(true, true).fadeOut(100, function() {
                $(this).html(text).fadeIn(300);
            });
        }
    });
});