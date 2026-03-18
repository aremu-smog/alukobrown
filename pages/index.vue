<template>
  <div>
    <AppCursor :mouse-color="mouseColor" />
    <AppHeader :fill="fill" @toggle-menu="toggleMenu" />
    <AppMenu :open-menu="menu" @change-mouse="(color) => (mouseColor = color)" />
    <AppLanding @change-mouse="(color) => (mouseColor = color)" />
  </div>
</template>

<script setup>
import { ref } from "vue"

const menu = ref(false)
const fill = ref("#C0CAC4")
const mouseColor = ref("#C0CAC4")

const toggleMenu = () => {
  if (menu.value) {
    fill.value = "#C0CAC4"
  } else {
    fill.value = "#022C14"
  }
  menu.value = !menu.value
}
</script>
