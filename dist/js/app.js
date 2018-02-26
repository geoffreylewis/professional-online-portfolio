// Variables
const profilePic = document.querySelector('img');
const heading = document.querySelector('h1');
let i = 0;
let firstText = "Hello, I'm Geoff!  Welcome to my online portfolio.";
let speed = 100;


// Fade in the profile picture
$(profilePic).hide().fadeIn(6000);


//Type out the title and subtitle in the banner
function typeHeading() {
     if (i < firstText.length) {
          heading.innerHTML += firstText.charAt(i);
          i++;
          setTimeout(typeHeading, speed);
     }
}

typeHeading();
