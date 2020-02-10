const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navigation links
const navLinks = document.querySelectorAll('a');
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

const h1New = document.querySelector(".cta h1");
const buttonNew = document.querySelector(".cta button");
const imgNew = document.querySelector(".cta #cta-img");

h1New.textContent = siteContent["cta"]["h1"];
buttonNew.textContent = siteContent["cta"]["button"];
imgNew.src = siteContent["cta"]["img-src"];

//main section
const newH4 = document.querySelectorAll("h4");
const newP = document.querySelectorAll("p");
const img2 = document.querySelector(".main-content #middle-img");
newH4[0].textContent = siteContent["main-content"]["features-h4"];
newH4[1].textContent = siteContent["main-content"]["about-h4"];
newH4[2].textContent = siteContent["main-content"]["services-h4"];
newH4[3].textContent = siteContent["main-content"]["product-h4"];
newH4[4].textContent = siteContent["main-content"]["vision-h4"];

img2.src = siteContent["main-content"]["middle-img-src"];

newP[0].textContent = siteContent["main-content"]["features-content"];
newP[1].textContent = siteContent["main-content"]["about-content"];
newP[2].textContent = siteContent["main-content"]["services-content"];
newP[3].textContent = siteContent["main-content"]["product-content"];
newP[4].textContent = siteContent["main-content"]["vision-content"];

//contact
newH4[5].textContent = siteContent["contact"]["contact-h4"];

newP[5].textContent = siteContent["contact"]["address"];
newP[6].textContent = siteContent["contact"]["phone"];
newP[7].textContent = siteContent["contact"]["email"];

//footer

newP[8].textContent = siteContent["footer"]["copyright"];

//2 new nav items
const nav = document.querySelector("nav");
const preNav = document.createElement('a');
const appNav = document.createElement('a');
preNav.textContent = "Before";
appNav.textContent = "After";
nav.prepend(preNav);
nav.append(appNav);

//stretch

h1New.style.color = "orange";

document.querySelector(".cta button").addEventListener("click", function(){
  buttonNew.style.backgroundColor = "Green";
  buttonNew.style.color = "orange";
  buttonNew.textContent = "Hello there";
  h1New.textContent = "You're Awesome";
  h1New.style.color = "Gold";
});
