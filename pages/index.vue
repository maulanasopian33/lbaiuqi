<script setup lang="ts">
const config = useRuntimeConfig()

useSeoMeta({
  title: 'Lembaga Bahasa Asing IUQI | TOEFL & TOAFL Resmi',
  ogTitle: 'Lembaga Bahasa Asing IUQI | TOEFL & TOAFL Resmi',
  description: 'Lembaga Bahasa Asing IUQI (LBA IUQI) merupakan unit resmi penyelenggara layanan TOEFL dan TOAFL berbasis web untuk kebutuhan akademik dan institusional.',
  ogDescription: 'Lembaga Bahasa Asing IUQI (LBA IUQI) merupakan unit resmi penyelenggara layanan TOEFL dan TOAFL berbasis web untuk kebutuhan akademik dan institusional.'
})

useSchemaOrg([
  defineOrganization({
    name: 'LBA IUQI',
    logo: '/images/logo.png',
    sameAs: ['https://lbaiuqi.com']
  }),
  {
    '@type': 'Service',
    name: 'TOAFL Online',
    description: 'Test of Arabic as a Foreign Language (TOAFL) berbasis web untuk evaluasi kemampuan Bahasa Arab.',
    provider: {
      '@type': 'Organization',
      name: 'LBA IUQI'
    },
    url: config.public.toaflUrl as string
  },
  {
    '@type': 'Service',
    name: 'TOEFL Online',
    description: 'Test of English as a Foreign Language (TOEFL) berbasis web untuk evaluasi kemampuan Bahasa Inggris.',
    provider: {
      '@type': 'Organization',
      name: 'LBA IUQI'
    },
    url: config.public.toeflUrl as string
  }
])

const faqs = [
  {
    q: 'Apakah LBA IUQI menyimpan password Google?',
    a: 'Tidak. Login dilakukan melalui Google Sign-In via Firebase Authentication. Layanan tidak meminta atau menyimpan kata sandi Google Anda.'
  },
  {
    q: 'Data apa yang diproses saat login?',
    a: 'Umumnya data identitas dasar dari Google/Firebase seperti nama, email, UID Firebase, dan foto profil (jika tersedia) sesuai izin yang diberikan.'
  },
  {
    q: 'Bagaimana jika saya ingin menghapus akun/data?',
    a: 'Anda dapat mengajukan permintaan melalui email admin. Sebagian data mungkin tetap disimpan untuk kebutuhan administratif/akademik sesuai ketentuan.'
  },
  {
    q: 'Apakah layanan bisa diakses lewat HP?',
    a: 'Ya. Tampilan responsif untuk mobile, tablet, dan desktop.'
  }
]

