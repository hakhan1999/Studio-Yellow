
// function locomotive() {
//     gsap.registerPlugin(ScrollTrigger);

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector("#main"),
//         smooth: true,
//     });
//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy("#main", {
//         scrollTop(value) {
//             return arguments.length
//                 ? locoScroll.scrollTo(value, 0, 0)
//                 : locoScroll.scroll.instance.scroll.y;
//         },

//         getBoundingClientRect() {
//             return {
//                 top: 0,
//                 left: 0,
//                 width: window.innerWidth,
//                 height: window.innerHeight,
//             };
//         },

//         pinType: document.querySelector("#main").style.transform
//             ? "transform"
//             : "fixed",
//     });
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//     ScrollTrigger.refresh();
// }
// locomotive();

Shery.imageEffect(".back", {
    style: 5,
    config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": 0.92, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.070729053318825 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": false }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 3 } }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
    gooey: true,
})

// text animation on clicking slider 

var headings = document.querySelectorAll(".heading1")

headings.forEach(function (heading1) {
    var h1s = heading1.querySelectorAll("h1")
    var index = 0
    var animating = false
    document.querySelector(".slider-section").addEventListener("click", function () {
        if (!animating) {
            animating = true
            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function () {
                    gsap.set(this._targets[0], {
                        top: "100%",
                    })
                    animating = false
                }
            })

            index === h1s.length - 1 ? (index = 0) : index++

            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
            })
        }
    })
})

// Mouse FOllower 

Shery.mouseFollower()

// Make Magnet 

Shery.makeMagnet(".magnet")

// Torch Effect 

var pos = document.documentElement
pos.addEventListener('mousemove', e=>{
    pos.style.setProperty('--x', e.clientX + 'px')
    pos.style.setProperty('--y', e.clientY + 'px')
})

// Text Scroll On Top 

// gsap.to(".highlights-left-elem", {
//     scrollTrigger: {
//         trigger: ".images",
//         pin: true,
//         start: "top top",
//         end: "bottom bottom",
//         endTrigger: ".last",
//         scrub: 1
//     },
//     y: "-300%",
//     ease: Power3
// })

// Images Animations 

// let sections = document.querySelectorAll(".highlights-left-elem")
// Shery.imageEffect(".images", {
//     style: 5,
//     slideStyle: (setScroll) => {
//        sections.forEach(function(section,index){
//         ScrollTrigger.create({
//             trigger: section,
//             start:"top top",
//             scrub:1,
//             onUpdate: function(prog){
//                 setScroll(prog.progress+index)
//             }
//         })
//        })
//     },
//   });


