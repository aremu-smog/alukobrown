<template>
  <a :href="url" target="_blank" rel="noreferrer">
    <img :src="icon" :alt="alt" />
  </a>
</template>

<script setup>
defineProps({
  alt: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})
</script>
