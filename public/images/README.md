# Image assets

Letakkan file di sini dengan nama persis berikut. Aplikasi memuat path ini otomatis; sebelum file ada, tampilannya memakai placeholder bertanda `TODO`.

## Profile

| File | Dipakai di | Ukuran saran |
| --- | --- | --- |
| `profile/portrait.jpg` | Hero dan halaman `/profile` | 640 × 800 (4:5) |

Opsional: `profile/portrait-detail.jpg` untuk crop kedua bila dipakai nanti.

## Projects

Tiap folder berisi satu showcase dan satu gambar per step design process.

| File | Dipakai di |
| --- | --- |
| `projects/<slug>/showcase.jpg` | Card di beranda dan header halaman case study |
| `projects/<slug>/ia-1.jpg` | Step 1, Information architecture |
| `projects/<slug>/design-system-1.jpg` | Step 2, Design system |
| `projects/<slug>/lofi-1.jpg` | Step 3, Low-fidelity wireframes |
| `projects/<slug>/hifi-1.jpg` | Step 4, High-fidelity design |
| `projects/<slug>/prototyping-1.jpg` | Step 5, Prototyping |

`<slug>` salah satu dari: `kolaborasi`, `joynest`, `pantausiswa`, `sirata`.

Ukuran saran showcase 1200 × 800 (3:2), gambar process 1200 × 800 juga. Boleh JPG, PNG, atau WebP — kalau ganti ekstensi, ubah juga path di `src/data/portfolio.ts`.

## Menambah lebih dari satu gambar per step

Tiap step mendukung array `images`. Tambahkan file seperti `ia-2.jpg`, lalu tambahkan entri di `src/data/portfolio.ts` pada step tersebut.

## Catatan

- Setelah menaruh file, refresh browser. Kalau browser menyimpan respons 404 lama, hard-refresh (Ctrl+F5).
- Teks alt sudah diatur di `src/data/portfolio.ts`; deskripsikan isi gambar dengan singkat.
- Jangan pakai gambar berhak cipta tanpa izin.
