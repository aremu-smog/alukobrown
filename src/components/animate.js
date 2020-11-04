import {gsap} from 'gsap'

export const showOverlay = (el) => {
    gsap.from(el, {
        autoAlpha: 0,
        duration: 2
    })
}