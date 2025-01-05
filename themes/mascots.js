
// List of mascots
var mascotList = [
    
"/startpage/themes/images/mascots/mascot1.png"
"/startpage/themes/images/mascots/mascot2.png"
"/startpage/themes/images/mascots/mascot3.png"
];

// Path to mascot images
var mascotPath = "themes/images/mascots/";

// Randomly select a mascot from the list
function getRandomMascot() {
    return mascotPath + mascotList[Math.floor(Math.random() * mascotList.length)];
}

// Function to control the mascot image based on window size
function controlMascot(mascot, mascotMinWidth) {
    $(window).resize(function(event) {
        if ($(window).width() <= mascotMinWidth && $("main").hasClass("mascot")) {
            removeMascot();
        } else if ($(window).width() > mascotMinWidth && !$("main").hasClass("mascot")) {
            setMascot(mascot);
        }
    });
}

function setMascot(mascot) {
    $('main').addClass("mascot");
    $('main').css("background-image", "url(" + mascot + ")");
    $('main').removeClass("plain");
}

function removeMascot() {
    $('main').removeClass("mascot");
    $('main').css("background-image", "");
    $('main').addClass("plain");
}

$(document).ready(function() {
    var mascotEnable = true;
    var mascot = getRandomMascot();  // Get a random mascot
    var mascotMinWidth = 750;

    if (mascotEnable) {
        setMascot(mascot);
        controlMascot(mascot, mascotMinWidth);
    } else {
        removeMascot();
    }
});

