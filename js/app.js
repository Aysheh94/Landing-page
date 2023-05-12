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
    });
};

buildNav();

//toggle hamburger
hamburger.addEventListener('click',() => {
    navList.classList.toggle('hide');
})


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


