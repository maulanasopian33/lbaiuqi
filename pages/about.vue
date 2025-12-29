<script setup lang="ts">
const config = useRuntimeConfig()

useSeoMeta({
  title: 'Tentang Kami — LBA IUQI',
  ogTitle: 'Tentang Kami — LBA IUQI',
  description: 'Profil Lembaga Bahasa Asing IUQI (LBA IUQI), visi, misi, nilai, dan komitmen layanan.',
  ogDescription: 'Profil Lembaga Bahasa Asing IUQI (LBA IUQI), visi, misi, nilai, dan komitmen layanan.'
})

const year = new Date().getFullYear()
const siteUrl = (config.public.siteUrl as string) || 'https://lbaiuqi.com'

useSchemaOrg([
  defineOrganization({
    '@type': 'EducationalOrganization',
    name: 'LBA IUQI',
    alternateName: 'Lembaga Bahasa Asing IUQI',
    logo: '/images/logo.png',
    description: 'Lembaga Bahasa Asing IUQI (LBA IUQI) berfokus pada layanan evaluasi kemampuan bahasa berbasis web yang profesional, aman, dan berstandar akademik.',
    email: (config.public.contactEmail as string) || 'admin@lbaiuqi.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
      postalCode: '16640',
      streetAddress: 'Jl. Mohnoh Nur No.112, Leuwimekar, Kec. Leuwiliang',
      addressLocality: 'Bogor'
    }
  })
])
</script>

