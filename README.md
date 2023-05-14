# Landing Page Project

This project aims to give you real-world scenarios of manipulating the DOM.

The project requires to build a multi-section landing page, with a dynamically updating navigational menu based on the amount of content that is added to the page.And, when a user clicks on a navigation item, the item should scroll you to the appropriate section.

## Table of Contents

* [Landing Page Project](#project-title)
* [Table of Contents](#table-of-contents) 
* [Instructions](#instructions)
* [Interface And Architecture](#interface-andarchitecture)
* [Landing Page Behavior](#landing-page-behavior)

## Instructions
[(Back to top)](#table-of-contents)

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom. 

## Interface And Architecture
[(Back to top)](#table-of-contents)

### Architecture 
css
- styles.css    
index.html
js
- app.js
README.md

### Usability
*All features are usable across modern desktop, tablet, and phone browsers.
*A Responsive layout of the landing page created to use across all devices.
*The navigation bar is responsive too across all these devices.

### Styling
*Styling have been added for active states.
*Set CSS class active state when the element is in the viewport.
*The active section in the Navbar is highlighted.

### HTML Structure
There are at least 4 sections that have been added to the page.

## Landing Page Behavior
[(Back to top)](#table-of-contents)

### Navigation

Navigation is built dynamically as an unordered list. Start with empty **ul** and dynamically build navigation using **Append**, **appendChild**, and **innerHTML**.

### Section Active State

It is clear which section is being viewed while scrolling through the page.

### Scroll to Anchor

When clicking an item from the navigation menu, the link scrolls to the appropriate section.

### Scroll to Top Button 

when clicking on the Top Button this will scroll to the top of the page, and the button is visible only when the user scrolls below the fold of the page.