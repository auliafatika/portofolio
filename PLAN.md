# Rencana Desain & Implementasi — Portofolio Aulia Fatika Rahmadani

Status: **rencana, belum diimplementasikan**.
Source of truth visual: [`docs/DESIGN.md`](docs/DESIGN.md) + token yang sudah ada di `src/index.css` (`@theme static`).
Konten: [`docs/CV-AULIA-FATIKA-RAHMADANI-2026.pdf`](docs/CV-AULIA-FATIKA-RAHMADANI-2026.pdf).

Semua warna, font, ukuran, jarak, dan radius di dokumen ini **berasal dari DESIGN.md**. Tidak ada token baru. Turunan warna (alpha, garis tipis) harus ditulis sebagai `color-mix()` / opacity dari token yang ada, bukan hex baru.

---

## 1. Ringkasan brief & grounding

| Aspek | Keputusan |
| --- | --- |
| Subjek | Portofolio personal Aulia Fatika Rahmadani, UI/UX designer fresher dengan pengalaman internship dan kompetisi. |
| Audiens | Recruiter, design lead, dan klien yang menilai **cara berpikir**, bukan hanya hasil akhir. |
| Job utama | Mengubah bukti kerja (4 proyek, internship, design system) jadi argumen yang bisa dipindai dalam 30 detik, lalu mendalam saat dibuka. |
| Metafora | "Pemetaan spasial pikiran seorang designer" — adaptasi langsung dari konsep *spatial mapping of artificial consciousness* di DESIGN.md. Portofolio dibaca seperti **atlas/topologi kerja**, bukan galeri kartu. |
| Focal object | Hero: nama + potret yang diperlakukan seperti **spesimen teknis** (bidik sudut, garis koordinat, lat/lon Semarang), bukan avatar bulat. |

Kenapa ini bukan sekadar galeri: 4 proyek dari CV semuanya punya proses (research, IA, design system, lo-fi/hi-fi, prototyping). Menampilkan prosesnya adalah diferensiasi utama dibanding portofolio visual-only.

---

## 2. DESIGN PLAN (pass 1)

### 2.1 Warna — token dari DESIGN.md

| Token | Hex | Peran |
| --- | --- | --- |
| `primary` / `accent` | `#0A1FDB` | Satu-satunya aksen. Fokus, crosshair, status aktif, garis bidik hero, hover intensif. Dipakai secara **sengaja jarang**. |
| `secondary` | `#111111` | Teks tampilan kuat, tombol utama invers, blok gelap kecil. |
| `canvas` (background) | `#F4F4F0` | Permukaan halaman. Hangat, bukan putih bersih. |
| `surface` | `#555555` | Panel bersarang, footer, area data. Teks di atasnya harus `canvas`, bukan `ink`. |
| `ink` (text-primary) | `#111827` | Teks utama di atas `canvas`. |
| `ink-muted` (text-secondary) | `#4B5563` | Teks pendukung, metadata, kapasitas rendah. |
| `line` (border) | `#555555` | Garis 1px, pembatas tabel, pinggir kartu. |

Aturan kontras:
- `ink` di `canvas` → teks utama. `ink-muted` di `canvas` → metadata, **jangan** untuk paragraph panjang.
- `canvas` di `primary` → tombol utama. `canvas` di `surface` → panel gelap.
- `primary` di `canvas` dipakai untuk garis/label kecil; untuk teks biasa gunakan `secondary` atau `ink`.
- Fokus tidak boleh hanya mengandalkan warna: pasangkan ring `primary` **+** perubahan ketebalan/offset.

### 2.2 Tipografi

| Peran | Font | Spesifikasi DESIGN.md |
| --- | --- | --- |
| Display | Inter | 64px / 500 / line-height 1.04 / letter-spacing 0. Dipakai untuk nama dan judul section utama. |
| Body | JetBrains Mono | 16px / 400 / line-height 1.6. Semua paragraph. |
| Label teknis | JetBrains Mono | 12px / 600 / line-height 1.2. Koordinat, status, kategori, metadata — **bukan** untuk "eyebrow dekoratif" di atas setiap heading. |

