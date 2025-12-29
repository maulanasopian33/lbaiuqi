<script setup lang="ts">
useSeoMeta({
  title: 'Ketentuan Layanan — LBA IUQI',
  ogTitle: 'Ketentuan Layanan — LBA IUQI',
  description: 'Ketentuan Layanan LBA IUQI untuk penggunaan layanan TOAFL & TOEFL berbasis web.',
  ogDescription: 'Ketentuan Layanan LBA IUQI untuk penggunaan layanan TOAFL & TOEFL berbasis web.'
})

const effectiveAt = computed(() => {
  const d = new Date()
  const months = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
})

const toc = [
  { href: '#penerimaan', label: '1. Penerimaan Ketentuan' },
  { href: '#akun', label: '2. Kelayakan & Akun' },
  { href: '#integritas', label: '3. Aturan Ujian & Integritas' },
  { href: '#larangan', label: '4. Penggunaan yang Dilarang' },
  { href: '#ketersediaan', label: '5. Ketersediaan Layanan' },
  { href: '#ip', label: '6. Hak Kekayaan Intelektual' },
  { href: '#privasi', label: '7. Privasi' },
  { href: '#hapus', label: '8. Penghapusan Akun & Data' },
  { href: '#tanggungjawab', label: '9. Pembatasan Tanggung Jawab' },
  { href: '#perubahan', label: '10. Perubahan Ketentuan' },
  { href: '#kontak', label: '11. Kontak' }
]
</script>

