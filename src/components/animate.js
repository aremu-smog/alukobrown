import { gsap, TimelineMax } from "gsap"

export const showOverlay = (menu, work) => {
  // alert(menu)
  gsap.set(menu, { visibility: "visible" })
  const open = new TimelineMax()

  open
    .to(menu, {
      // autoAlpha: 1,
      x: "0%",
      duration: 1,
      ease: "power2.out",
    })
    .to(work, {
      autoAlpha: 1,
      y: 20,

      stagger: {
        amount: 0.7,
      },
    })
}
// export const playAnimation = () =>{
//     tl.resume()

// }
export const hideOverlay = (menu, work) => {
  const close = new TimelineMax({
    onComplete: () => {
      gsap.set(menu, { visibility: "hidden" })
    },
  })

  close
    .to(work, {
      autoAlpha: 0,
      y: 0,
      duration: 0.25,
      stagger: {
        amount: 0.5,
      },
    })
    .to(menu, {
      // autoAlpha: 0,
      x: "-100%",
      duration: 1,
      ease: "power2.out",
    })
}

// export const rollIcon = (icon, rolling) => {
//     if(rolling){
//         icon_tl.pause()
//     }else{
//         icon_tl.play()
//     }
// }