Aturan:
- Panjang baris maksimal ~70–80 karakter; batasi paragraph dengan `max-w-*`.
- `text-wrap: balance` pada judul, `text-pretty` pada subjudul.
- Angka (GPA, timeline, jumlah halaman) pakai `font-variant-numeric: tabular-nums`.
- Hindari: satu kata di-highlight di tengah judul, ALL-CAPS dekoratif, ellipse `...`, panah `→` di ujung link.
- `Inter` dan `JetBrains Mono` sudah di-load di `index.html` (Google Fonts, `display=swap`) — pastikan `preconnect` tetap ada.

### 2.3 Layout — konsep "atlas kerja"

Desktop: **rail kiri tetap** sebagai indeks spasial + kolom konten utama yang padat. Rail bukan dekorasi — ia menunjukkan posisi pembaca di atlas dan jadi navigasi anchor yang selalu terlihat. Konten utama memakai grid 12 kolom dengan blok data bersarang (nested surfaces) khas Synapse.

```
DESKTOP (≥1280px) — HERO
┌──────────────┬───────────────────────────────────────────────────────────┐
│ RAIL         │                                                           │
│              │  LAT -7.0  LON 110.4        SYS/READY  ●                  │
│ profil       │  ┌──────────────────────┐   ┌───────────────────────────┐ │
│ proyek  ●    │  │                      │   │ AULIA FATIKA RAHMADANI    │ │
│ proses       │  │   [POTRET/spesimen]  │   │ 64px / Inter / 500        │ │
│ kontak       │  │   + garis bidik biru │   │                           │ │
│              │  │   + koordinat        │   │ UI/UX DESIGNER            │ │
│ (mono 12px)  │  └──────────────────────┘   │ “Memetakan pengalaman,    │ │
│              │                             │  bukan sekadar layar.”    │ │
│              │                             │ [Kenali aku lebih jauh]   │ │
│              │                             └───────────────────────────┘ │
│              │  ── garis 1px #555 ─────────────────────────────────────  │
│              │  Ringkasan sistem  [50+ halaman] │ [5 klien] │ [4 studi] │
└──────────────┴───────────────────────────────────────────────────────────┘
        ↑ rail melekat (sticky), konten tidak center-aligned — rata kiri

DESKTOP — PROFIL (state awal → setelah CTA)
┌──────────────┬───────────────────────────────────────────────────────────┐
│ RAIL         │ Profil    catatan 001                    [Tutup]          │
│ profil ●     │ ┌───────────────┬───────────────────────────────────────┐ │
│ proyek       │ │ [foto kedua / │ Deskripsi lanjutan (2–3 paragraph).   │ │
│ proses       │ │  crop lain]   │ Work experience → Skills & tools →   │ │
│ kontak       │ │               │ Education, disusun sebagai baris data │ │
│              │ └───────────────┴───────────────────────────────────────┘ │
│              │   Pengalaman: [Techarea | Jul–Des 2025 | Intern]         │
│              │   Skills: [Research] [User Flow] [Lo-Fi/Hi-Fi] ...       │
│              │   Tools: [Figma] [FigJam] [OpenCode] ...                 │
└──────────────┴───────────────────────────────────────────────────────────┘

DESKTOP — PROYEK (grid asimetris, card radius 1px)
┌──────────────┬───────────────────────────────────────────────────────────┐
│ RAIL         │ Proyek    4 studi kasus                                   │
│ proyek ●     │ ┌───────────────────────┐ ┌─────────────────────────────┐ │
│              │ │ [SHOWCASE KOLABORASI] │ │ [SHOWCASE JOYNEST]          │ │
│              │ │ span-2 (featured)     │ │                             │ │
│              │ │ KOLABORASI            │ │ Joynest                     │ │
│              │ │ deskripsi 1–2 baris   │ │ deskripsi 1–2 baris         │ │
│              │ │ [Web] [Redesign]      │ │ [Mobile] [Kesehatan]        │ │
│              │ └───────────────────────┘ └─────────────────────────────┘ │
│              │ ┌───────────────────────┐ ┌─────────────────────────────┐ │
│              │ │ [SHOWCASE PANTASISWA] │ │ [SHOWCASE SIRATA]           │ │
│              │ └───────────────────────┘ └─────────────────────────────┘ │
└──────────────┴───────────────────────────────────────────────────────────┘

MOBILE (≤640px) — rail berubah jadi header tipis + nav horizontal; stack 1 kolom
┌─────────────────────────┐
│ AFR / SYS ●   [≡ profil]│  ← sticky header, tinggi ≤56px
├─────────────────────────┤
│ [POTRET + koordinat]    │
│ AULIA FATIKA RAHMADANI  │  ← 40–48px,Inter 500, rata kiri
│ UI/UX DESIGNER          │
│ deskripsi pendek        │
│ [Kenali aku lebih jauh] │
├─────────────────────────┤
│ Proyek                  │
│ ┌─────────────────────┐ │
│ │ [showcase]          │ │
│ │ Judul               │ │
│ │ [badge] [badge]     │ │
│ └─────────────────────┘ │
│ ... 3 card berikutnya  │
├─────────────────────────┤
│ Kontak (sticky bawah)   │
│ Email  LinkedIn  Behance  Dribbble │
└─────────────────────────┘
```

