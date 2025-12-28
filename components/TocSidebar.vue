<script setup lang="ts">
type TocItem = { href: string; label: string }

const props = withDefaults(defineProps<{
  title?: string
  subtitle?: string
  items: TocItem[]
  noteTitle?: string
  noteText?: string
  noteVariant?: 'primary' | 'amber'
}>(), {
  noteVariant: 'primary'
})

const noteClass = computed(() => {
  return props.noteVariant === 'amber'
    ? 'bg-amber-50 border-amber-100 text-amber-800'
    : 'bg-primary/5 border-primary/15 text-gray-700'
})
</script>

<template>
  <aside class="lg:col-span-4 lg:sticky lg:top-24">
    <div class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6">
      <h3 class="font-bold text-ink">{{ props.title ?? 'Daftar Isi' }}</h3>
      <p v-if="props.subtitle" class="text-sm text-gray-600 mt-1">{{ props.subtitle }}</p>

      <nav class="mt-5 space-y-2 text-sm">
        <a
          v-for="it in props.items"
          :key="it.href"
          class="block px-3 py-2 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100"
          :href="it.href"
        >
          {{ it.label }}
        </a>
      </nav>

      <div v-if="props.noteText" class="mt-6 p-4 rounded-2xl border" :class="noteClass">
        <p class="text-sm">
          <span
            v-if="props.noteTitle"
            class="font-semibold"
            :class="props.noteVariant === 'amber' ? '' : 'text-primary'"
          >
            {{ props.noteTitle }}
          </span>
          <span v-if="props.noteTitle"> </span>
          {{ props.noteText }}
        </p>
      </div>
    </div>
  </aside>
</template>
