<script setup lang="ts">
usePageSeo({
  title: 'Tim — LBA IUQI',
  description: 'Profil tim LBA IUQI yang mendukung layanan TOAFL & TOEFL berbasis web.'
})
type TeamMember = {
  name: string
  role: string
  focus: string
  email?: string
  linkedin?: string
  initials: string
  tags: string[]
  variant?: 'primary' | 'amber' | 'slate'
}

const leadership: TeamMember[] = [
  {
    name: 'Koordinator LBA IUQI',
    role: 'Koordinator / Kepala Unit',
    focus: 'Arah kebijakan, standar layanan, dan kualitas penyelenggaraan.',
    initials: 'KU',
    tags: ['Kebijakan', 'Mutu', 'Koordinasi'],
    variant: 'primary'
  },
  {
    name: 'Penanggung Jawab Akademik',
    role: 'Academic Lead',
    focus: 'Kurikulum, penyusunan kisi-kisi, dan integritas materi ujian.',
    initials: 'AL',
    tags: ['Standar Akademik', 'Validasi', 'Integritas'],
    variant: 'amber'
  }
]

const operations: TeamMember[] = [
  {
    name: 'Admin Layanan',
    role: 'Operasional & Support',
    focus: 'Registrasi, verifikasi, komunikasi, dan bantuan pengguna.',
    initials: 'AD',
    tags: ['Support', 'Administrasi', 'Komunikasi'],
    variant: 'slate',
    email: 'admin@lbaiuqi.com'
  },
  {
    name: 'Pengawas Ujian',
    role: 'Proctoring',
    focus: 'Pengawasan, penanganan insiden, dan kepatuhan aturan ujian.',
    initials: 'PR',
    tags: ['Proctoring', 'Kepatuhan', 'Audit'],
    variant: 'amber'
  }
]

const tech: TeamMember[] = [
  {
    name: 'Administrator Sistem',
    role: 'System Admin',
    focus: 'Akses, konfigurasi, monitoring layanan, dan keamanan operasional.',
    initials: 'SA',
    tags: ['Security', 'Monitoring', 'Access Control'],
    variant: 'primary'
  },
  {
    name: 'Pengembang Aplikasi',
    role: 'Web Developer',
    focus: 'Pengembangan fitur, performa, dan pengalaman pengguna.',
    initials: 'WD',
    tags: ['Nuxt/Vue', 'UI/UX', 'Performance'],
    variant: 'slate'
  }
]

const badgeClass = (variant?: TeamMember['variant']) => {
  if (variant === 'amber') return 'bg-amber-50 border-amber-100 text-amber-800'
  if (variant === 'slate') return 'bg-slate-50 border-slate-100 text-slate-800'
  return 'bg-primary/10 border-primary/15 text-primary'
}

