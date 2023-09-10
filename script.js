// toggle icon navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//scroll sections
const sections = document.querySelectorAll('section');
const navLinks =document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    })
    // sticky header
    const header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when a navbar link is clicked (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Footer animation on scroll
    const footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

// Type-writer Text

const phrases = [
    "Web Developer",
    "Programmer"
  ];
  
  let currentPhraseIndex = 0;
  let isDeleting = false;
  let charIndex = 0;
  
  function type() {
    const typewriterText = document.getElementById("typewriter-text");
    const currentPhrase = phrases[currentPhraseIndex];
  
    if (isDeleting) {
      typewriterText.innerHTML = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterText.innerHTML = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }
  
    let typingSpeed = isDeleting ? 50 : 100; // Adjust the typing and deleting speed (in milliseconds)
  
    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2000; // Display time after completing a phrase (in milliseconds)
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentPhraseIndex++;
      if (currentPhraseIndex === phrases.length) {
        currentPhraseIndex = 0;
      }
    }
  
    setTimeout(type, typingSpeed);
  }
  
  type();


// Tab-links

const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
            
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


const sidemenu = document.getElementById("side-menu");
function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}