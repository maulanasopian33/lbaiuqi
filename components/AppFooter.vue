<script setup lang="ts">
const config = useRuntimeConfig()
const year = new Date().getFullYear()
</script>

<template>
  <footer id="kontak" class="bg-white border-t border-gray-100 mt-10">
    <div class="max-w-7xl mx-auto px-6 py-12 lg:py-16">
      <div class="grid xl:grid-cols-12 gap-12 xl:gap-8">
        <!-- Brand -->
        <div class="xl:col-span-4 space-y-4">
          <NuxtLink to="/" class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center">
              <NuxtImg src="/images/logo.png" alt="Logo LBA IUQI" class="w-6 h-6" format="webp" />
            </div>
            <div>
              <h1 class="text-base font-bold text-primary leading-tight">LBA IUQI</h1>
              <p class="text-xs text-gray-500">Lembaga Bahasa Asing</p>
            </div>
          </NuxtLink>
          <p class="text-sm text-gray-600 leading-relaxed max-w-sm">
            Platform resmi layanan TOAFL & TOEFL berbasis web untuk mendukung evaluasi bahasa yang profesional, aman, dan efisien.
          </p>
        </div>

        <!-- Links Container -->
        <div class="xl:col-span-8 grid md:grid-cols-3 gap-8">
          <!-- Column 1 -->
          <div>
            <h4 class="font-bold text-gray-900 mb-4">Layanan</h4>
            <ul class="space-y-3 text-sm text-gray-600">
              <li><a :href="config.public.toaflUrl" class="hover:text-primary transition-colors">TOAFL Online</a></li>
              <li><a :href="config.public.toeflUrl" class="hover:text-primary transition-colors">TOEFL Online</a></li>
              <li><NuxtLink to="/#layanan" class="hover:text-primary transition-colors">Info Layanan</NuxtLink></li>
            </ul>
          </div>

          <!-- Column 2 -->
          <div>
            <h4 class="font-bold text-gray-900 mb-4">Dukungan</h4>
            <ul class="space-y-3 text-sm text-gray-600">
              <li><NuxtLink to="/about" class="hover:text-primary transition-colors">Tentang Kami</NuxtLink></li>
              <li><NuxtLink to="/#keamanan" class="hover:text-primary transition-colors">Keamanan</NuxtLink></li>
              <li><NuxtLink to="/team" class="hover:underline">Tim</NuxtLink></li>
              <li><NuxtLink to="/#faq" class="hover:text-primary transition-colors">FAQ</NuxtLink></li>
            </ul>
          </div>

          <!-- Column 3 -->
          <div>
            <h4 class="font-bold text-gray-900 mb-4">Legal & Kontak</h4>
            <ul class="space-y-3 text-sm text-gray-600">
              <li><NuxtLink to="/privacy-policy" class="hover:text-primary transition-colors">Kebijakan Privasi</NuxtLink></li>
              <li><NuxtLink to="/terms" class="hover:text-primary transition-colors">Ketentuan Layanan</NuxtLink></li>
              <li class="pt-2">
                <a :href="`mailto:${config.public.contactEmail}`" class="flex items-center gap-2 hover:text-primary transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  {{ config.public.contactEmail }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© {{ year }} LBA IUQI. All rights reserved.</p>
        <p>Website: {{ config.public.siteUrl?.replace('https://', '') }}</p>
      </div>
    </div>
  </footer>
</template>
