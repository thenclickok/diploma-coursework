#Local Storage Project: My ITOL Vault

##About the project:

This website allows a user to create journal entries, including tags.

These entries are stored in the browser's localStorage object.

There are three HTML pages (Home, All Entries and Editor) linked together.

The pages each have their own CSS file and JS file.

##Files

- Home: ls-index.html / ls-index.css / index.js
- All Entries: ls-vault.html / ls-vault.css / vault.js
- Editor: ls-new-entry.html / ls-new-entry.css / new-entry.js
- README-local-storage.md

##JavaScript used in project:

- document.querySelector and .getElementById to link HTML to JS
- .addEventListener() for click events on buttons to activate JS functions
- an array object called myArray to store user input data
- localStorage.setItem() to save data to the browswer's local storage object
- localStorage.getItem() to get data from the browser's local storage object
- .slice() to access only a selection of the array items (5 most recent entries) for display on the home page
- document.createElement and innerHTML to create the card templates

##MDN documentation for localStorage

- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

![Alternative text](javascript-practice-pages.netlify.app/images/ls-screenshot.png)
