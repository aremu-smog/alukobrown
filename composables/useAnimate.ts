import { gsap } from "gsap"

export const showOverlay = (menu: HTMLElement, work: HTMLCollection) => {
  gsap.set(menu, { visibility: "visible" })
  const open = gsap.timeline()

  open
    .to(menu, {
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

export const hideOverlay = (menu: HTMLElement, work: HTMLCollection) => {
  const close = gsap.timeline({
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
      x: "-100%",
      duration: 1,
      ease: "power2.out",
    })
}
