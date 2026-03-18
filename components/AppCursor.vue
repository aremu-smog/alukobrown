<template>
  <div ref="cursor" class="cursor"></div>
  <div ref="cursorInner" class="cursorInner"></div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue"

const props = defineProps({
  mouseColor: {
    type: String,
    default: "#C0CAC4",
  },
})

const cursor = ref(null)
const cursorInner = ref(null)

const onMouseMove = (e) => {
  if (cursor.value) {
    cursor.value.style.top = e.clientY - 16 + "px"
    cursor.value.style.left = e.clientX - 16 + "px"
  }
  if (cursorInner.value) {
    cursorInner.value.style.top = e.clientY - 5 + "px"
    cursorInner.value.style.left = e.clientX - 5 + "px"
  }
}

watch(
  () => props.mouseColor,
  (color) => {
    if (cursorInner.value) {
      cursorInner.value.style.backgroundColor = color
    }
    if (cursor.value) {
      cursor.value.style.borderColor = color
    }
  }
)

onMounted(() => {
  if (cursorInner.value) {
    cursorInner.value.style.backgroundColor = props.mouseColor
  }
  if (cursor.value) {
    cursor.value.style.borderColor = props.mouseColor
  }
  document.addEventListener("mousemove", onMouseMove)
})

onBeforeUnmount(() => {
  document.removeEventListener("mousemove", onMouseMove)
})
</script>
