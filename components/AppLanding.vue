<template>
  <main @mouseover="$emit('change-mouse', '#c0cac4')">
    <article class="inner"></article>
    <section ref="landing" class="landing">
      <article class="inner">
        <header>
          <h1 ref="intro" class="intro">
            <span>Hi,</span> <span>I'm</span> <span>Aluko</span>
            <span>Brown</span>
          </h1>
        </header>
        <div class="content row">
          <div class="inner-offset">
            <hr ref="line" />
          </div>
          <div ref="info">
            <p>
              A Brand &amp; Product Designer based in Lagos, Nigeria, with about
              6 years experience designing tasteful experiences for brands,
              products &amp; services.
            </p>
            <p>
              My work experience cuts across brand identity and communication
              design, product design and UI/UX, art direction and campaigns.
            </p>

            <p>
              I currently work on the Product team at
              <a
                href="https://www.quidax.com/"
                target="_blank"
                rel="noreferrer"
              >
                Quidax </a
              >, also as a Product Designer on
              <a
                href="https://www.toptal.com/"
                target="_blank"
                rel="noreferrer"
              >
                Toptal
              </a>
              and Design Partner at
              <a
                href="https://fourthcanvas.co/"
                target="_blank"
                rel="noreferrer"
              >
                FourthCanvas </a
              >.
            </p>

            <footer class="social-icons">
              <SocialIcon
                alt="LinkedIn"
                icon="/images/icons/linkedin-white.svg"
                url="https://www.linkedin.com/in/aluko-brown/"
              />
              <SocialIcon
                alt="Twitter"
                icon="/images/icons/twitter-white.svg"
                url="https://twitter.com/AlukoBrown"
              />
              <SocialIcon
                alt="Instagram"
                icon="/images/icons/instagram-white.svg"
                url="https://www.instagram.com/alukobrown/"
              />
              <SocialIcon
                alt="Dribble"
                icon="/images/icons/dribble-white.svg"
                url="https://dribbble.com/alukobrown"
              />
            </footer>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { gsap } from "gsap"

defineEmits(["change-mouse"])

const line = ref(null)
const intro = ref(null)
const info = ref(null)
const landing = ref(null)

onMounted(() => {
  const master = gsap.timeline()

  gsap.set(landing.value, { visibility: "visible" })

  master
    .from(intro.value.children, {
      y: 50,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.2,
    })
    .from(line.value, { width: 0, duration: 0.3 })
    .from(info.value, { x: -10, autoAlpha: 0 })
})
</script>
