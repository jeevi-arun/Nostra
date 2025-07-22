//Selecting elements

var close=document.getElementById("close")
var sideBar=document.querySelector(".side-bar")


var menuIcon=document.querySelector(".menu")
var menuBar=document.querySelector(".menu-bar")
var menuClose=document.querySelector(".menu-bar2")

var submit =document.getElementById("submit")
var name1 =document.getElementById("name1")
var email=document.getElementById("email")

var nameError=document.querySelector(".nameError")
var emailError=document.querySelector(".emailError")






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


// Contact form
var validate = true

submit.addEventListener("click", function(event){
    var nameRegex =/^[a-zA-z]+$/
    var emailRegex =/^[a-zA-Z0-9]+@[a-zA-z]+/
   

  

 if(nameRegex.test(name1.value)==false){
    nameError.style.display="block"
    validate=false
 } else{
    nameError.style.display="none"
 }

 if(emailRegex.test(email.value)==false){
    
    emailError.style.display="block"
    validate=false
 } else{
    emailError.style.display="none"
 }



 if(validate==true){
    alert("Form submitted successfully. We will connect with you soon")
 }


 })


 

 