Alignment: **rata kiri** di semua sections. Tidak ada centered hero, tidak ada text-center card. Grid mengikuti ritme 8px; jarak antar blok 16px; padding kartu 24px; padding section 80px (48px di mobile).

### 2.4 Principles

1. **Satu titik berani:** hero. Di situ saja bidikan biru, koordinat, dan tipografi besar dipakai penuh; sisanya tenang dan disiplin.
2. **Garis adalah informasi:** border 1px `line`, garis bidik, dan rail tidak dekoratif — mereka memisahkan record, menunjukkan posisi, dan membuat densitas tetap terbaca.
3. **Proses > pixel:** setiap project card adalah pintu masuk ke case file; tampilan akhir hanya 20% dari cerita.
4. **Mono untuk data, Inter untuk cerita:** JetBrains Mono hanya pada metadata teknis sesuai DESIGN.md; paragraph dan judul tetap Inter/body yang manusiawi.
5. **Radius satu bahasa:** kartu/badge 1px, kontrol 8px, pill 9999px — tidak ada pengecualian.

---

## 3. PASS 2 — review terhadap brief & revisi

Saya uji apakah rencana di atas jadi default generik kalau briefnya diganti topik lain. Hasilnya:

| Kecenderungan default AI | Status | Alasan / revisi |
| --- | --- | --- |
| Cream hangat + serif tinggi + aksen terracotta | Ditolak | Brief mengunci palet biru `#0A1FDB` + background `#F4F4F0`. Tidak ada ruang untuk terracotta. |
| Near-black + acid green / vermilion | Ditolak | Bertentangan dengan background terang dan primary biru di DESIGN.md. |
| Broadsheet hairline + kolom koran | Ditolak sebagian | Kita pakai hairline & densitas, tapi strukturnya **nested operational panels**, bukan koran. Beda: panel data, bukan kolom berita. |
| SaaS card kit: kartu oval seragam, shadow abu-abu lembut, gradient wash | Ditolak | DESIGN.md menetapkan radius **1px**, shadow depth mengikuti HTML, dan guardrails melarang flat card grid. Grid dibuat asimetris dengan satu featured span-2. |
| ALL-CAPS eyebrow di atas setiap heading | Ditolak | Label mono hanya untuk metadata teknis (koordinat, status, kategori), bukan dekorasi heading. |
| Meta string pakai middle dot (`A · B · C`) | Ditolak | Dipisah jadi badge/key-value dengan garis vertikal. CV dipakai sebagai data, bukan string hiasan. |
| Pola "WORD — fragment" | Ditolak | Judul ditulis kalimat utuh, mis. "Cara saya memetakan masalah". |
| Mono untuk semua label kecil | Dibatasi | DESIGN.md memang minta mono untuk label/teknis, jadi dipakai — tapi hanya di record metadata, bukan di seluruh UI. |
| Panah `→` di ujung semua link | Ditolak | CTA pakai kata kerja eksplisit: "Kenali aku lebih jauh", "Buka studi kasus". |
| Stagger reveal di setiap section | Ditolak | Satu orchestrated moment di hero saja; section lain memakai reveal sekali saat masuk viewport, itupun opsional dan halus. |
| Data hero berupa "angka besar + label kecil + gradient" | Ditolak | Focal object-nya potret-spesimen + koordinat, bukan metrik. Angka (50+ halaman) jadi strip pendukung di bawah. |

