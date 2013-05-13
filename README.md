Make Transition JS
==================
Javascript component to make transitions from li elements

How it works
============
The component adds and removes a css class (default name: sliding) to the li's child from a list element. Then, with CSS, it is possible to hide and show the elements or even better: use CSS 3 tranform and transition properties to a better user experience. Check the example/ directory

Usage
=====
- include maketransition.css and maketransition.min.js from dist/ folder to your project
- instantiate the MakeSlider object passing an ul element as element
<code>
var slider = new MakeTransition({
	element : document.getElementById("maketransition-list")
});
</code>
- transitions may be changed in css

Notes
======
- requires jQuery
- CSS is required to show, hide, make transitions, whatever to the elements. Make Transition JS just handle the class property in the DOM
- li elements must have css absolute positioning
- tested (still) only in Firefox and Chrome with jQuery 1.8.2