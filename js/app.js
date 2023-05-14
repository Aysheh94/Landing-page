/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.querySelector('.navbar__menu');
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navbar__list');
const sections = document.querySelectorAll('section');
// get offset value from root element 
const rootElement = document.documentElement;
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav from each section

const buildNav = () => {
    sections.forEach((element) => {
        const navlistText = element.getAttribute('data-nav');
        const mylist = document.createElement('li');
        mylist.innerHTML = `<a class="menu__link " href="#">${navlistText}</a>`;
        navList.appendChild(mylist);


        // Scroll to appropiate section using scrollIntoView event
        mylist.addEventListener('click',(elem) => {
        elem.preventDefault();
        element.scrollIntoView({ behavior: "smooth"});
        })
    });   
};

buildNav();

//toggle hamburger event
hamburger.addEventListener('click',() => {
    navList.classList.toggle('hide');
})


// Add class 'active' to section when near top of viewport
const addActiveClass = () => {
    sections.forEach((section) => {
        const position= section.getBoundingClientRect();
        const sectiosName=section.getAttribute("data-nav");
        const links= document.querySelectorAll("a.menu__link");

        if(position.top <= rootElement.clientHeight/2 && position.bottom >= rootElement.clientHeight/2){
            section.classList.add("your-active-class");
            links.forEach((link) =>{
                if(link.textContent === sectiosName){
                    link.classList.add("your-active-class");
                }else{
                    link.classList.remove("your-active-class");
                }
            });
        }else{
            section.classList.remove("your-active-class");
        }

    });
}

//Scroll to active event
window.addEventListener("scroll",addActiveClass);


//scroll to top function
const handleScroll = () => {
    const scrollTotal=rootElement.scrollHeight- rootElement.clientHeight;
    if(rootElement.scrollTop/scrollTotal > 0.8){
        scrollToTopBtn.classList.add("showBtn");
    }else{
        scrollToTopBtn.classList.remove("showBtn");
    }
}

const scrollToTop = () => {
    rootElement.scrollTo({
        top:0,
        behavior:"smooth"
    });
};

//scroll to top event
scrollToTopBtn.addEventListener('click',scrollToTop);
document.addEventListener("scroll",handleScroll);

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


