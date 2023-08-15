
<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
navigateTo('/home')
</script>

<template lang="pug">
v-card.main-box-shadow(height="2000px" variant="elevated")
  v-card-title Hello Devs
  v-card-text Welcome to Template
</template>