const openIndex = ref<number | null>(0)
const toggleFaq = (i: number) => {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <!-- HERO -->
  <section class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-primary to-green-700"></div>
    <div class="absolute -top-24 -right-24 w-72 h-72 bg-accent/20 blur-3xl rounded-full"></div>
    <div class="absolute -bottom-28 -left-28 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

    <div class="relative max-w-7xl mx-auto px-6 py-16 md:py-24 text-white">
      <div class="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 class="inline-flex items-center gap-2 text-xs md:text-sm bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
            <span class="w-2 h-2 rounded-full bg-accent"></span>
            Lembaga Bahasa Asing IUQI
          </h1>
          <h2 class="text-4xl md:text-5xl font-extrabold leading-tight mt-4">
            Ujian Bahasa <span class="text-accent">Profesional</span> & Terpercaya
          </h2>

          <p class="text-base md:text-lg text-white/90 mt-5 max-w-xl">
            <strong>Lembaga Bahasa Asing IUQI (LBA IUQI)</strong> merupakan unit resmi
            yang menyelenggarakan layanan evaluasi kemampuan bahasa asing
            berbasis web, meliputi <strong>TOAFL</strong> dan <strong>TOEFL</strong>.
          </p>
          <p>
            Layanan ini digunakan untuk kebutuhan akademik dan institusional,
            dengan sistem ujian terstruktur, pengalaman pengguna modern,
            serta kebijakan keamanan dan privasi yang jelas.
          </p>

          <div class="mt-8 flex flex-col sm:flex-row gap-3">
            <a :href="config.public.toaflUrl"
               class="inline-flex items-center justify-center gap-2 bg-accent text-gray-900 px-6 py-3 rounded-xl font-semibold hover:opacity-95">
              Masuk TOAFL
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>

            <a :href="config.public.toeflUrl"
               class="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100">
              Masuk TOEFL
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>

            <a href="/about" class="btn-secondary">
              Profil Lembaga
            </a>
          </div>

          <div class="mt-8 flex flex-wrap items-center gap-3 text-xs text-white/80">
            <span class="px-3 py-1.5 rounded-full bg-white/10 border border-white/15">✅ Berbasis web</span>
            <span class="px-3 py-1.5 rounded-full bg-white/10 border border-white/15">✅ Google Sign-In (Firebase)</span>
            <span class="px-3 py-1.5 rounded-full bg-white/10 border border-white/15">✅ Privasi & ketentuan jelas</span>
          </div>

          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/about"
              class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 font-semibold">
              Tentang Kami
            </NuxtLink>
            <NuxtLink to="/privacy-policy"
              class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 font-semibold">
              Kebijakan Privasi
            </NuxtLink>
            <NuxtLink to="/terms"
              class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 font-semibold">
              Ketentuan Layanan
            </NuxtLink>
          </div>
        </div>

        <!-- HERO CARD -->
        <div class="lg:justify-self-end">
          <div class="bg-white rounded-2xl shadow-soft p-6 md:p-8 text-gray-800 border border-gray-100">
            <h2 class="text-lg md:text-xl font-bold text-ink">Ringkasan Cepat</h2>
            <p class="text-sm text-gray-600 mt-2">
               Pilih layanan evaluasi bahasa yang disediakan oleh
                Lembaga Bahasa Asing IUQI. Akses layanan menggunakan
                akun resmi yang terdaftar.
            </p>

            <div class="mt-6 grid gap-4">
              <div class="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <p class="font-semibold text-ink">TOAFL</p>
                <p class="text-sm text-gray-600">Evaluasi kemampuan Bahasa Arab.</p>
              </div>
              <div class="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <p class="font-semibold text-ink">TOEFL</p>
                <p class="text-sm text-gray-600">Evaluasi kemampuan Bahasa Inggris.</p>
              </div>
              <div class="p-4 rounded-xl bg-primary/5 border border-primary/15">
                <p class="text-sm text-gray-700">
                  <span class="font-semibold text-primary">Keamanan:</span>
                  sesi & token dikelola Firebase; akses dibatasi sesuai peran (admin/peserta).
                </p>
              </div>
            </div>

            <div class="mt-6 grid grid-cols-3 gap-3 text-center">
              <div class="p-3 rounded-xl bg-gray-50 border border-gray-100">
                <p class="text-xs text-gray-500">Akses</p>
                <p class="font-bold text-ink">Web</p>
              </div>
              <div class="p-3 rounded-xl bg-gray-50 border border-gray-100">
                <p class="text-xs text-gray-500">Auth</p>
                <p class="font-bold text-ink">Google</p>
              </div>
              <div class="p-3 rounded-xl bg-gray-50 border border-gray-100">
                <p class="text-xs text-gray-500">Dokumen</p>
                <p class="font-bold text-ink">Lengkap</p>
              </div>
            </div>

            <p class="text-xs text-gray-500 mt-4">
              Dengan menggunakan layanan ini, Anda menyetujui
              <NuxtLink class="underline" to="/terms">Ketentuan</NuxtLink>
              dan
              <NuxtLink class="underline" to="/privacy-policy">Kebijakan Privasi</NuxtLink>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TRUST / STATS -->
  <section class="bg-white border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-6 py-10">
      <div class="grid md:grid-cols-4 gap-4">
        <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
          <p class="text-xs font-bold text-primary">PLATFORM</p>
          <p class="text-lg font-extrabold text-ink mt-1">Modern</p>
          <p class="text-sm text-gray-600 mt-1">UI responsif & mudah digunakan.</p>
        </div>
        <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
          <p class="text-xs font-bold text-primary">AUTH</p>
          <p class="text-lg font-extrabold text-ink mt-1">Terverifikasi</p>
          <p class="text-sm text-gray-600 mt-1">Google Sign-In via Firebase.</p>
        </div>
        <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
          <p class="text-xs font-bold text-primary">KEAMANAN</p>
          <p class="text-lg font-extrabold text-ink mt-1">Terkontrol</p>
          <p class="text-sm text-gray-600 mt-1">Akses berbasis peran.</p>
        </div>
        <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
          <p class="text-xs font-bold text-primary">DOKUMEN</p>
          <p class="text-lg font-extrabold text-ink mt-1">Transparan</p>
          <p class="text-sm text-gray-600 mt-1">Privasi & ketentuan jelas.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TENTANG SINGKAT -->
  <section id="tentang" class="max-w-7xl mx-auto px-6 py-16">
    <div class="grid lg:grid-cols-12 gap-8 items-start">
      <div class="lg:col-span-5">
        <h2 class="text-3xl md:text-4xl font-extrabold text-ink">Tentang Lembaga Bahasa Asing IUQI</h2>
        <p class="mt-4 text-gray-600 leading-relaxed">
          Lembaga Bahasa Asing IUQI berperan sebagai penyelenggara resmi evaluasi kemampuan bahasa asing untuk kebutuhan akademik dan institusional. Sistem layanan dikembangkan untuk menjamin validitas, keamanan, dan kemudahan akses.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <NuxtLink to="/about" class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-primary text-white font-semibold hover:opacity-95">
            Pelajari Lebih Lanjut
          </NuxtLink>
          <NuxtLink to="/privacy-policy" class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-gray-200 bg-white font-semibold hover:bg-gray-50">
            Kebijakan Privasi
          </NuxtLink>
        </div>
      </div>

      <div class="lg:col-span-7">
        <div class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-lg font-bold text-ink">Yang kami utamakan</h3>
          <div class="mt-4 grid sm:grid-cols-2 gap-4">
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="font-semibold text-ink">Standar Akademik</p>
              <p class="text-sm text-gray-600 mt-2">Pengelolaan sesuai prinsip akademik & etika pendidikan.</p>
            </div>
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="font-semibold text-ink">Transparansi</p>
              <p class="text-sm text-gray-600 mt-2">Dokumen kebijakan jelas untuk membangun kepercayaan.</p>
            </div>
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="font-semibold text-ink">Kemudahan Akses</p>
              <p class="text-sm text-gray-600 mt-2">Dapat digunakan kapan saja sesuai kebijakan penyelenggaraan.</p>
            </div>
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="font-semibold text-ink">Keamanan</p>
              <p class="text-sm text-gray-600 mt-2">Kontrol akses & praktik keamanan yang wajar.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- LAYANAN -->
  <section id="layanan" class="bg-white border-y border-gray-100">
    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold text-ink">Layanan</h2>
        <p class="mt-3 text-gray-600 max-w-2xl mx-auto">
          Dua layanan utama untuk evaluasi kemampuan bahasa asing berbasis web.
        </p>
      </div>

      <div class="mt-10 grid md:grid-cols-2 gap-8">
        <article class="bg-white rounded-2xl shadow-soft p-8 border border-gray-100">
          <h3 class="text-xl font-bold text-ink">TOAFL</h3>
          <p class="mt-3 text-gray-600">
            Test of Arabic as a Foreign Language (TOAFL) untuk evaluasi kemampuan Bahasa Arab.
          </p>
          <ul class="mt-5 space-y-2 text-sm text-gray-700">
            <li class="flex gap-2"><span class="text-primary font-bold">•</span> Akses ujian berbasis web</li>
            <li class="flex gap-2"><span class="text-primary font-bold">•</span> Rekap hasil terstruktur</li>
            <li class="flex gap-2"><span class="text-primary font-bold">•</span> Dukungan admin</li>
          </ul>
          <div class="mt-6">
            <a :href="config.public.toaflUrl" class="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
              Buka TOAFL
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </article>

        <article class="bg-white rounded-2xl shadow-soft p-8 border border-gray-100">
          <h3 class="text-xl font-bold text-ink">TOEFL</h3>
          <p class="mt-3 text-gray-600">
            Test of English as a Foreign Language (TOEFL) untuk evaluasi kemampuan Bahasa Inggris.
          </p>
          <ul class="mt-5 space-y-2 text-sm text-gray-700">
            <li class="flex gap-2"><span class="text-primary font-bold">•</span> Proses mudah & cepat</li>
            <li class="flex gap-2"><span class="text-primary font-bold">•</span> Hasil rapi untuk instansi</li>
            <li class="flex gap-2"><span class="text-primary font-bold">•</span> Mendukung kebijakan pengawasan</li>
          </ul>
          <div class="mt-6">
            <a :href="config.public.toeflUrl" class="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
              Buka TOEFL
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ALUR -->
  <section class="max-w-7xl mx-auto px-6 py-16">
    <div class="text-center">
      <h2 class="text-3xl md:text-4xl font-extrabold text-ink">Alur Penggunaan</h2>
      <p class="mt-3 text-gray-600 max-w-2xl mx-auto">
        Proses sederhana untuk memulai dan mengikuti layanan ujian.
      </p>
    </div>

    <div class="mt-10 grid md:grid-cols-3 gap-8">
      <div class="p-7 rounded-2xl bg-white border border-gray-100 shadow-soft">
        <p class="text-xs font-bold text-primary">LANGKAH 1</p>
        <h3 class="font-bold text-ink mt-2">Login Google</h3>
        <p class="text-sm text-gray-600 mt-2">Masuk dengan akun Google melalui Firebase Authentication.</p>
      </div>
      <div class="p-7 rounded-2xl bg-white border border-gray-100 shadow-soft">
        <p class="text-xs font-bold text-primary">LANGKAH 2</p>
        <h3 class="font-bold text-ink mt-2">Pilih Layanan</h3>
        <p class="text-sm text-gray-600 mt-2">Pilih TOAFL atau TOEFL sesuai kebutuhan dan ketentuan.</p>
      </div>
      <div class="p-7 rounded-2xl bg-white border border-gray-100 shadow-soft">
        <p class="text-xs font-bold text-primary">LANGKAH 3</p>
        <h3 class="font-bold text-ink mt-2">Ikuti Ujian</h3>
        <p class="text-sm text-gray-600 mt-2">Kerjakan ujian sesuai aturan, lalu lihat hasil sesuai kebijakan.</p>
      </div>
    </div>
  </section>

  <!-- AUTH & KEAMANAN -->
  <section id="keamanan" class="bg-white border-y border-gray-100">
    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold text-ink">Auth & Keamanan</h2>
        <p class="mt-3 text-gray-600 max-w-3xl mx-auto">
          Kami mengutamakan keamanan akses dan transparansi pemrosesan data.
          Login dilakukan dengan Google Sign-In melalui Firebase Authentication.
        </p>
      </div>

      <div class="mt-10 grid md:grid-cols-3 gap-8">
        <div class="p-7 rounded-2xl bg-gray-50 border border-gray-100">
          <h3 class="font-bold text-ink">Tanpa Password</h3>
          <p class="text-sm text-gray-600 mt-2">
            Kami tidak meminta atau menyimpan kata sandi akun Google Anda.
          </p>
        </div>
        <div class="p-7 rounded-2xl bg-gray-50 border border-gray-100">
          <h3 class="font-bold text-ink">Kontrol Akses</h3>
          <p class="text-sm text-gray-600 mt-2">
            Akses dibatasi sesuai peran (admin/peserta) dan kebutuhan data.
          </p>
        </div>
        <div class="p-7 rounded-2xl bg-gray-50 border border-gray-100">
          <h3 class="font-bold text-ink">Praktik Wajar</h3>
          <p class="text-sm text-gray-600 mt-2">
            Minimasi data, pencatatan keamanan terbatas, dan prosedur pelaporan insiden.
          </p>
        </div>
      </div>

      <div class="mt-10 text-center text-sm text-gray-600">
        Detail lengkap tersedia di
        <NuxtLink class="text-primary font-semibold hover:underline" to="/privacy-policy">Kebijakan Privasi</NuxtLink>
        dan
        <NuxtLink class="text-primary font-semibold hover:underline" to="/terms">Ketentuan Layanan</NuxtLink>.
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="max-w-7xl mx-auto px-6 py-16">
    <div class="text-center">
      <h2 class="text-3xl md:text-4xl font-extrabold text-ink">FAQ</h2>
      <p class="mt-3 text-gray-600 max-w-2xl mx-auto">Pertanyaan umum terkait akses, kebijakan, dan keamanan.</p>
    </div>

    <div class="mt-10 max-w-3xl mx-auto space-y-4">
      <div v-for="(f, i) in faqs" :key="f.q" class="bg-white border border-gray-100 rounded-2xl shadow-soft overflow-hidden">
        <button class="w-full flex justify-between items-center px-6 py-5 text-left"
                @click="toggleFaq(i)"
                :aria-expanded="openIndex === i ? 'true' : 'false'">
          <span class="font-semibold text-ink">{{ f.q }}</span>
          <svg class="w-5 h-5 text-gray-500 transition"
               :class="openIndex === i ? 'rotate-180' : ''"
               viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <div v-show="openIndex === i" class="px-6 pb-6 text-sm text-gray-600">
          {{ f.a }}
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="max-w-7xl mx-auto px-6 pb-16">
    <div class="bg-gradient-to-br from-primary to-green-700 rounded-3xl p-10 md:p-12 text-white overflow-hidden relative">
      <div class="absolute -top-20 -right-20 w-72 h-72 bg-accent/20 blur-3xl rounded-full"></div>

      <div class="relative grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-extrabold">Siap Memulai?</h2>
          <p class="mt-3 text-white/90 max-w-xl">
            Pilih layanan yang sesuai kebutuhan Anda. Pastikan Anda telah membaca dokumen kebijakan untuk penggunaan yang aman dan sesuai.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 lg:justify-end">
          <a :href="config.public.toaflUrl"
             class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-gray-900 font-semibold hover:opacity-95">
            Masuk TOAFL
          </a>
          <a :href="config.public.toeflUrl"
             class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-gray-100">
            Masuk TOEFL
          </a>
        </div>
      </div>

      <div class="relative mt-6 text-xs text-white/80">
        Lihat:
        <NuxtLink class="underline" to="/privacy-policy">Kebijakan Privasi</NuxtLink>
        •
        <NuxtLink class="underline" to="/terms">Ketentuan</NuxtLink>
        •
        <NuxtLink class="underline" to="/about">Tentang</NuxtLink>
      </div>
    </div>
  </section>
</template>