const avatarClass = (variant?: TeamMember['variant']) => {
  if (variant === 'amber') return 'bg-amber-50 text-amber-800 border-amber-100'
  if (variant === 'slate') return 'bg-slate-50 text-slate-800 border-slate-100'
  return 'bg-primary/10 text-primary border-primary/15'
}
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
            Profil Organisasi
            <span class="w-1.5 h-1.5 rounded-full bg-accent"></span>
            Tim LBA IUQI
          </p>
          <h1 class="text-3xl md:text-4xl font-extrabold mt-4">Tim LBA IUQI</h1>
          <p class="text-white/90 mt-2 max-w-2xl">
            Tim kami bekerja lintas fungsi: akademik, operasional, dan teknologi—untuk memastikan layanan
            TOAFL & TOEFL berjalan profesional, aman, dan berintegritas.
          </p>
        </div>

        <div class="bg-white/10 border border-white/15 rounded-2xl p-4 md:p-5">
          <p class="text-xs text-white/80">Fokus kerja</p>
          <p class="text-lg font-bold">Mutu • Integritas • Layanan</p>
          <p class="text-xs text-white/80 mt-1">Struktur dapat disesuaikan kebutuhan institusi.</p>
        </div>
      </div>
    </div>
  </section>

  <main class="max-w-7xl mx-auto px-6 py-12">
    <!-- intro -->
    <section class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
      <h2 class="text-xl font-bold text-ink">Cara kami bekerja</h2>
      <div class="mt-4 grid md:grid-cols-3 gap-4">
        <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
          <p class="text-xs font-bold text-primary">AKADEMIK</p>
          <p class="text-sm text-gray-600 mt-2">Menjaga validitas materi, kisi-kisi, dan standar evaluasi.</p>
        </div>
        <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
          <p class="text-xs font-bold text-primary">OPERASIONAL</p>
          <p class="text-sm text-gray-600 mt-2">Melayani pengguna, verifikasi, dan kelancaran pelaksanaan.</p>
        </div>
        <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
          <p class="text-xs font-bold text-primary">TEKNOLOGI</p>
          <p class="text-sm text-gray-600 mt-2">Keamanan sistem, performa, serta pengembangan fitur.</p>
        </div>
      </div>

      <div class="mt-5 p-5 rounded-2xl bg-primary/5 border border-primary/15">
        <p class="text-sm text-gray-700">
          <span class="font-semibold text-primary">Catatan privasi:</span>
          Jika Anda ingin menampilkan nama/foto asli anggota tim, pastikan ada persetujuan dan kebijakan privasi internal.
        </p>
      </div>
    </section>

    <!-- Leadership -->
    <section class="mt-10">
      <div class="flex items-end justify-between gap-4">
        <div>
          <h2 class="text-2xl md:text-3xl font-extrabold text-ink">Pimpinan & Pengarah</h2>
          <p class="text-gray-600 mt-2">Menetapkan kebijakan, kualitas, dan arah pengembangan layanan.</p>
        </div>
      </div>

      <div class="mt-6 grid md:grid-cols-2 gap-6">
        <div v-for="m in leadership" :key="m.initials" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 rounded-2xl border grid place-items-center font-extrabold"
                 :class="avatarClass(m.variant)">
              {{ m.initials }}
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2">
                <h3 class="text-lg font-bold text-ink">{{ m.name }}</h3>
                <span class="text-xs font-semibold px-3 py-1.5 rounded-full border" :class="badgeClass(m.variant)">
                  {{ m.role }}
                </span>
              </div>
              <p class="text-sm text-gray-600 mt-2">{{ m.focus }}</p>

              <div class="mt-4 flex flex-wrap gap-2">
                <span v-for="t in m.tags" :key="t" class="text-xs px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-700">
                  {{ t }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Operations -->
    <section class="mt-12">
      <h2 class="text-2xl md:text-3xl font-extrabold text-ink">Operasional</h2>
      <p class="text-gray-600 mt-2">Berhubungan langsung dengan peserta dan pelaksanaan layanan harian.</p>

      <div class="mt-6 grid md:grid-cols-2 gap-6">
        <div v-for="m in operations" :key="m.initials" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 rounded-2xl border grid place-items-center font-extrabold"
                 :class="avatarClass(m.variant)">
              {{ m.initials }}
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2">
                <h3 class="text-lg font-bold text-ink">{{ m.name }}</h3>
                <span class="text-xs font-semibold px-3 py-1.5 rounded-full border" :class="badgeClass(m.variant)">
                  {{ m.role }}
                </span>
              </div>
              <p class="text-sm text-gray-600 mt-2">{{ m.focus }}</p>

              <div class="mt-4 flex flex-wrap gap-2">
                <span v-for="t in m.tags" :key="t" class="text-xs px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-700">
                  {{ t }}
                </span>
              </div>

              <div v-if="m.email" class="mt-5">
                <a :href="`mailto:${m.email}`" class="text-sm font-semibold text-primary hover:underline">
                  Kontak: {{ m.email }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech -->
    <section class="mt-12">
      <h2 class="text-2xl md:text-3xl font-extrabold text-ink">Teknologi</h2>
      <p class="text-gray-600 mt-2">Menjaga keamanan, kestabilan, dan pengembangan platform.</p>

      <div class="mt-6 grid md:grid-cols-2 gap-6">
        <div v-for="m in tech" :key="m.initials" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 rounded-2xl border grid place-items-center font-extrabold"
                 :class="avatarClass(m.variant)">
              {{ m.initials }}
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2">
                <h3 class="text-lg font-bold text-ink">{{ m.name }}</h3>
                <span class="text-xs font-semibold px-3 py-1.5 rounded-full border" :class="badgeClass(m.variant)">
                  {{ m.role }}
                </span>
              </div>
              <p class="text-sm text-gray-600 mt-2">{{ m.focus }}</p>

              <div class="mt-4 flex flex-wrap gap-2">
                <span v-for="t in m.tags" :key="t" class="text-xs px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-700">
                  {{ t }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="mt-12">
      <div class="bg-gradient-to-br from-primary to-green-700 rounded-3xl p-10 md:p-12 text-white overflow-hidden relative">
        <div class="absolute -top-20 -right-20 w-72 h-72 bg-accent/20 blur-3xl rounded-full"></div>

        <div class="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 class="text-3xl font-extrabold">Perlu bantuan?</h3>
            <p class="mt-3 text-white/90">
              Untuk informasi layanan, kendala akses, atau administrasi, silakan hubungi admin.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 lg:justify-end">
            <a href="mailto:admin@lbaiuqi.com"
               class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-gray-900 font-semibold hover:opacity-95">
              Email Admin
            </a>
            <NuxtLink to="/about"
              class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-gray-100">
              Tentang LBA IUQI
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between gap-4 pt-6">
        <NuxtLink to="/" class="text-sm font-semibold text-primary hover:underline">← Kembali ke Beranda</NuxtLink>
        <a href="#top" class="text-sm font-semibold text-gray-600 hover:text-primary">Ke atas ↑</a>
      </div>
    </section>
  </main>
</template>
