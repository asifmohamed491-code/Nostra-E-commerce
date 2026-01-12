// Top offer Bar closing
var close = document.querySelector(".close")
var topBar = document.querySelector(".top-close")

close.addEventListener("click", function () {
  topBar.style.display = "none"
})
// Top offer Bar closing
var close = document.querySelector(".close")
var topBar = document.querySelector(".top-close")

close.addEventListener("click", function () {
  topBar.style.display = "none"
})
// Mobile menu bar
var sidenav = document.querySelector(".sidenav")
var close = document.querySelector(".closing")
var menu = document.querySelector(".mobile-menu")

menu.addEventListener("click", function () {
  sidenav.style.left = 0
})
close.addEventListener("click", function () {
  sidenav.style.left = "-50%"
})

// search functionality
// search functionality
var search = document.getElementById("search");
var h1List = document.querySelectorAll(".product");

search.addEventListener("keyup", function (event) {
    var enteredvalue = event.target.value.toUpperCase();

    for (let count = 0; count < h1List.length; count++) {
        var productName = h1List[count].querySelector("h3").textContent.toUpperCase();

        if (productName.indexOf(enteredvalue) < 0) {
            h1List[count].style.display = "none";
        } else {
            h1List[count].style.display = "block";
        }
    }
});



