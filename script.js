//theme 
let theme = document.querySelector(".theme")
let body = document.querySelector("body")
let themeValue = true

theme.addEventListener("click",function(){
    if(themeValue === true){
        body.className = "lightMode"
        themeValue = false
    }
    else{
        body.className = "darkMode"
        themeValue = true
    }
})



// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger"; // example for ScrollTrigger

// gsap.registerPlugin(ScrollTrigger);




let main = document.querySelector(".main")
let cursor = document.querySelector("#cursor")
let cursorinImage = document.querySelectorAll(".heroimg")


main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        // duraton:0.1,
    })
})




let tl = gsap.timeline()

tl.from(cursor,{
    opacity:0,
    // duration:0.1,
})
tl.from("nav, .header ul li, .theme", {
    y: -20,
    // duraton: 0.2,
    opacity: 0,
    stagger: .15
})


tl.from(".heromain", {
    x: -150,
    opacity: 0,
    // duraton: 0.5,
})

tl.from(".heroimg", {
    opacity: 0,
    // duraton: .3
}, "-=0.5")



// page 1 ends here

// page 3 begins 

gsap.to(".page3 p",{
    transform:"translateX(-38%)",
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:".page3"
    }
})

// page4 starts 

let tl4 = gsap.timeline()

tl4.from(".page4container .leftcontainer h1",{
    opacity:0,
    x:-500,
    stagger:.5, 
    scrollTrigger:{
        trigger:".page4",
        // markers:true,
        start:"top 20%",
        end:"top 90%",
        scrub:1
    }
})

tl4.from(".page4container #defaultimg",{
    opacity:0,
    x:500,
    scrollTrigger:{
        trigger:".page4",
        // markers:true,
        start:"top 10%",
        end:"top 90%",
        scrub:1
    }
})

let ladies = document.querySelector(".leftcontainer #ladyselector")
ladies.addEventListener("mouseenter",function(){
    gsap.to(".rightcontainer #ladies",{
        opacity:1,
        // zIndex:6,
    })
})
ladies.addEventListener("mouseleave",function(){
    gsap.to(".rightcontainer #ladies",{
        opacity:0,
        // zIndex:5,
    })
})
let kids = document.querySelector(".leftcontainer #kidselector")
kids.addEventListener("mouseenter",function(){
    gsap.to(".rightcontainer #kids",{
        opacity:1,
        // zIndex:6,
    })
})
kids.addEventListener("mouseleave",function(){
    gsap.to(".rightcontainer #kids",{
        opacity:0,
        zIndex:5,
    })
})
let gents = document.querySelector(".leftcontainer #gentselector")
gents.addEventListener("mouseenter",function(){
    gsap.to(".rightcontainer #gents",{
        opacity:1,
        zIndex:6,
    })
})
gents.addEventListener("mouseleave",function(){
    gsap.to(".rightcontainer #gents",{
        opacity:0,
        zIndex:5,
    })
})


// page5 starts 


