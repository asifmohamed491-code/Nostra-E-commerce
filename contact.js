// Mobile menu bar
var sidenav = document.querySelector(".sidenav")
var close = document.querySelector(".closing")
var menu = document.querySelector(".mobile-menu")

menu.addEventListener("click",function(){
  sidenav.style.left = 0
})
close.addEventListener("click",function(){
  sidenav.style.left = "-50%"
})
