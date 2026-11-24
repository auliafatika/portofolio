# Milestones Implementasi — Portofolio Aulia Fatika Rahmadani

Rencana detail: [`PLAN.md`](PLAN.md). Token visual: [`docs/DESIGN.md`](docs/DESIGN.md).
Aturan main: **satu milestone selesai → di-review → baru lanjut**. Setiap milestone harus tetap bisa di-build.

## Peta milestones

| Milestone | Nama | Fokus | Status |
| --- | --- | --- | --- |
| M0 | Baseline | Token, data mentah, fondasi | ✅ Selesai |
| M1 | Working outline | Hero + struktur halaman statis | ✅ Selesai |
| M2 | Interaksi | Expand profil, card, dialog detail | ✅ Selesai |
| M3 | Detail visual & motion | Responsive, animasi, aset final | ⬜ Belum |
| M4 | Accessibility & final | WCAG, polish, rilis | ⬜ Belum |

---

## M0 — Baseline ✅

**Tujuan:** fondasi yang bisa dijalankan dan sumber kebenaran yang jelas.

- [x] Scaffold Vite + React 19 + TypeScript + Tailwind v4
- [x] Token DESIGN.md dipindah ke `@theme static` di `src/index.css`
- [x] `index.html`: font Inter + JetBrains Mono, `lang="id"`, `theme-color`
- [x] Konten diekstrak dari CV (profil, 4 proyek, skills, pendidikan)
- [x] `PLAN.md` dan daftar open question

**Exit criteria:** `npm run build` lolos.
**Cara review:** jalankan `npm run dev` → layar starter masih tampil. Ini baseline, bukan tampilan final.

---

## M1 — Working outline

**Tujuan:** halaman yang sudah bisa dibaca dari atas ke bawah, tanpa interaksi kompleks.

- [x] `src/types.ts` — shape `Profile`, `Experience`, `Project` sesuai PLAN.md
- [x] `src/data/portfolio.ts` — 1 profil + 4 proyek dari CV; field detail diberi `TODO konten` bila belum ada
- [x] `Layout` + `SectionRail` / sticky header, skip link, landmark semantic
- [x] `Hero`: nama besar, potret placeholder, koordinat, status, CTA, strip 3 sel
- [x] `ProfilePanel` state awal (ringkas) + placeholder expansion
- [x] `ProjectGrid` + 4 `ProjectCard` statis dengan judul, deskripsi, badge kategori
- [x] `ContactBar` + `ContactSection` dengan email & LinkedIn aktif, Behance/Dribbble disabled/placeholder

**Exit criteria:** build lolos; semua section terlihat di desktop & mobile 320px; tidak ada horizontal scroll.
**Cara review:** buka `/`, cek first viewport (hero), lalu scroll ke proyek dan kontak.
**Gate:** setujui komposisi & densitas dulu sebelum menambah interaksi.

---

## M2 — Interaksi

**Tujuan:** semua alur yang diminta user bisa diklik dan deep-link.

- [x] CTA `Kenali aku lebih jauh` toggle panel profil: foto, deskripsi lanjutan, work experience, skills & tools, education
- [x] `aria-expanded` / `aria-controls`, sinkron `#profil`
- [x] Card proyek jadi `<a href="?project=slug">`; 4 URL deep-link berfungsi saat dibuka langsung
- [x] `ProjectDialog` (`<dialog>.showModal()`): 9 field detail sesuai urutan user, stepped track design process
- [x] Focus trap native, Esc close, return focus ke card, query param dibersihkan saat tutup
- [x] Fallback bila `?project=` tidak dikenal → tutup dialog, jangan error

**Exit criteria:** build lolos; alur hero → profil → card → detail → tutup bisa dilakukan dengan mouse **dan** keyboard.
**Cara review:** klik CTA, buka salah satu card, tekan Esc, cek fokus kembali ke card yang sama; coba buka `?project=joynest` langsung di tab baru.
**Gate:** setujui perilaku interaksi sebelum motion ditambahkan.

---

## M3 — Detail visual & motion

**Tujuan:** terasa seperti "Synapse", bukan template generik.

- [ ] Grid asimetris: `kolaborasi` featured span-2 di desktop
- [ ] Aset final: foto profil, foto kedua, 4 gambar showcase (dengan `width`/`height` & `alt`)
- [ ] Badge pill (9999px), kartu 1px, kontrol 8px — konsisten
- [ ] Motion spec dari PLAN.md: masked reveal + stagger di hero, hover lift card, transisi expand/dialog, scroll reveal opsional, ambient grid
- [ ] Hanya `transform`/`opacity` (kecuali hover border/shadow); tidak ada `transition: all`
- [ ] Responsive 320 → 1440px; sticky bar tidak menimpa konten yang difokuskan
- [ ] Copy pass: active voice, sentence case, `…`, tanpa middle dot dekoratif

**Exit criteria:** build lolos; sesuai guardrail DESIGN.md (tidak flat card grid, densitas terjaga, satu focal object).
**Cara review:** bandingkan screenshot desktop & mobile; aktifkan/disable reduced motion untuk melihat bedanya.
**Gate:** review visual terakhir sebelum audit aksesibilitas.

---

## M4 — Accessibility & final

**Tujuan:** siap dipakai dan dipublikasikan.

- [ ] Checklist WCAG 2.2 AA + Web Interface Guidelines dari PLAN.md dituntaskan
- [ ] Kontras `ink-muted`/`canvas`, `canvas`/`primary`, `canvas`/`surface` diverifikasi
- [ ] `prefers-reduced-motion`: semua animasi non-esensial mati
- [ ] Keyboard penuh: Tab/Shift+Tab, Enter/Space, Esc; urutan fokus logis; focus-visible terlihat
- [ ] VoiceOver/NVDA spot check untuk heading, alt, `aria-expanded`, dialog
- [ ] Zoom 200% & viewport 320px: tanpa horizontal scroll
- [ ] Empty state proyek & placeholder konten berlabel jelas
- [ ] Tutup 5 open question di PLAN.md (Behance/Dribbble, aset, email, proyek final, sticky bar)
- [ ] `npm run build` final, commit, push ke `origin/main`

**Exit criteria:** semua definition of done di PLAN.md terpenuhi.
**Cara review:** jalankan checklist manual, lalu final sign-off.

---

## Aturan tiap milestone

1. Mulai dari yang bisa dijalankan — tidak boleh ada milestone yang hanya mockup.
2. Token tetap dari DESIGN.md; dilarang menambah hex/font/spacing/radius baru.
3. Konten dari CV; jangan mengarang hasil riset atau metrik.
4. Selesai milestone → minta review → baru lanjut.
5. Tiap milestone diakhiri `npm run build` yang lolos.
