1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

answer:
getElementById selects the specific Id we want,  classname selects all class with the given parameter and queryselector selects first element which was given to it by some class, idss or tags and queryselectall selects all elements of this.


2. How do you create and insert a new element into the DOM?

answer:
we use document createelement to make a new element then we set text or attributes if needed and finally appendchild or insertbefore to put it inside the dom


3.What is Event Bubbling and how does it work?

answer:
event bubbling means when an event happens on an element it first runs on that element then moves up to its parent and continues until reaching the top document


4. What is Event Delegation in JavaScript? Why is it useful?

answer:
event delegation means instead of adding event listener to every child we add one to a parent and use event target to detect which child triggered it this is useful for performance and for handling future dynamic elements


5. What is the difference between preventDefault() and stopPropagation() methods?

answer:
preventdefault stops the default action of an element like link navigation or form submit stoppropagation stops the event from moving up or down the dom tree