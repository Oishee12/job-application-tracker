# Job Application Tracker

A web-based dashboard designed to track job applications efficiently. This project allows users to manage their job search progress by categorizing applications into "Interview" or "Rejected" states with real-time dashboard updates.


## Questions & Answers

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- **`getElementById`**: It selects one element using its unique ID. Since IDs are unique, it always returns a single element and is very fast.
- **`getElementsByClassName`**: It selects all elements that have a specific class name. It returns a live HTMLCollection, which means it updates automatically if the DOM changes.
- **`querySelector`**: Uses CSS selector syntax and returns the first element that matches the selector.
- **`querySelectorAll`**: It also uses CSS selectors but returns all matching elements as a static NodeList.

### 2. How do you create and insert a new element into the DOM?
First, we create a new element using `document.createElement('tagName')`.
Then we can add text using `innerText` or `textContent`, and set attributes if needed.
After that, we insert it into the DOM using methods like `appendChild()` to add it at the end of a parent element or `prepend()` to add it at the beginning.

### 3. What is Event Bubbling? And how does it work?
Event Bubbling is when an event starts from the element that was clicked and then moves upward through its parent elements.
For example, if a `button` is inside a `div` and you click the `button`, the event will first run on the `button`, then on the `div`, and then on higher parent elements like the body.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a method where we attach one event listener to a parent element instead of adding separate listeners to each child element. It is useful because It reduces the number of event listeners and ensures that dynamically added elements also respond to the event automatically.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
- **`preventDefault()`**: Stops the browser’s default behavior. For example, it can stop a form from submitting or prevent a link from opening another page.
- **`stopPropagation()`**: Prevents the event from moving up to parent elements in the DOM tree.




