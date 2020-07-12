# A Note Taking Application

## Installation

Run `npm install`

## Usage

In the terminal, run the following command:

`npm run start`

## Advanced Usage

- To check your JavaScript with ESlint, run `npm run eslint`

## Assignments

With this assignment, you will be working with some pre-written code, which uses ES6 Classes to build a "Note Taking" application.

This project assumes you've already had experience with:
 
- writing HTML and CSS
- Working with the DOM
- ES6 Classes
- Events (adding and removing)

Things we will use / learn:

- HTML5 Web Storage (localStorage)
- Promises
- ES6 Modules

### Assignment 1 - Fixing our bugs

1. Using the browser's console, try to locate and fix the bugs in the code.

### Assignment 2 - Getting NoteView to update

We've fixed the errors, but the application is still not working! We expect that when we click on one of the notes in the list, the "view" will update with the note contents.

In the file `NoteView.js`, look in the ES6 class `NoteView`. It has 3 methods: `constructor`, `handleEvents` and `updateViewData`.

1. At the end of the constructor method, call the method `handleEvents`. This will automatically listen for the events when the constructor is called.

2. In the callback inside the event listener in the method `handleEvents`, we must also call the method `updateViewData`. Pass the `index` variable into this method.

### Assignment 3 - Identifying the DOM objects in the code

In the files `NoteView.js` and `NoteList.js`:

1. Read through the lines of code

2. Mark all lines that _generate_ (not interact with) a DOM object with the comment `// DOM object`

> Hint: Common methods which generate a DOM object are `createElement` and `querySelector`

### Assignment 4 - Improving our interface with CSS

Use the file `styles.css` to:

1. Add some style to the id `#note-list`

2. Add a hover effect to the `<li>` elements inside `#note-list`

3. Add some styles to the id `#note-view`

4. Add some styles to the `<h3>` inside `#note-view`

5. Add some styles to the `<textarea>` inside `#note-view`

### Assignment 5 - Highlighting the selected note

When you select a note, it is not clear from the `#note-list` panel which note you've currently selected.

Inside the `NoteList` ES6 class:

1. In the listener, use the `classList` API to add a CSS class "selected" to the active element

2. Add some CSS styles for the CSS class "selected"

3. Test the result

Research: [Element.classList [English]](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

Research: [Element.classList [Deutsch]](https://developer.mozilla.org/de/docs/Web/API/Element/classList)

### Assignment 6 - Removing the highlighting from the selected note

You will notice that as we keep adding the class "selected" to an item in our list, it will slowly highlight all of the list items. We need to stop this from happening.

Inside the `NoteList` ES6 class:

1. In the listener, use the `classList` API to _remove_ the CSS class "selected" from all `<li>` elements inside `#note-list`

> Hint: There are many ways to do this!

### Assignment 7 - Adding a "SAVE" button

So far, we can view notes but what if we want to save the data?

Inside the ES6 class `NoteView`:

1. Add a button to the view, with appropriate CSS stylings. Label this button "Save"

2. Write a function which is triggered when you click this button. The function should read the value stored inside the `<textarea>`, and save it back into the `data` global object.

### Assignment 8 - Disabling the "SAVE" button

We want to prevent the user from clicking "SAVE" too often - they should only click on it when it is necessary to do so. In a real application with a backend API, each click of the "SAVE" button will incur a costly network call that takes time and resources. In this assignment we will disable the "SAVE" button, and only enable it when the user has made a change.

1. Modify the button so that by default it has a `"disabled"` attribute.

    Research: [Element.classList [English]](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled)

2. We can not leave the button disabled forever! When the `<textarea>` has been edited we should remove the `"disabled"` attribute. This will prevent the user from saving the same data back to the global `data` object.

    Add an event listener to the button which listens for an `"input"` event. When the `"input"` event fires, remove the `"disabled"` attribute from the "SAVE" button.

    Research: [Input Event [English]](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)

3. Remove the `"input"` event after it has been fired once

    > Hint: You will need to use the `removeEventListener()` method

    Research: [removeEventListener() [English]](https://developer.mozilla.org/de/docs/Web/API/EventTarget/removeEventListener)

### Assignment 9 - Saving to localStorage on "SAVE"

1. Create a new function which will save the `data` object to the `localStorage`. The function MUST return a `Promise`.

    > Hint: Use `try... catch` to try and save to the `localStorage`. If it fails, use the `catch` code block to `reject()` the `Promise`

2. At the end of your function which runs when you click the "SAVE" button, call the new function which you just created. Since you are expecting a `Promise`, you will need to handle the `Promise` in 2 different ways.

    - Use `console.log()` to display a message that saving to localStorage was successful, if `Promise` resolves

    - Use `console.warn()` to display a warning message that saving to localStorage was NOT successful, if the `Promise` was rejected

### Assignment 10 - Re-organising the code using ES6 Modules

Currently all JavaScript files are loaded directly in the HTML file `index.html`. Now we've learned how to use ES6 Modules, we will re-write our code to load the files using ES6 Modules and not to directly import them via `<script>` tags.

If we examine the `index.html` file, we will see that we have 4 `<script>` tags, each importing a different file.

We will keep the `<script>` tag which imports the file `js/app.js`. This is our main entry point for our JavaScript.

1. For the file `js/app.js`, add the attribute `type="module"`. This tells the browser that this file will be using ES6 Modules.

2. Delete the `<script>` tags for the files `js/NoteList.js` and `js/NoteView.js`

3. Export the classes from the files `js/NoteList.js` and `js/NoteView.js`. You either use default or named exports.

3. Import the classes from the files above into the file `js/app.js` with `import` statements.