# Image assets

Letakkan file di sini dengan nama persis berikut. Aplikasi memuat path ini otomatis; sebelum file ada, tampilannya memakai placeholder bertanda `TODO`.

## Profile

| File | Dipakai di | Ukuran saran |
| --- | --- | --- |
| `profile/me.jpg` | Hero dan halaman `/profile` | 2359 × 3145 (sudah terpasang) |

## Projects

Tiap folder project berisi satu showcase, dan gambar design process masuk ke subfolder `design-process/`.

| File | Dipakai di |
| --- | --- |
| `projects/<slug>/showcase.jpg` | Card di beranda dan header halaman case study |
| `projects/<slug>/design-process/ia-1.jpg` | Step 1, Information architecture (kosong untuk KOLABORASI: teks saja) |
| `projects/<slug>/design-process/design-system-1.jpg` | Step 2, Design system |
| `projects/<slug>/design-process/lofi-1.jpg` | Step 3, Low-fidelity wireframes |
| `projects/<slug>/design-process/hifi-1.jpg` | Step 4, High-fidelity design |
| `projects/<slug>/design-process/prototyping-1.jpg` | Step 5, Prototyping |

KOLABORASI sudah terisi dengan `showcase.jpg` dan `design-process/{design-system,lofi,hifi,prototyping}.png` (hi-fi memakai `hifi new.png`). Joynest memakai `showchase.jpg` dan `design-process/{IA.jpg,user flow.jpg,design-system.png,lofi.png,hifi.png,prototyping.png}`; step IA & user flow memakai dua gambar dengan deskripsi masing-masing. Pantausiswa dan SIRATA masih placeholder.

`<slug>` salah satu dari: `kolaborasi`, `joynest`, `pantausiswa`, `sirata`.

Ukuran saran showcase 1200 × 800 (3:2), gambar process 1200 × 800 juga. Boleh JPG, PNG, atau WebP — kalau ganti ekstensi, ubah juga path di `src/data/portfolio.ts`.

## Menambah lebih dari satu gambar per step

Tiap step mendukung array `images`. Tambahkan file seperti `design-process/ia-2.jpg`, lalu tambahkan entri di `src/data/portfolio.ts` pada step tersebut.

## Catatan

- Setelah menaruh file, refresh browser. Kalau browser menyimpan respons 404 lama, hard-refresh (Ctrl+F5).
- Teks alt sudah diatur di `src/data/portfolio.ts`; deskripsikan isi gambar dengan singkat.
- Jangan pakai gambar berhak cipta tanpa izin.
