function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();


var tl = gsap.timeline();

tl.from("#nav",{
  y:-100,
  duration:1,
  opacity:0
})

document.addEventListener("mousemove", function (dets) {
  document.querySelector("#cursor").style.left = `${dets.x}px`
  document.querySelector("#cursor").style.top = `${dets.y}px`
})

document.querySelector("#row1 h1").addEventListener("mouseenter",function(){
  document.querySelector("#row1 h3").style.opacity=1
  document.querySelector("#row1 h3").style.right="50%"
  document.querySelector("#row1 h1 img").style.scale=1.2
  document.querySelector("#row1 h1 img").style.animationDuration=.1
  document.querySelector("#cursor").style.scale=1.5
  document.querySelector("#cursor").style.backgroundColor="white"
  document.querySelector(".gola").style.backgroundColor="white"
})
document.querySelector("#row1 h1").addEventListener("mouseleave",function(){
  document.querySelector("#row1 h3").style.opacity=0
  document.querySelector("#row1 h3").style.right="60%"
  document.querySelector("#row1 h1 img").style.scale=1
  document.querySelector("#row1 h1 img").style.animationDuration=3
  document.querySelector("#cursor").style.scale=1
  document.querySelector("#cursor").style.backgroundColor="black"
  document.querySelector(".gola").style.backgroundColor="white"
})
document.querySelector("#row2 h1").addEventListener("mouseenter",function(){
  document.querySelector("#row2 h3").style.opacity=1
  document.querySelector("#row2 h3").style.right="45%"
  document.querySelector("#row2 h1 img").style.scale=1.2
  document.querySelector("#row2 h1 img").style.animationDuration=.1
  document.querySelector("#cursor").style.scale=1.5
  document.querySelector("#cursor").style.backgroundColor="white"
  document.querySelector(".gola").style.backgroundColor="white"
})
document.querySelector("#row2 h1").addEventListener("mouseleave",function(){
  document.querySelector("#row2 h3").style.opacity=0
  document.querySelector("#row2 h3").style.right="60%"
  document.querySelector("#row2 h1 img").style.scale=1
  document.querySelector("#row2 h1 img").style.animationDuration=3
  document.querySelector("#cursor").style.scale=1
  document.querySelector("#cursor").style.backgroundColor="black"
  document.querySelector(".gola").style.backgroundColor="white"
})
document.querySelector(".row3 h1").addEventListener("mouseenter",function(){
  document.querySelector(".row3 h3").style.opacity=1
  document.querySelector(".row3 h3").style.right="85%"
  document.querySelector("#row3 h1 img").style.scale=1.2
  document.querySelector("#row3 h1 img").style.animationDuration=.1
  document.querySelector("#cursor").style.scale=1.5
  document.querySelector("#cursor").style.backgroundColor="white"
  document.querySelector(".gola").style.backgroundColor="white"
})
document.querySelector(".row3 h1").addEventListener("mouseleave",function(){
  document.querySelector(".row3 h3").style.opacity=0
  document.querySelector(".row3 h3").style.right="60%"
  document.querySelector("#row3 h1 img").style.scale=1
  document.querySelector("#row3 h1 img").style.animationDuration=3
  document.querySelector("#cursor").style.scale=1
  document.querySelector("#cursor").style.backgroundColor="black"
  document.querySelector(".gola").style.backgroundColor="white"
})

document.querySelector("#btn").addEventListener("mouseenter",function(){
  document.querySelector("#cursor").style.scale=1.5
  document.querySelector("#cursor").style.backgroundColor="white"
  document.querySelector(".gola").style.backgroundColor="white"
})
document.querySelector("#btn").addEventListener("mouseleave",function(){
  document.querySelector("#cursor").style.scale=1
  document.querySelector("#cursor").style.backgroundColor="black"
  document.querySelector(".gola").style.backgroundColor="white"
})
document.querySelector("#elem h1").addEventListener("mouseenter",function(){
  document.querySelector("#cursor").style.scale=1.5
  document.querySelector("#cursor").style.backgroundColor="white"
  document.querySelector(".gola").style.backgroundColor="white"
})
document.querySelector("#elem h1").addEventListener("mouseleave",function(){
  document.querySelector("#cursor").style.scale=1
  document.querySelector("#cursor").style.backgroundColor="black"
  document.querySelector(".gola").style.backgroundColor="white"
})
document.querySelector("#page3 video").addEventListener("mouseenter",function(){
  document.querySelector("#cursor").style.scale=1.5
  document.querySelector("#cursor").style.backgroundColor="red"
  document.querySelector(".gola").style.backgroundColor="white"
})
document.querySelector("#page3 video").addEventListener("mouseleave",function(){
  document.querySelector("#cursor").style.scale=1
  document.querySelector("#cursor").style.backgroundColor="black"
  document.querySelector(".gola").style.backgroundColor="white"
})

gsap.to("#page1 #row1 h1",{
  x:"-10%",
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    // markers:true,
    start:"bottom 100%",
    end:"bottom 40%",
    scrub:1
  }
})
gsap.to("#page1 #row3 h1",{
  x:"10%",
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    // markers:true,
    start:"bottom 100%",
    end:"bottom 40%",
    scrub:1
  }
})
gsap.from("#page2 h1", {
  rotate: 5,
  y: 100,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "#main",
    // markers: true,
    start: "top 70%",
    end: "top 50%",
    scrub: 3
  }
})

