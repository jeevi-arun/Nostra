//Selecting elements

var sideClose=document.getElementById("close")
var sideBar=document.querySelector(".side-bar")

var menuIcon=document.querySelector(".menu")
var menuBar=document.querySelector(".menu-bar")
var menuClose=document.querySelector(".menu-bar2")




//Event listener
sideClose.addEventListener("click",function(){
sideBar.style.display="none"
})

menuIcon.addEventListener("click",function(){
    menuBar.style.left=0
})

menuClose.addEventListener("click",function(){
    menuBar.style.left= "-50%"
})

// Slide


var sliderleftbutton = document.getElementById("slider-leftactivate")
var sliderrightbutton =document.getElementById("slider-rightactivate")
var sliderimage= document.querySelector(".slider-imageContainer")
var slidermargin=0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)