Kesimpulan revisi: yang tersisa benar-benar turunan dari Synapse — sistem koordinat, panel bersarang, densitas operasional, biru yang hemat — bukan dari templat portofolio umum.

---

## 4. Arsitektur halaman & interaksi

### 4.1 Hero
- First viewport signal: nama besar + potret berspesian + status `SYS/READY` + koordinat Semarang.
- Headline menggantikan "Mapping the Mind" → **"Memetakan pengalaman, bukan sekadar layar."** (kalimat utuh, tanpa highlight sebagian kata).
- CTA: tombol primary `Kenali aku lebih jauh` (label ini **tetap dipertahankan** karena diminta eksplisit, meski bukan second person).
- Strip bawah hero: tiga sel `50+ halaman`, `5 klien aktif`, `4 studi kasus`, dipisah garis vertikal 1px — bukan satu string dengan middle dot.

### 4.2 Profil — keputusan: **expand inline**, bukan modal/route baru
- Tombol hero men-toggle panel profil di bawah hero dengan `aria-expanded` / `aria-controls`.
- Alasan: menjaga ritme satu halaman dan metafora atlas; tidak memutus konteks; tidak perlu focus trap tambahan.
- Konten panel: foto (crop berbeda dari hero), deskripsi lanjutan, **work experience**, **skills & tools**, **education** — sesuai urutan permintaan.
- Data dibaca dari CV: internship Techarea (Jul–Des 2025), 50+ halaman, design system, 5 klien; skills & tools; Pendidikan D4 Polines GPA 3.81.
- URL state: `#profil` via `history.replaceState` saat dibuka, supaya bisa deep-link. `scroll-margin-top` pada anchor.

### 4.3 Proyek — 4 card asimetris
Card = `<a href="?project=slug">` (bukan `<div onClick>`), berisi: gambar showcase (dengan `width`/`height` eksplisit), judul, deskripsi 1–2 baris, dan badge kategori.

| Slug | Judul | Badge |
| --- | --- | --- |
| `kolaborasi` | KOLABORASI | `Web`, `Redesign` |
| `joynest` | Joynest | `Mobile`, `Kesehatan` |
| `pantausiswa` | Pantausiswa | `Mobile`, `Pendidikan` |
| `sirata` | SIRATA | `Sistem`, `Administrasi` |

- `kolaborasi` jadi featured (span 2 kolom di desktop) karena paling baru dan paling relevan untuk recruiter.
- Badge memakai `rounded-pill` (9999px), kartu memakai `rounded-card` (1px) — sesuai DESIGN.md.

