//Selecting elements

var sideClose=document.getElementById("close")
var sideBar=document.querySelector(".side-bar")

var menuIcon=document.querySelector(".menu")
var menuBar=document.querySelector(".menu-bar")
var menuClose=document.querySelector(".menu-bar2")

var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")


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


var slidermargin=0


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

