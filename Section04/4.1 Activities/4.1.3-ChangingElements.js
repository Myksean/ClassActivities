// print the outer HTML of the navigation bar
console.log(document.querySelector(".nav-bar").outerHTML);
// print the inner HTML of the navigation bar
console.log(document.querySelector(".nav-bar").innerHTML);
// print the text content of the #class-schedule-list element
console.log(document.querySelector("#class-schedule-list").textContent);
// select the classList for the first class-week, then add the class "week-1"
let classWeek = document.querySelector(".class-week").classList.add("week-1");
console.log(classWeek);
// select the img element and add a src attribute
console.log(
  (document.querySelector("#dog-picture").src =
    "https://i2.pickpik.com/photos/774/556/1024/odin-male-australian-shepherd-dog-thumb.jpg")
);
// change the font color of the h1 element
// eslint-disable-next-line prettier/prettier
console.log(document.querySelector("h1").style.cssText =
"color: green;");