### 4.4 Detail proyek — keputusan: **native `<dialog>` full-screen sheet + URL `?project=slug`**
- Alasan: `showModal()` memberi focus trap, penutupan dengan Esc, dan inert background secara native; query param membuat tiap studi kasus bisa di-link langsung.
- Saat dibuka: simpan elemen pemicu, `dialog.showModal()`, focus ke heading. Saat ditutup: kembalikan focus ke card pemicu dan hapus query param.
- Field wajib (semua dari permintaan user):
  1. Deskripsi proyek
  2. Timeline
  3. Role
  4. Project overview
  5. Tools yang dipakai
  6. Problem
  7. Riset & cara menyelesaikan problem
  8. Design process — **Urutan ini wajib**: IA → Design System → Lo-fi → Hi-fi → Prototyping
  9. Apa yang dipelajari
- Presentasi: metadata (timeline/role/tools) sebagai `<dl>`; design process sebagai **stepped track bernomor** — ini memang sebuah urutan, jadi numbered marker di sini sah (bedakan dengan nomer dekoratif di section).
- Isi detail belum ada di CV secara eksplisit → plan mengasumsikan konten akan ditambahkan; tandai sebagai `TODO konten` di data, jangan mengarang hasil riset.

### 4.5 Kontak — selalu tersedia
- Duplikat, bukan pilihan: **sticky bottom bar** (ringkas, 4 tautan) + **section kontak penuh** di akhir halaman.
- Email: `mailto:auliafatika@outlook.com`.
- LinkedIn: `https://linkedin.com/in/auliafatika`.
- Behance & Dribbble: **belum ada di CV** → siapkan placeholder dengan label dan `href="#"` sambil menunggu URL asli; jangan mengarang akun.
- Semua tautan eksternal: `target="_blank"` + `rel="noopener noreferrer"` + teks label terlihat (bukan ikon saja). Ikon diberi `aria-hidden="true"`.
- Sticky bar diberi `padding-bottom`/`scroll-padding-bottom` agar tidak menutup elemen yang sedang di-focus.

---

## 5. Motion spec

| Interaksi | Animasi | Durasi / easing | Catatan |
| --- | --- | --- | --- |
| Page load | Masked reveal nama + stagger 3 baris metadata | 500–700ms, `cubic-bezier(.2,.7,.2,1)` | **Satu** orchestrated moment; tidak diulang di section lain. |
| Hero potret | Garis bidik biru `scaleX/scaleY` dari 0 → 1 | 600ms, ease-out | `transform-origin` ditentukan eksplisit; `aria-hidden`. |
| Card proyek | `translateY(-4px)` + border `primary` + shadow depth | 180ms | Hanya `transform`/`border-color`/`box-shadow`; tidak `transition: all`. |
| Expand profil | Konten `opacity` + `translateY(-8px → 0)` | 300ms | Tinggi container pakai `interpolate-size: allow-keywords` bila didukung; fallback langsung. |
| Buka/tutup dialog | Sheet `translateY(16px → 0)` + backdrop `opacity` | 260ms | Transisi dipotong bila user menekan Esc / klik backdrop. |
| Scroll reveal (opsional) | `opacity` + `translateY(12px → 0)` sekali | 400ms | IntersectionObserver, `once: true`; mati total saat reduced motion aktif. |
| Ambient | Grid koordinat bergerak sangat lambat di belakang hero | ≥20s loop | `aria-hidden`, di belakang konten, `pointer-events-none`, mati saat reduced motion aktif. |

Aturan keras:
- Animasikan hanya `transform` dan `opacity` (pengecualian: `border-color`/`box-shadow` untuk hover, `backdrop-opacity`).
- Semua animasi interruptible; tidak ada autoplay >5 detik yang tidak bisa dihentikan.
- `@media (prefers-reduced-motion: reduce)`: non-esensial di-set `animation: none; transition: none;` dan semua elemen langsung di state akhir.
- Fokus tetap terlihat saat animasi berjalan.

---

## 6. Aksesibilitas — WCAG 2.2 AA + Web Interface Guidelines

