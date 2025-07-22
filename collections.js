//Selecting elements

var close=document.getElementById("close")
var sideBar=document.querySelector(".side-bar")

var menuIcon=document.querySelector(".menu")
var menuBar=document.querySelector(".menu-bar")
var menuClose=document.querySelector(".menu-bar2")

const checkboxes = document.querySelectorAll('.filter');
const products = document.querySelectorAll('.product');





//Event listener
close.addEventListener("click",function(){
sideBar.style.display="none"
})


menuIcon.addEventListener("click",function(){
    menuBar.style.left=0
})

menuClose.addEventListener("click",function(){
    menuBar.style.left= "-50%"
})


// Checkbox

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', filterProducts);
});

  function filterProducts() {
const selectedOccassions = [];
const selectedColors = [];
const selectedArrivals = [];


checkboxes.forEach(checkbox => {
  if (checkbox.checked) {
    const type = checkbox.getAttribute('data-filter');
    const value = checkbox.value;
    

    if (type === 'occassion') {
      selectedOccassions.push(value);
    } else if (type === 'color') {
      selectedColors.push(value);
    } else if (type === 'arrival') {
      selectedArrivals.push(value);
    }
  }
});


products.forEach(product => {
  const occassion = product.getAttribute('data-occassion');
  const color = product.getAttribute('data-color');
  const arrival = product.getAttribute('data-arrival');

  const matchOccassion = selectedOccassions.length === 0 || selectedOccassions.includes(occassion);
const matchColor = selectedColors.length === 0 || selectedColors.includes(color);
const matchArrival = selectedArrivals.length === 0 || selectedArrivals.includes(arrival);

if (matchOccassion && matchColor && matchArrival) {
  product.style.display = "block";
} else {
  product.style.display = "none";
}
});
  }