<template>
  <a id="top"></a>

  <section class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-primary to-green-700"></div>
    <div class="absolute -top-24 -right-24 w-80 h-80 bg-accent/20 blur-3xl rounded-full"></div>
    <div class="absolute -bottom-28 -left-28 w-80 h-80 bg-white/10 blur-3xl rounded-full"></div>

    <div class="relative max-w-7xl mx-auto px-6 py-12 md:py-16 text-white">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p class="inline-flex items-center gap-2 text-xs bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
            Dokumen Resmi
            <span class="w-1.5 h-1.5 rounded-full bg-accent"></span>
            Aturan Penggunaan
          </p>
          <h2 class="text-3xl md:text-4xl font-extrabold mt-4">Ketentuan Layanan</h2>
          <p class="text-white/90 mt-2 max-w-2xl">
            Ketentuan ini mengatur penggunaan layanan LBA IUQI untuk menjaga integritas ujian, keamanan, dan kenyamanan pengguna.
          </p>
        </div>

        <div class="bg-white/10 border border-white/15 rounded-2xl p-4 md:p-5">
          <p class="text-xs text-white/80">Berlaku sejak</p>
          <p class="text-lg font-bold">{{ effectiveAt }}</p>
          <p class="text-xs text-white/80 mt-1">Harap dibaca sebelum menggunakan layanan.</p>
        </div>
      </div>
    </div>
  </section>

  <main class="max-w-7xl mx-auto px-6 py-12">
    <div class="grid lg:grid-cols-12 gap-8 items-start">
      <TocSidebar
        :items="toc"
        title="Daftar Isi"
        subtitle="Navigasi cepat bagian ketentuan."
        note-title="Integritas ujian:"
        note-text="Tindakan curang atau gangguan sistem dapat menyebabkan pembatalan hasil dan/atau pembatasan akses."
        note-variant="amber"
      />

      <article class="lg:col-span-8 space-y-6">
        <section class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-lg font-bold text-ink">Ringkasan (mudah dipahami)</h3>
          <div class="mt-4 grid sm:grid-cols-2 gap-4">
            <div class="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="text-xs font-bold text-primary">Akun sah</p>
              <p class="text-sm text-gray-600 mt-1">Gunakan akun Google yang valid untuk login via Firebase.</p>
            </div>
            <div class="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="text-xs font-bold text-primary">Jaga integritas</p>
              <p class="text-sm text-gray-600 mt-1">Dilarang curang, membocorkan soal, atau mengganggu sistem.</p>
            </div>
            <div class="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="text-xs font-bold text-primary">Privasi</p>
              <p class="text-sm text-gray-600 mt-1">Pemrosesan data mengikuti Kebijakan Privasi.</p>
            </div>
            <div class="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="text-xs font-bold text-primary">Transparansi</p>
              <p class="text-sm text-gray-600 mt-1">Perubahan ketentuan akan diumumkan lewat halaman ini.</p>
            </div>
          </div>
        </section>

        <section id="penerimaan" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">1. Penerimaan Ketentuan</h3>
          <p class="text-gray-600 mt-3 leading-relaxed">
            Dengan mengakses atau menggunakan layanan LBA IUQI (TOAFL/TOEFL), Anda menyatakan setuju pada Ketentuan Layanan ini
            serta <NuxtLink class="text-primary font-semibold hover:underline" to="/privacy-policy">Kebijakan Privasi</NuxtLink>.
          </p>
        </section>

        <section id="akun" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">2. Kelayakan & Akun</h3>
          <ul class="mt-3 text-gray-600 list-disc pl-5 space-y-2">
            <li>Gunakan akun yang sah dan dapat dipertanggungjawabkan.</li>
            <li>Login menggunakan Google melalui Firebase Authentication. Anda bertanggung jawab menjaga keamanan perangkat dan sesi Anda.</li>
            <li>Kami dapat menonaktifkan akses jika terdapat indikasi pelanggaran atau penyalahgunaan.</li>
          </ul>
        </section>

        <section id="integritas" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">3. Aturan Ujian & Integritas</h3>
          <ul class="mt-3 text-gray-600 list-disc pl-5 space-y-2">
            <li>Dilarang melakukan kecurangan, manipulasi sistem, atau tindakan yang mengganggu pelaksanaan ujian.</li>
            <li>Dilarang membagikan soal/isi ujian secara tidak sah.</li>
            <li>Aktivitas dapat dicatat untuk tujuan keamanan, audit, dan penegakan integritas.</li>
            <li>Hasil ujian dapat dibatalkan bila terbukti terjadi pelanggaran.</li>
          </ul>

          <div class="mt-5 p-5 rounded-2xl bg-primary/5 border border-primary/15">
            <p class="text-sm text-gray-700">
              <span class="font-semibold text-primary">Prinsip:</span>
              Kami menjaga keadilan bagi seluruh peserta.
            </p>
          </div>
        </section>

        <section id="larangan" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">4. Penggunaan yang Dilarang</h3>
          <ul class="mt-3 text-gray-600 list-disc pl-5 space-y-2">
            <li>Mengakses sistem tanpa otorisasi atau mencoba mengeksploitasi celah keamanan.</li>
            <li>Scraping berlebihan, spam, atau aktivitas yang membebani server.</li>
            <li>Mengunggah/menyisipkan konten berbahaya (malware, script berbahaya) atau melanggar hukum.</li>
            <li>Mengganggu layanan atau pengguna lain.</li>
          </ul>
        </section>

        <section id="ketersediaan" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">5. Ketersediaan Layanan</h3>
          <p class="text-gray-600 mt-3 leading-relaxed">
            Kami berupaya menjaga layanan tetap tersedia, namun tidak menjamin layanan bebas gangguan.
            Pemeliharaan sistem atau gangguan jaringan dapat menyebabkan layanan tidak dapat diakses sementara.
          </p>
        </section>

        <section id="ip" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">6. Hak Kekayaan Intelektual</h3>
          <p class="text-gray-600 mt-3 leading-relaxed">
            Konten, sistem, desain, dan materi ujian (jika berlaku) dilindungi oleh hukum yang berlaku.
            Pengguna tidak diperkenankan menyalin atau mendistribusikan materi tanpa izin.
          </p>
        </section>

        <section id="privasi" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">7. Privasi</h3>
          <p class="text-gray-600 mt-3 leading-relaxed">
            Pemrosesan data pengguna dilakukan sesuai
            <NuxtLink class="text-primary font-semibold hover:underline" to="/privacy-policy">Kebijakan Privasi</NuxtLink>.
            Kami tidak meminta atau menyimpan kata sandi Google Anda.
          </p>
        </section>

        <section id="hapus" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">8. Penghapusan Akun & Data</h3>
          <p class="text-gray-600 mt-3 leading-relaxed">
            Anda dapat mengajukan permintaan penghapusan akun/data melalui email admin.
            Sebagian data dapat dipertahankan untuk tujuan administratif/akademik atau kewajiban hukum.
          </p>
        </section>

        <section id="tanggungjawab" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">9. Pembatasan Tanggung Jawab</h3>
          <p class="text-gray-600 mt-3 leading-relaxed">
            Sejauh diizinkan hukum yang berlaku, LBA IUQI tidak bertanggung jawab atas kerugian tidak langsung/insidental
            yang timbul dari penggunaan layanan.
          </p>
        </section>

        <section id="perubahan" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">10. Perubahan Ketentuan</h3>
          <p class="text-gray-600 mt-3 leading-relaxed">
            Kami dapat memperbarui Ketentuan Layanan ini dari waktu ke waktu. Versi terbaru akan dipublikasikan pada halaman ini.
          </p>
        </section>

        <section id="kontak" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">11. Kontak</h3>
          <div class="mt-4 grid sm:grid-cols-2 gap-4">
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="text-xs font-bold text-primary">EMAIL</p>
              <p class="font-semibold text-ink mt-1">admin@lbaiuqi.com</p>
              <a href="mailto:admin@lbaiuqi.com" class="text-sm text-primary font-semibold hover:underline mt-2 inline-block">
                Kirim email
              </a>
            </div>
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="text-xs font-bold text-primary">DOKUMEN TERKAIT</p>
              <p class="text-sm text-gray-600 mt-1">Kebijakan pengolahan data & privasi.</p>
              <NuxtLink to="/privacy-policy" class="text-sm text-primary font-semibold hover:underline mt-2 inline-block">
                Baca Kebijakan Privasi
              </NuxtLink>
            </div>
          </div>
        </section>

        <div class="flex items-center justify-between gap-4 pt-2">
          <NuxtLink to="/" class="text-sm font-semibold text-primary hover:underline">← Kembali ke Beranda</NuxtLink>
          <a href="#top" class="text-sm font-semibold text-gray-600 hover:text-primary">Ke atas ↑</a>
        </div>
      </article>
    </div>
  </main>
</template>