Wajib sejak awal:
- `index.html`: `lang="id"`, `<meta name="theme-color">` sudah sesuai `canvas`, judul halaman deskriptif, skip link ke `#main`.
- Landmark: `<header>`, `<main id="main">`, `<nav aria-label="Navigasi bagian">`, `<footer>`.
- Heading hierarkis: satu `<h1>` (nama/hero), `<h2>` per section, `<h3>` per judul proyek. Tidak ada lompat level.
- `scroll-margin-top` pada semua anchor heading/section.
- Gambar: potret dan 4 showcase memakai `alt` deskriptif; garis bidik/grid/ikon dekoratif `aria-hidden="true"` atau `alt=""`.
- `<img>` punya `width` & `height` eksplisit; showcase di bawah fold `loading="lazy"`; potret hero `fetchpriority="high"`.
- Semua kontrol interaktif: `<button>` untuk aksi (CTA, toggle), `<a>` untuk navigasi (card, social). Tidak ada `<div onClick>`.
- Ikon-only (jika ada): `aria-label`. Ikon dekoratif: `aria-hidden`.
- `focus-visible:ring-2 ring-primary ring-offset-2` pada semua interaktif; tidak pernah `outline-none` tanpa pengganti. Hindari ring tertutup sticky header/footer.
- Expand profil: `aria-expanded` + `aria-controls`, konten ditambahkan/dihilangkan dengan benar.
- Dialog: `aria-labelledby`, focus masuk ke heading, focus trap native, Esc menutup, focus kembali ke card. Update async (mis. status kirim) pakai `aria-live="polite"`.
- Target ukuran minimal 24×24 CSS px (AA 2.5.8); spacing antar target cukup.
- Kontras: cek `ink-muted` di `canvas`, `canvas` di `primary`, `canvas` di `surface`; teks tidak boleh bergantung pada warna saja.
- Teks: `…` bukan `...`, curly quotes, `text-wrap: balance`, `tabular-nums` untuk angka, `break-words` untuk konten panjang, `min-w-0` pada flex children.
- `touch-action: manipulation`, `-webkit-tap-highlight-color` diset sengaja, `overscroll-behavior: contain` di dialog.
- Tidak ada `user-scalable=no` / `maximum-scale=1`, tidak ada `transition: all`, tidak ada `autoFocus` tanpa alasan.
- Dukung empty state: bila data proyek kosong, tampilkan pesan "Proyek belum tersedia", bukan grid kosong.
- Form kontak bila ditambahkan: `<label>` terhubung, `type="email"`, `autocomplete`, error inline, tombol submit tetap aktif sampai request mulai.

Perlu verifikasi manual (tidak bisa diasumsikan dari kode):
- Navigasi keyboard penuh: Tab/Shift+Tab, Enter/Space, Esc pada dialog, urutan fokus logis.
- VoiceOver/NVDA: pembacaan heading, alt, `aria-expanded`, dan dialog.
- Reduced motion aktif: tidak ada sisa transform/animasi.
- Zoom 200% dan viewport 320px: tidak ada horizontal scroll; sticky footer tidak menimpa konten.
- Kontras aktual dengan kontrast checker.

---

## 7. Konten & copy

- Active voice, second person, kalimat utuh, sentence case. Judul tombol menyebut hasil: "Buka studi kasus", bukan "Lihat detail".
- Contoh copy (Bahasa Indonesia):
  - Hero: "Memetakan pengalaman, bukan sekadar layar."
  - Deskripsi pendek: "Aulia, UI/UX designer yang mengubah riset dan alur menjadi antarmuka yang mudah dipakai."
  - Profil: "Cara saya memetakan masalah"
  - Proyek: "Studi kasus terpilih"
  - Detail: "Dari pertanyaan ke prototipe"
  - Kontak: "Mari bicara soal proyek Anda"
- Kecuali label CTA hero yang diminta user persis ("Kenali aku lebih jauh"), copy di atas bisa disesuaikan saat implementasi.
- Data CV dipakai apa adanya; jangan menambah klaim (mis. "menaikkan konversi 40%") tanpa bukti.

---

## 8. Data model & struktur file

