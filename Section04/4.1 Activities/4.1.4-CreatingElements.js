// create a new unordered list (ul) element
let newList = document.createElement("ul");
// remove the paragraph element in the nav-bar
let pRemove = document.querySelector(".nav-bar > p");
pRemove.remove();
// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(newList);
// create two new list item (li) elements, and add some text to them
let list1 = document.createElement("li").textContent("Woo");
let list2 = document.createElement("li").textContent("Hoo");
// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar > ul").appendChild(list1);
document.querySelector(".nav-bar > ul").appendChild(list2);
