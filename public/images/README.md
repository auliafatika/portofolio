# Image assets

Semua gambar di sini sudah dikonversi ke **WebP** dan dikompresi ke **< 100 KB per file** (total ~2,3 MB, turun ~94% dari sumber ~35 MB). Aplikasi memuat path ini dari `src/data/portfolio.ts`; sebelum file ada, tampilannya memakai placeholder bertanda `TODO`.

Ukuran gambar sudah diskalakan ke sekitar 2× lebar tampilan di website (retina), jadi tetap tajam saat ditampilkan. Kualitas WebP berkisar q70–q88, disesuaikan per gambar agar tetap di bawah 100 KB.

## Profile

| File | Dipakai di | Dimensi |
| --- | --- | --- |
| `profile/me.webp` | Hero dan halaman `/profile` | 800 × 1067 |

## Projects

Tiap folder project berisi satu showcase, dan gambar design process masuk ke subfolder `design-process/`.

| File | Dipakai di |
| --- | --- |
| `projects/<slug>/showcase.webp` | Card di beranda dan header halaman case study |
| `projects/<slug>/design-process/*.webp` | Step proses di halaman case study |

Nama file yang terpasang saat ini:

- **KOLABORASI** — `showcase.webp`; `design-process/{design-system,lofi,hifi%20new,prototyping}.webp` (step IA teks saja)
- **Joynest** — `showchase.webp`; `design-process/{IA,user%20flow,design-system,lofi,hifi,prototyping}.webp`
- **Perhutani** — `showcase.webp`, `design%20before.webp`; `design-process/{design%20system,lofi,hifi}.webp`
- **Novacare** — `showcase.webp`; `design-process/{design%20system,lofi,hifi}.webp`
- **Pantausiswa** — `showcase.webp`; `design-process/{userflow,design%20system,lofi,hifi,prototyping}.webp`

`<slug>` salah satu dari: `kolaborasi`, `joynest`, `perhutani`, `novacare`, `pantausiswa`.

## Menambah / mengganti gambar

- Simpan sebagai `.webp` dan targetkan < 100 KB per file. Kalau sumber berupa PNG/JPG, kompresi dulu dengan ImageMagick (mis. `magick file.png -resize 1792x -quality 82 file.webp`) atau skill `baoyu-compress-image`, lalu perbarui path dan `width`/`height` di `src/data/portfolio.ts`.
- Tiap step mendukung array `images`. Tambahkan entri baru di `src/data/portfolio.ts` pada step tersebut untuk gambar tambahan.

## Catatan

- Setelah menaruh file, refresh browser. Kalau browser menyimpan respons 404 lama, hard-refresh (Ctrl+F5).
- Teks alt sudah diatur di `src/data/portfolio.ts`; deskripsikan isi gambar dengan singkat.
- Jangan pakai gambar berhak cipta tanpa izin.
