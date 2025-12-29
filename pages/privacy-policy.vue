<script setup lang="ts">
useSeoMeta({
  title: 'Kebijakan Privasi — LBA IUQI',
  ogTitle: 'Kebijakan Privasi — LBA IUQI',
  description: 'Kebijakan Privasi LBA IUQI untuk layanan TOAFL & TOEFL berbasis web.',
  ogDescription: 'Kebijakan Privasi LBA IUQI untuk layanan TOAFL & TOEFL berbasis web.'
})

const updatedAt = computed(() => {
  const d = new Date()
  const months = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
})

const toc = [
  { href: '#ringkasan', label: '1. Ringkasan' },
  { href: '#data', label: '2. Data yang Kami Kumpulkan' },
  { href: '#tujuan', label: '3. Tujuan Penggunaan Data' },
  { href: '#dasar', label: '4. Dasar Pemrosesan' },
  { href: '#pihak-ketiga', label: '5. Pihak Ketiga' },
  { href: '#retensi', label: '6. Retensi Data' },
  { href: '#keamanan', label: '7. Keamanan' },
  { href: '#hak', label: '8. Hak Pengguna' },
  { href: '#perubahan', label: '9. Perubahan Kebijakan' },
  { href: '#kontak', label: '10. Kontak' }
]
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
            Dokumen Resmi
            <span class="w-1.5 h-1.5 rounded-full bg-accent"></span>
            Privasi & Perlindungan Data
          </p>
          <h2 class="text-3xl md:text-4xl font-extrabold mt-4">Kebijakan Privasi</h2>
          <p class="text-white/90 mt-2 max-w-2xl">
            Penjelasan transparan tentang data yang diproses, tujuan pemrosesan, dan langkah perlindungan—
            termasuk autentikasi Google via Firebase Authentication.
          </p>
        </div>

        <div class="bg-white/10 border border-white/15 rounded-2xl p-4 md:p-5">
          <p class="text-xs text-white/80">Terakhir diperbarui</p>
          <p class="text-lg font-bold">{{ updatedAt }}</p>
          <p class="text-xs text-white/80 mt-1">Versi terbaru selalu tersedia di halaman ini.</p>
        </div>
      </div>
    </div>
  </section>

  <main class="max-w-7xl mx-auto px-6 py-12">
    <div class="grid lg:grid-cols-12 gap-8 items-start">
      <TocSidebar
        :items="toc"
        title="Daftar Isi"
        subtitle="Navigasi cepat bagian privasi."
        note-title="Catatan penting:"
        note-text="Kami tidak meminta dan tidak menyimpan kata sandi Google Anda. Login dilakukan melalui Google/Firebase."
        note-variant="primary"
      />

      <article class="lg:col-span-8 space-y-6">
        <!-- Summary grid -->
        <section class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-lg font-bold text-ink">Ringkasan (mudah dipahami)</h3>
          <div class="mt-4 grid sm:grid-cols-2 gap-4">
            <div class="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="text-xs font-bold text-primary">DATA MINIMAL</p>
              <p class="text-sm text-gray-600 mt-1">Data diproses seperlunya untuk autentikasi & layanan ujian.</p>
            </div>
            <div class="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="text-xs font-bold text-primary">GOOGLE SIGN-IN</p>
              <p class="text-sm text-gray-600 mt-1">Kami tidak pernah meminta kata sandi Google Anda.</p>
            </div>
            <div class="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="text-xs font-bold text-primary">KEAMANAN</p>
              <p class="text-sm text-gray-600 mt-1">Kontrol akses, audit wajar, minimasi data.</p>
            </div>
            <div class="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="text-xs font-bold text-primary">HAK PENGGUNA</p>
              <p class="text-sm text-gray-600 mt-1">Anda dapat meminta akses/koreksi/penghapusan data tertentu.</p>
            </div>
          </div>
        </section>

        <section id="ringkasan" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">1. Ringkasan</h3>
          <p class="text-gray-600 mt-3 leading-relaxed">
            Kebijakan Privasi ini menjelaskan bagaimana LBA IUQI (“kami”) mengumpulkan, menggunakan, menyimpan,
            dan melindungi informasi ketika Anda menggunakan layanan berbasis web kami (TOAFL/TOEFL).
          </p>
        </section>

        <section id="data" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">2. Data yang Kami Kumpulkan</h3>

          <div class="mt-4 grid gap-4">
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="font-semibold text-ink">2.1 Data akun (Google Sign-In via Firebase)</p>
                  <p class="text-sm text-gray-600 mt-2">
                    Saat Anda masuk menggunakan Google, kami dapat menerima informasi dasar profil yang disediakan oleh Google/Firebase,
                    seperti: <strong>nama</strong>, <strong>alamat email</strong>, <strong>UID Firebase</strong>, dan <strong>foto profil</strong> (jika tersedia).
                  </p>
                </div>
                <span class="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/15">
                  Auth
                </span>
              </div>

              <div class="mt-4 p-4 rounded-xl bg-white border border-gray-100">
                <p class="text-sm text-gray-700">
                  <span class="font-semibold text-primary">Tidak ada password Google</span> yang diminta/disimpan oleh layanan.
                </p>
              </div>
            </div>

            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="font-semibold text-ink">2.2 Data layanan ujian</p>
                  <ul class="text-sm text-gray-600 mt-2 list-disc pl-5 space-y-1">
                    <li>Data partisipasi ujian (jenis ujian, jadwal jika diterapkan).</li>
                    <li>Aktivitas ujian (jawaban, waktu pengerjaan, skor, status sesuai kebijakan).</li>
                    <li>Catatan administrasi (verifikasi, koreksi, bantuan layanan).</li>
                  </ul>
                </div>
                <span class="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                  Ujian
                </span>
              </div>
            </div>

            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="font-semibold text-ink">2.3 Data teknis & keamanan</p>
                  <ul class="text-sm text-gray-600 mt-2 list-disc pl-5 space-y-1">
                    <li>Log keamanan terbatas (mis. user-agent, timestamp, indikasi penyalahgunaan).</li>
                    <li>Cookie/penyimpanan lokal untuk menjaga sesi login & preferensi (bila digunakan).</li>
                  </ul>
                </div>
                <span class="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-50 text-slate-700 border border-slate-100">
                  Security
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="tujuan" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">3. Tujuan Penggunaan Data</h3>
          <ul class="mt-3 text-gray-600 list-disc pl-5 space-y-2">
            <li>Menyediakan autentikasi dan akses pengguna (Google Sign-In via Firebase).</li>
            <li>Mengelola proses ujian, penilaian, dan rekap hasil.</li>
            <li>Menjaga keamanan sistem (pencegahan akses tidak sah, audit, deteksi penyalahgunaan).</li>
            <li>Komunikasi layanan (pemberitahuan administratif terkait ujian).</li>
            <li>Pemenuhan kebutuhan administratif/akademik yang relevan.</li>
          </ul>
        </section>

        <section id="dasar" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">4. Dasar Pemrosesan</h3>
          <p class="text-gray-600 mt-3 leading-relaxed">
            Kami memproses data berdasarkan kebutuhan penyediaan layanan, kewajiban administratif/akademik yang relevan,
            dan/atau persetujuan pengguna pada fitur tertentu (bila diperlukan).
          </p>
        </section>

        <section id="pihak-ketiga" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">5. Pihak Ketiga</h3>
          <p class="text-gray-600 mt-3">Kami menggunakan layanan pihak ketiga yang diperlukan untuk operasional, termasuk:</p>

          <div class="mt-4 grid sm:grid-cols-2 gap-4">
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="font-semibold text-ink">Google</p>
              <p class="text-sm text-gray-600 mt-1">Penyedia identitas untuk proses login Google Sign-In.</p>
            </div>
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="font-semibold text-ink">Firebase Authentication</p>
              <p class="text-sm text-gray-600 mt-1">Mengelola autentikasi, token, dan sesi login aplikasi.</p>
            </div>
          </div>

          <p class="text-sm text-gray-600 mt-4">
            Penyedia pihak ketiga memiliki kebijakan privasinya masing-masing. Kami hanya menggunakan integrasi yang diperlukan.
          </p>
        </section>

        <section id="retensi" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">6. Retensi Data</h3>
          <p class="text-gray-600 mt-3 leading-relaxed">
            Kami menyimpan data selama diperlukan untuk menjalankan layanan serta tujuan administratif/akademik.
            Sebagian data dapat disimpan lebih lama jika diwajibkan oleh kebijakan institusi atau ketentuan hukum.
          </p>
        </section>

        <section id="keamanan" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">7. Keamanan</h3>

          <div class="mt-4 grid md:grid-cols-2 gap-4">
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="font-semibold text-ink">Perlindungan transmisi</p>
              <p class="text-sm text-gray-600 mt-1">Menggunakan koneksi terenkripsi (HTTPS) untuk komunikasi data.</p>
            </div>
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="font-semibold text-ink">Kontrol akses</p>
              <p class="text-sm text-gray-600 mt-1">Akses dibatasi berbasis peran (admin/peserta) dan kebutuhan.</p>
            </div>
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="font-semibold text-ink">Minimasi data</p>
              <p class="text-sm text-gray-600 mt-1">Mengumpulkan data secukupnya untuk menjalankan layanan.</p>
            </div>
            <div class="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p class="font-semibold text-ink">Audit & pemantauan</p>
              <p class="text-sm text-gray-600 mt-1">Pemantauan wajar untuk pencegahan penyalahgunaan.</p>
            </div>
          </div>

          <div class="mt-5 p-5 rounded-2xl bg-primary/5 border border-primary/15">
            <p class="text-sm text-gray-700">
              <span class="font-semibold text-primary">Pelaporan:</span>
              Jika Anda menemukan masalah keamanan atau kebocoran data, hubungi admin secepatnya melalui email.
            </p>
          </div>
        </section>

        <section id="hak" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">8. Hak Pengguna</h3>
          <p class="text-gray-600 mt-3">Anda dapat mengajukan permintaan untuk:</p>
          <ul class="mt-3 text-gray-600 list-disc pl-5 space-y-2">
            <li>Akses atau koreksi data tertentu.</li>
            <li>Penghapusan akun/data (sebagian data mungkin tetap disimpan untuk kewajiban administratif/akademik).</li>
            <li>Penjelasan terkait pemrosesan data.</li>
          </ul>
        </section>

        <section id="perubahan" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">9. Perubahan Kebijakan</h3>
          <p class="text-gray-600 mt-3 leading-relaxed">
            Kami dapat memperbarui kebijakan ini sewaktu-waktu. Versi terbaru akan ditampilkan pada halaman ini beserta tanggal pembaruan.
          </p>
        </section>

        <section id="kontak" class="bg-white border border-gray-100 rounded-2xl shadow-soft p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink">10. Kontak</h3>
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
              <p class="text-sm text-gray-600 mt-1">Aturan penggunaan layanan & integritas ujian.</p>
              <NuxtLink to="/terms" class="text-sm text-primary font-semibold hover:underline mt-2 inline-block">
                Baca Ketentuan Layanan
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
