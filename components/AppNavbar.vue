<script setup lang="ts">
const route = useRoute()
const menuOpen = ref(false)

const isActive = (path: string) => route.path === path
</script>

<template>
  <header class="bg-white/80 backdrop-blur border-b border-gray-100 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <NuxtLink to="/" class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center">
          <NuxtImg src="/images/logo.png" alt="Logo LBA IUQI" class="w-6 h-6" format="webp" />
        </div>
        <div>
          <h1 class="text-base md:text-lg font-bold text-primary leading-tight">LBA IUQI</h1>
          <p class="text-xs text-gray-500 -mt-0.5">Lembaga Bahasa Asing</p>
        </div>
      </NuxtLink>

      <nav class="hidden md:flex gap-7 text-sm font-medium items-center">
        <NuxtLink to="/#layanan" class="hover:text-primary">Layanan</NuxtLink>
        <NuxtLink to="/#keamanan" class="hover:text-primary">Auth & Keamanan</NuxtLink>

        <NuxtLink
          to="/privacy-policy"
          class="hover:text-primary"
          :class="isActive('/privacy-policy') ? 'text-primary font-semibold' : ''"
        >
          Privasi
        </NuxtLink>

        <NuxtLink
          to="/terms"
          class="hover:text-primary"
          :class="isActive('/terms') ? 'text-primary font-semibold' : ''"
        >
          Ketentuan
        </NuxtLink>
        <NuxtLink
          to="/team"
          class="hover:text-primary"
          :class="isActive('/team') ? 'text-primary font-semibold' : ''"
        >
          Tim
        </NuxtLink>

        <NuxtLink
          to="/about"
          class="hover:text-primary"
          :class="isActive('/about') ? 'text-primary font-semibold' : ''"
        >
          Tentang
        </NuxtLink>

        <NuxtLink
          to="/#kontak"
          class="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          Kontak
        </NuxtLink>
      </nav>

      <button
        class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30"
        aria-label="Buka menu"
        :aria-expanded="menuOpen ? 'true' : 'false'"
        @click="menuOpen = !menuOpen"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>

    <div v-show="menuOpen" class="md:hidden border-t border-gray-100 bg-white">
      <div class="max-w-7xl mx-auto px-6 py-4 grid gap-3 text-sm">
        <NuxtLink to="/#layanan" class="py-2 hover:text-primary" @click="menuOpen=false">Layanan</NuxtLink>
        <NuxtLink to="/#keamanan" class="py-2 hover:text-primary" @click="menuOpen=false">Auth & Keamanan</NuxtLink>
        <NuxtLink to="/privacy-policy" class="py-2 hover:text-primary" @click="menuOpen=false">Privasi</NuxtLink>
        <NuxtLink to="/terms" class="py-2 hover:text-primary" @click="menuOpen=false">Ketentuan</NuxtLink>
        <NuxtLink to="/team" class="py-2 hover:text-primary" @click="menuOpen=false">Tim</NuxtLink>
        <NuxtLink to="/about" class="py-2 hover:text-primary" @click="menuOpen=false">Tentang</NuxtLink>
        <NuxtLink to="/#kontak" class="py-2 hover:text-primary" @click="menuOpen=false">Kontak</NuxtLink>
      </div>
    </div>
  </header>
</template>
