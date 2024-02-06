var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    blur.style.left = dets.x - 100 +"px"
    blur.style.top = dets.y - 100 +"px"
})

new kursor({
    type : 1,
    removeDefaultCursor : true,
    color:"#FF4500"
})

gsap.to("#nav",{
    backgroundColor:"#2c2727",
    duration:0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -10%",
        end:"top -80%",
        scrub:1
    }

})

gsap.from("#about-me img,.about-me-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-me",
      scroller: "body",
      start: "top 70%",
      end: "top 65%",
      scrub: 2,
    },
  });

gsap.from(".cards", {
    scale:0.8,
    opacity: 0,
    duration: 1,
    stagger:0.4,
    scrollTrigger: {
      trigger: ".cards",
      scroller: "body",
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
});

gsap.from(".cards1", {
    scale:0.8,
    opacity: 0,
    duration: 1,
    stagger:0.4,
    scrollTrigger: {
      trigger: ".cards1",
      scroller: "body",
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
});

gsap.from(".cards2", {
    scale:0.8,
    opacity: 0,
    duration: 1,
    stagger:0.4,
    scrollTrigger: {
      trigger: ".cards2",
      scroller: "body",
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
});

gsap.from("#page5 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page5 h1",
      scroller: "body",
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });