## 1. **Union Types - Menggabungkan Tipe yang Berbeda** 🔗

```typescript
let id: number | string; // id bisa menjadi tipe number atau string
id = 123; // Bisa berisi angka
id = "test123"; // Bisa juga berisi string

let arr: (string | number)[] = [1, 2, 3, 4, "ok"]; // Array yang bisa berisi angka atau string

console.log(id, arr); // Menampilkan id dan arr
```

**Penjelasan:**

- **Union Types** memungkinkan sebuah variabel atau parameter untuk memiliki **lebih dari satu tipe**. Kamu bisa mendeklarasikan variabel yang bisa menyimpan **beberapa tipe data** dalam satu variabel! 😲

  Misalnya:

  - `let id: number | string;` Artinya variabel `id` bisa menjadi **angka** atau **string**, dan TypeScript akan mengizinkannya!

  - Dalam array `arr: (string | number)[]`, artinya array ini bisa berisi **kombinasi** antara **string** dan **angka**. Jadi kamu bisa memasukkan elemen seperti `1`, `2`, atau `"ok"` tanpa masalah. 🧮💬

---

## 2. **Literal Types - Tipe Data yang Lebih Spesifik** 🔒

```typescript
let info: "success" | "failure"; // info hanya bisa berisi "success" atau "failure"
info = "success"; // Benar, karena "success" adalah salah satu pilihan yang valid

console.log(info); // Menampilkan nilai info
```

**Penjelasan:**

- **Literal Types** memberikan kontrol yang sangat spesifik mengenai nilai yang bisa diterima oleh variabel atau parameter. 🎯

  Dalam contoh ini:

  - `let info: "success" | "failure";` berarti **`info` hanya bisa berisi salah satu dari dua nilai:** "success" atau "failure". 😅
  - Jadi, kalau kita mencoba memberikan nilai selain dua ini, TypeScript akan memberikan **error**! 🛑

  **Kelebihannya?** 🎉

  - Dengan menggunakan literal types, kamu bisa memastikan bahwa suatu variabel hanya menerima nilai tertentu, yang membantu mengurangi bug dan meningkatkan keamanan kode! 🔒

---

## **Kesimpulan:**

- **Union Types** memberi fleksibilitas dalam kode kamu dengan memungkinkan **beberapa tipe** yang berbeda dalam satu variabel. 🌈✨
- **Literal Types** memberikan **kontrol ketat** dengan membatasi nilai yang bisa diterima, menjadikan kode lebih aman dan lebih mudah dipahami. 🔐📜

Dengan kedua fitur ini, TypeScript semakin powerful dalam membantu kita menulis kode yang **terstruktur** dan **terjamin**! 💪
