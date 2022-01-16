// variables

let active=0
const timer=3000
const slideshow=document.querySelector(".Slideshow")
const slides=document.querySelectorAll(".slide")
const ponits=document.querySelectorAll(".dots span")
const nextOne=document.querySelector(".next")
const previousOne=document.querySelector(".prev")

// /////////////////////////////////////////////


// Main func(a function that handle our slideShow)
function classSwitcher(){
slides.forEach(slide=>slide.classList.remove("active"))
ponits.forEach(point=>point.classList.remove("active"))
ponits[active].classList.add("active")
slides[active].classList.add("active")
}

slideshow.addEventListener("mouseover",e=>
clearInterval(runinterval)
)
slideshow.addEventListener("mouseleave",e=>runinterval = setInterval(goNext,timer) )
// ///////////////////////////////
let goNext=()=>{
active=(active==slides.length-1)?0: active+1 
classSwitcher()

}
// pointers
ponits.forEach((point,index)=>{
point.addEventListener("click",e=>{
    console.log(index)
active=index
classSwitcher()
// ////////////////////////////////

})
})
// next and previous button function
previousOne.addEventListener("click",e=>{
    active=(active==0)?slides.length-1: active -1 
classSwitcher()

})
nextOne.addEventListener("click",e=>{
    goNext()
})
// /////////////////////////////////////


// interval
let runinterval = setInterval(goNext,timer)
// /////////////