gsap.to("#page3 video",{
  width:"100%",
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    end:"top 40%",
    scrub:3
  }
})

gsap.to("#page4 #one",{
  left:"40%",
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top -20%",
    scrub:2
  }
})
gsap.to("#page4 #two",{
  right:"40%",
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top -20%",
    scrub:2
  }
})

gsap.to("#page4 #three",{
  left:"40%",
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top -20%",
    scrub:2
  }
})

gsap.to("#page4 #four",{
  right:"40%",
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top -20%",
    scrub:2
  }
})

document.querySelector("#box1").addEventListener("mousemove",function(dets){
  document.querySelector("#f-text").style.left = `${dets.x}px`
  document.querySelector("#f-text").style.top = `${dets.y}px`
  document.querySelector("#f-text").style.opacity=1
})

document.querySelector("#box1").addEventListener("mouseleave",function(){
  document.querySelector("#f-text").style.left = 0
  document.querySelector("#f-text").style.top = 0
  document.querySelector("#f-text").style.opacity=0
})
document.querySelector("#box2").addEventListener("mousemove",function(dets){
  document.querySelector("#s-text").style.left = `${dets.x}px`
  document.querySelector("#s-text").style.top = `${dets.y}px`
  document.querySelector("#s-text").style.opacity=1
})

document.querySelector("#box2").addEventListener("mouseleave",function(){
  document.querySelector("#s-text").style.left = 0
  document.querySelector("#s-text").style.top = 0
  document.querySelector("#s-text").style.opacity=0
})


document.querySelector(".p1scroll").addEventListener("mousemove",function(dets){
  document.querySelector("#vid1").style.left = `${dets.x}px`
  document.querySelector("#vid1").style.top = `${dets.y}px`
  document.querySelector("#vid1").style.opacity=1
})
document.querySelector(".p1scroll").addEventListener("mouseleave",function(){
  document.querySelector("#vid1").style.left = 0
  document.querySelector("#vid1").style.top = 0
  document.querySelector("#vid1").style.opacity=0
})
document.querySelector(".pscroll").addEventListener("mousemove",function(dets){
  document.querySelector("#vid2").style.left = `${dets.x}px`
  document.querySelector("#vid2").style.top = `${dets.y}px`
  document.querySelector("#vid2").style.opacity=1
})
document.querySelector(".pscroll").addEventListener("mouseleave",function(){
  document.querySelector("#vid2").style.left = 0
  document.querySelector("#vid2").style.top = 0
  document.querySelector("#vid2").style.opacity=0
})
document.querySelector(".p3scroll").addEventListener("mousemove",function(dets){
  document.querySelector("#vid3").style.left = `${dets.x}px`
  document.querySelector("#vid3").style.top = `${dets.y}px`
  document.querySelector("#vid3").style.opacity=1
})
document.querySelector(".p3scroll").addEventListener("mouseleave",function(){
  document.querySelector("#vid3").style.left = 0
  document.querySelector("#vid3").style.top = 0
  document.querySelector("#vid3").style.opacity=0
})


gsap.to("#page4",{
  backgroundColor:"#222222",
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    // markers:true,
    start:"top 60%",
    end:"top 50%",
    scrub:2
  }
})
gsap.to("#page6",{
  backgroundColor:"#fff",
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    // markers:true,
    start:"top -30%",
    end:"top -40%",
    scrub:2
  }
})


// document.querySelector("#page4").addEventListener("mouseenter",function(){
//   document.querySelector("#page4").style.backgroundColor=`#222222`
//   // document.querySelectorAll("#page4 h1").style.color="white"
// })
// document.querySelector("#page4").addEventListener("mouseleave",function(){
//   document.querySelector("#page4").style.backgroundColor="#fff"
// })
// document.querySelector("#page5").addEventListener("mouseenter",function(){
//   document.querySelector("#page5").style.backgroundColor=`#222222`
//   // document.querySelectorAll("#page4 h1").style.color="white"
// })
// document.querySelector("#page5").addEventListener("mouseleave",function(){
//   document.querySelector("#page5").style.backgroundColor="#fff"
// })

gsap.from("#page8 h1", {
  rotate: 5,
  y: 100,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: "#page8 h1",
    scroller: "#main",
    // markers: true,
    start: "top 70%",
    end: "top 50%",
    scrub: 3
  }
})

gsap.to("#page7 #fst",{
  left:"-30%",
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    end:"top -20%",
    scrub:2
  }
})
gsap.to("#page7 #scn",{
  right:"-10%",
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    end:"top -20%",
    scrub:2
  }
})

var flag= 1
document.querySelector("#nav2 i").addEventListener("click",function(){
  if(flag==1){
    document.querySelector("#menu").style.height="100vh"
    flag=0
  }
  else{
    document.querySelector("#menu").style.height="0vh"
    flag=1
  }
})

document.querySelector("#footer h3").addEventListener("mouseenter",function(){
  document.querySelector("#cursor").style.scale=1.5
  document.querySelector("#cursor").style.backgroundColor="white"
  document.querySelector(".gola").style.backgroundColor="white"
})
document.querySelector("#footer h3").addEventListener("mouseleave",function(){
  document.querySelector("#cursor").style.scale=1
  document.querySelector("#cursor").style.backgroundColor="black"
  document.querySelector(".gola").style.backgroundColor="white"
})