<template>
  <a id="top"></a>

  <!-- HERO -->
  <section class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-primary to-green-700"></div>
    <div class="absolute -top-24 -right-24 w-80 h-80 bg-accent/20 blur-3xl rounded-full"></div>
    <div class="absolute -bottom-28 -left-28 w-80 h-80 bg-white/10 blur-3xl rounded-full"></div>

    <div class="relative max-w-7xl mx-auto px-6 py-12 md:py-16 text-white">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p class="inline-flex items-center gap-2 text-xs bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
            Profil Lembaga
            <span class="w-1.5 h-1.5 rounded-full bg-accent"></span>
            Tentang Kami
          </p>
          <h1 class="text-3xl md:text-4xl font-extrabold mt-4">Tentang LBA IUQI</h1>
          <p class="text-white/90 mt-2 max-w-2xl">
            Lembaga Bahasa Asing IUQI (LBA IUQI) berfokus pada layanan evaluasi kemampuan bahasa
            berbasis web yang profesional, aman, dan berstandar akademik.
          </p>
        </div>

        <div class="bg-white/10 border border-white/15 rounded-2xl p-4 md:p-5">
          <p class="text-xs text-white/80">Komitmen</p>
          <p class="text-lg font-bold">Integritas • Mutu • Keamanan</p>
          <p class="text-xs text-white/80 mt-1">Diperbarui untuk kebutuhan layanan yang relevan.</p>
        </div>
      </div>
    </div>
  </section>

  <main class="max-w-7xl mx-auto px-6 py-12">
    <!-- Intro cards -->
    <section class="grid lg:grid-cols-12 gap-8 items-start">
      <div class="lg:col-span-5">
        <div class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h2 class="text-xl font-bold text-ink">Siapa Kami</h2>
          <p class="text-gray-600 mt-3 leading-relaxed">
            LBA IUQI adalah unit penyelenggara layanan bahasa asing yang menyediakan sistem
            ujian berbasis web untuk <strong>TOAFL</strong> dan <strong>TOEFL</strong>.
            Kami mengedepankan standar akademik, tata kelola yang baik, dan pengalaman pengguna yang modern.
          </p>

          <div class="mt-5 p-5 rounded-2xl bg-primary/5 border border-primary/15">
            <p class="text-sm text-gray-700">
              <span class="font-semibold text-primary">Catatan:</span>
              Autentikasi pengguna menggunakan Google Sign-In melalui Firebase Authentication (tanpa menyimpan password Google).
            </p>
          </div>
        </div>
      </div>

      <div class="lg:col-span-7 space-y-6">
        <div class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h2 class="text-xl font-bold text-ink">Fokus Layanan</h2>
          <div class="mt-4 grid sm:grid-cols-2 gap-4">
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="text-xs font-bold text-primary">TOAFL</p>
              <p class="font-semibold text-ink mt-1">Evaluasi Bahasa Arab</p>
              <p class="text-sm text-gray-600 mt-1">Untuk kebutuhan akademik dan institusional.</p>
            </div>
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="text-xs font-bold text-primary">TOEFL</p>
              <p class="font-semibold text-ink mt-1">Evaluasi Bahasa Inggris</p>
              <p class="text-sm text-gray-600 mt-1">Untuk konteks akademik dan profesional.</p>
            </div>
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="text-xs font-bold text-primary">Berbasis Web</p>
              <p class="font-semibold text-ink mt-1">Akses Fleksibel</p>
              <p class="text-sm text-gray-600 mt-1">Responsif di mobile, tablet, dan desktop.</p>
            </div>
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="text-xs font-bold text-primary">Keamanan</p>
              <p class="font-semibold text-ink mt-1">Kontrol & Audit</p>
              <p class="text-sm text-gray-600 mt-1">Pembatasan peran (admin/peserta) dan monitoring wajar.</p>
            </div>
          </div>
        </div>

        <div class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h2 class="text-xl font-bold text-ink">Visi, Misi, Nilai</h2>
          <div class="mt-4 grid md:grid-cols-3 gap-4">
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="text-xs font-bold text-primary">VISI</p>
              <p class="text-sm text-gray-600 mt-2">
                Menjadi pusat layanan evaluasi bahasa asing yang kredibel, modern, dan berorientasi mutu.
              </p>
            </div>
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="text-xs font-bold text-primary">MISI</p>
              <p class="text-sm text-gray-600 mt-2">
                Menyediakan sistem ujian yang mudah diakses, transparan, serta mendukung kebutuhan institusi.
              </p>
            </div>
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="text-xs font-bold text-primary">NILAI</p>
              <p class="text-sm text-gray-600 mt-2">
                Integritas, profesionalisme, keamanan data, dan perbaikan berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Commitment -->
    <section class="mt-10 bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
      <h2 class="text-xl font-bold text-ink">Komitmen Kami</h2>
      <div class="mt-4 grid md:grid-cols-3 gap-4">
        <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
          <p class="font-semibold text-ink">Integritas Ujian</p>
          <p class="text-sm text-gray-600 mt-2">Menjaga fairness melalui aturan, audit, dan kebijakan penegakan.</p>
        </div>
        <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
          <p class="font-semibold text-ink">Privasi & Keamanan</p>
          <p class="text-sm text-gray-600 mt-2">Minimasi data, kontrol akses, dan praktik perlindungan yang wajar.</p>
        </div>
        <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
          <p class="font-semibold text-ink">Pengalaman Modern</p>
          <p class="text-sm text-gray-600 mt-2">Antarmuka bersih, responsif, dan mudah digunakan.</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="mt-10">
      <div class="bg-gradient-to-br from-primary to-green-700 rounded-3xl p-10 md:p-12 text-white overflow-hidden relative">
        <div class="absolute -top-20 -right-20 w-72 h-72 bg-accent/20 blur-3xl rounded-full"></div>
        <div class="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 class="text-3xl font-extrabold">Siap menggunakan layanan?</h3>
            <p class="mt-3 text-white/90">
              Akses platform TOAFL atau TOEFL untuk memulai proses sesuai ketentuan.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-3 lg:justify-end">
            <a href="https://toafl.lbaiuqi.com"
               class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-gray-900 font-semibold hover:opacity-95">
              Masuk TOAFL
            </a>
            <a href="https://toefl.lbaiuqi.com"
               class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-gray-100">
              Masuk TOEFL
            </a>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between gap-4 pt-6">
        <NuxtLink to="/" class="text-sm font-semibold text-primary hover:underline">← Kembali ke Beranda</NuxtLink>
        <a href="#top" class="text-sm font-semibold text-gray-600 hover:text-primary">Ke atas ↑</a>
      </div>
    </section>

    <p class="text-xs text-gray-500 mt-10">
      © {{ year }} LBA IUQI — informasi profil dapat disesuaikan sesuai kebijakan institusi.
    </p>
  </main>
</template>