```ts
// src/types.ts (shapes, bukan implementasi)
type Project = {
  slug: string
  title: string
  summary: string
  showcase: { src: string; alt: string; width: number; height: number }
  categories: string[]
  featured?: boolean
  detail: {
    description: string
    timeline: string
    role: string
    overview: string
    tools: string[]
    problem: string
    researchAndSolution: string
    process: {
      ia: string
      designSystem: string
      loFi: string
      hiFi: string
      prototyping: string
    }
    learnings: string
  }
}

type Experience = { company: string; role: string; period: string; highlights: string[] }
type Profile = {
  name: string
  role: string
  location: string
  photo: { src: string; alt: string; width: number; height: number }
  intro: string
  bio: string[]
  experiences: Experience[]
  skills: { design: string[]; soft: string[] }
  tools: string[]
  education: { school: string; degree: string; gpa: string }
  contact: {
    email: string
    linkedin: string
    behance: string | null
    dribbble: string | null
  }
}
```

Struktur yang disarankan:

```
src/
  main.tsx
  App.tsx
  index.css              # token @theme static (sudah ada)
  types.ts
  data/portfolio.ts      # satu sumber data profil + 4 proyek
  components/
    SkipLink.tsx
    SectionRail.tsx
    Hero.tsx
    ProfilePanel.tsx
    ProjectCard.tsx
    ProjectGrid.tsx
    ProjectDialog.tsx
    ContactBar.tsx
    ContactSection.tsx
  hooks/
    useProjectDialog.ts  # sinkronisasi ?project=slug + fokus
```

Aset yang harus disiapkan:
- 1 foto profil utama (hero) + 1 crop/sudut berbeda (panel profil).
- 4 gambar showcase (KOLABORASI, Joynest, Pantausiswa, SIRATA).
- Ikon email/LinkedIn/Behance/Dribbble (inline SVG, `aria-hidden`).
- Simpan di `public/images/`; beri nama file deskriptif. Jika belum ada, pakai placeholder yang jelas bertanda `TODO` — jangan gambar acak dari internet.

---

## 9. Implementasi bertahap & definition of done

| Phase | Hasil |
| --- | --- |
| 1 — Working outline | Audit token (sudah ada), data `profile` + 4 project, hero statis, rail, section skeleton. Bisa dijalankan & build. |
| 2 — Structure | Expand profil, grid proyek asimetris, dialog detail dengan semua field, sticky contact bar. Navigasi keyboard berfungsi. |
| 3 — Detail & motion | Responsive 320→1440, motion spec, copy pass, gambar final, badge kategori, featured card. |
| 4 — Accessibility & polish | Checklist WCAG + Web Interface Guidelines, reduced motion, kontras, focus, empty state, lalu review akhir. |

Definition of done:
- `npm run build` lolos tanpa error TypeScript.
- Semua 4 proyek bisa dibuka lewat URL `?project=slug` langsung.
- CTA hero membuka panel profil lewat keyboard dan mouse.
- Semua 4 tautan kontak bisa diklik (Behance/Dribbble setelah URL dikonfirmasi).
- Tidak ada horizontal scroll di 320px; focus terlihat; reduced motion dihormati.
- Tidak ada token visual baru di luar DESIGN.md.

Verifikasi:
```powershell
npm run build
npm run dev
# manual: Tab/Shift+Tab, Enter, Esc, zoom 200%, prefers-reduced-motion
```

---

## 10. Open questions

1. URL Behance dan Dribbble yang asli apa? (Belum ada di CV; saat ini disiapkan placeholder.)
2. Apakah foto profil dan 4 gambar showcase sudah tersedia, atau perlu dibuat placeholder dulu?
3. Email kontak pakai mana: `auliafatika@outlook.com` (di CV) atau `fafatika22@gmail.com` (di git config)?
4. Apakah 4 proyek di CV sudah final, dan KOLABORASI boleh jadi featured card?
5. Sticky contact bar di bawah layar boleh, atau kontak cukup hanya di akhir halaman?
