<script setup lang="ts">
const props = defineProps<{
  content: Record<string, any>
}>()

useHead({
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify(props.content)
    }
  ]
})
</script>

<template>
  <!-- Schema.org JSON-LD injected via useHead -->
</template>