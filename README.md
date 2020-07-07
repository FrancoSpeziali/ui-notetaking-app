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

Things we will use / learn:

- HTML5 Web Storage (localStorage)

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

1. Add a button to the view, with appropriate CSS stylings

2. When you click the button, read the current data with the value stored inside the `<textarea>`, and save it back into the `data` global object.

### Assignment 8 - Saving to localStorage

1. Save the `data` object to the localStorage