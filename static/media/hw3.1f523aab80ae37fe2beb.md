# JavaScript Playground

This week's homework is intended to set you up for the more complex JavaScript-heavy projects to come in future weeks. Here, we'll go through the foundations and allow you to work with manipulating the DOM.

For this project, there won't be any use of external libraries, so the skeleton simply includes the basic web file structure that we covered in lecture (HTML, CSS, JavaScript).

**Download the homework skeleton [here](assets/hw3/fa23-hw3-skeleton.zip).**

## Part 1: Creating a Counter
**index.html** is your landing page. Notice how we have linked to the two HTML pages (index and playground) in the navigation bar using the anchor (a) tag! Navigate to the **playground.html** page. In this part, you'll be creating a simple counter application with three main features: a button to +1, a button to -1, and the number displayed depending on the button presses.

First things first, you'll need to define the relevant elements in the DOM with HTML. Use an <mark><code>h1</code></mark> tag to hold the displayed counter number and give it the id of "count-display." Then, you'll need two buttons, one for adding and one for subtracting. Use the HTML <mark><code>button</code></mark> element for these buttons and give them the class of "button" and respective ids of "subtract" and "add."

```html
<!-- Part 1: -->
<!-- Add h1 with the id "count-display" here. -->
<button class="button" id="subtract">-</button>
<!-- Add button with the id "add" and the class "button", containing the text "+" here. -->
```

That's all the HTML you'll need for a counter. The logic is all handled in JavaScript. The styles for the button are within the styles folder, feel free to change the look of your application however you'd like.

## Part 2: Targeting DOM Elements

Open the **playground.js** file. This is the JavaScript file that is linked to your playground HTML file. As such, you are able to target DOM elements within **playground.html** here. Recall that the syntax for targeting DOM elements in JS is <mark><code>document.getElementById()</code></mark>. Because you assigned ids to all the relevant elements in your counter, you can do so and assign them to a variable that you can manipulate:

```javascript
// Part 2:
const countDisplay = document.getElementById("count-display");
const subtractButton = document.getElementById("subtract");
const addButton = /* YOUR CODE HERE */
```

## Part 3a: Variables and Functions
Within the increaseCount function, you want to increment your count variable and then update the contents of your counter display to be the new count value! The variable <mark><code>count</code></mark> has been initialized to 0. Inside the body of the function <mark><code>increaseCount</code></mark>, add 1 to the <mark><code>count</code></mark> variable. 

```javascript
// Part 3a:

let count = 0;

function increaseCount() {
  /*Increment the count variable by 1.*/
  /* YOUR CODE HERE */
  countDisplay.textContent = count;
}
```
## Part 3b: EventListeners
**We will cover EventListeners in Lab 3! Skip parts (3b and 3c) until then.**
If you want something to happen when an element is clicked, in this case your buttons, you want to use event listeners. An event listener generally accepts 2 parameters, the first being the <mark>type of event</mark> as a string (in this case, <mark>"click"</mark>), and the second being the <mark>name of the function</mark> that executes when the event occurs on the associated element. Click [here](https://www.w3schools.com/jsref/met_document_addeventlistener.asp) for some examples.

```javascript
// Part 3b:

/* Fill in the appropriate arguments for the addEventListener function. Reference the link in the spec for help! */
addButton.addEventListener(/* YOUR CODE HERE */, /* YOUR CODE HERE */);
```

## Part 3c: Implement the subtract button
Now implement the function for the subtract button on your own! Use the code for the add button as a guide.

```javascript
// Part 3c:

// Write subtractButton's event listener
/* YOUR CODE HERE */
```

## Part 4: Building a Todo List
Navigate to **playground.html**. Now, you'll build a simple todo list. These are the elements that you'll need:
1. Some kind of input field to hold text values of tasks to add to the list
2. Some kind of empty list that holds the tasks
3. Buttons that allow you to actually submit tasks and clear the list. 

We have already created an empty unordered list for you with the id "tasks", as well as the submit and clear buttons.

_Fill in the blank for the input element. Make the type "text" and the id "task-name"._

```html
<!-- Part 4: -->
<!-- Create an "input" HTML element, with type "text" and the id "input-task": -->
<!-- YOUR CODE HERE -->
<div id="input-handlers">
    <button class="button" id="submit">Submit</button>
    <button class="button" id="clear">Clear</button>
</div>
<!--Side note: This is the unordered list that you will be adding li elements to later!-->
<ul id="tasks"></ul>
```

## Part 5: More DOM Targeting
Go back to the **playground.js** file and scroll to Part 5. Again, declare and initialize your JavaScript variables to manipulate the respective elements on the DOM. Check the **playground.html** file to see what ids we assigned to the submit and clear buttons!

```javascript
// Part 5:
const taskName = document.getElementById("task-name");
const taskList = document.getElementById("tasks");
// Initialize the const submitButton:
/* YOUR CODE HERE */
// Initialize the const clearButton:
/* YOUR CODE HERE */
```

## Part 6: Dynamic Element Creation
**If some of this code doesn't make sense to you, wait until Lab 3 to complete this part of the HW.**
Because we want a list item element to be added to the unordered todo list when the submit button is clicked, we have added an event listener on the submit button to do just that. 

So what specifically should happen when the submit button is clicked? 
1. Check if there is a valid task name in the text input field
2. If yes, then create a <code><mark>li</mark></code> list item element in the DOM.
3. Set its [**textContent**](https://www.w3schools.com/jsref/prop_node_textcontent.asp) to be the text in the input field.
4. Add the newly created <code><mark>li</mark></code> element to the <code><mark>ul</mark></code> parent element with <mark><code>appendChild()</code></mark>.
5. Set the input text to be empty so the user doesn't have to do it manually 

```javascript
// Part 6:
submitButton.addEventListener("click", () => {
  if (inputTask.value != "") {
      // Initialize a const variable named "task", and set it equal to a new li element. 
      /* YOUR CODE HERE */
      task.textContent = inputTask.value; // Here you set the li element you just created to have the text value in the input field!
      // Add this task to the end of taskList (this is the list you initialized earlier!).
      taskList./* YOUR CODE HERE*/
      inputTask.value = "";
  }
});
```

To clear the list, a way to achieve this is by simply replacing all the children of your taskList with nothing. Then reset your input text to be an empty string (so the user doesn't have to manually delete it).

```javascript
clearButton.addEventListener("click", () => {
    taskList.replaceChildren();
    inputTask.value = "";
});
```
You'll notice there is another event listener on the taskName element which listens on "input." This is an example of another event triggering a function's execution. On "input" means every time the input field is modified (e.g. typing a new letter). So you'll notice that whenever you type the value "Cal Hacks" into your task input field, the count display on your previous counter app turns blue!
 
```javascript
taskName.addEventListener("input", () => {
    if (inputTask.value == "Cal Hacks") {
        countDisplay.style.color = "steelblue";
    }
});
```

## You're done! :D Try playing around with your playground.html site!

# Homework Submission!
To submit the homework folder, you have to zip it first. 

**To zip a folder:**
_**Windows:** Right-click the folder **hw3-skeleton**, select (or point to) Send to, and then select Compressed (zipped) folder._
_**macOS:** Control-click the folder **hw3-skeleton** or tap it using two fingers, then choose Compress from the shortcut menu._

Upload the .zip file to [Gradescope](https://www.gradescope.com/courses/437611) :)