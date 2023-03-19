const onair = document.querySelector("#on")
const offair = document.querySelector("#off")
const airplane = document.querySelector(".airplane-wrapper")

const cloudtl = gsap.timeline()

cloudtl.to(".clouds",{
    left:"-100%",
    duration:10
})
cloudtl.repeat(-1)

offair.addEventListener("click",()=>{
    const tl = gsap.timeline()
    tl.to("#off",{
        left:'150%',
        duration:0.5
    })
    .to("#on",{
        delay:'-1',
        left:'50%',
        duration:1
    })
     .to(".airplane-wrapper",{
        delay:'-2',
        left:'65%',
        duration:1,
        ease: 'linear' 
    })
    .to(".cloud-on",{
        delay:"-3",
        left:0,
        duration:3,
        ease:Power0 
    })
    .to(".cloud-off",{
        delay:"-4",
        left:"100%",
        duration:3,
        ease:Power0 
    })
    
    gsap.to("body",{
        background:'#2f86d5',
        duration:1
    })
})
onair.addEventListener("click",()=>{
    
    const tl = gsap.timeline()
    tl.to("#off",{
        left:'50%',
        duration:0.5
    })
    .to("#on",{
        delay:'-1',
        left:'-100%',
        duration:1
    })
    .to(".airplane-wrapper",{
        delay:'-2',
        left:'0%',
        duration:1,
        ease: 'linear'  
    })
    .to(".cloud-on",{
        delay:"-3",
        left:"-100%",
        duration:3,
        ease:Power0 
    })
    .to(".cloud-off",{
        delay:"-4",
        left:"0",
        duration:3,
        ease:Power0 
    })
    gsap.to("body",{
        background:'#000000',
        duration:1
    })

})