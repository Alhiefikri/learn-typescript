# 📚 **Optional Properties di TypeScript** 🎉

## **Penjelasan** 🤔

Kamu pernah ngerasa kayak punya data yang kadang ada, kadang nggak? Misalnya, data umur seseorang atau email mereka? Nah, **Optional Properties** di TypeScript bisa bantu banget untuk hal ini! 🕵️‍♂️

Dengan **Optional Properties**, kita bisa mendeklarasikan properti di dalam objek yang **tidak wajib ada**. Alias, "Ya kalau ada, syukur. Kalau nggak ada, gapapa!" 😜

---

## **Kapan Digunakan?** ⏰

- **Ketika ada properti yang mungkin tidak selalu tersedia** dalam objek, misalnya "email" atau "umur" yang mungkin nggak diketahui.
- **Menghindari error** saat objek tidak memiliki properti tertentu.
- **Memberikan fleksibilitas** dalam mendefinisikan struktur data.

---

## **Contoh Penggunaan Optional Properties**

```typescript
// Optional properties
type User = {
  name: string;
  age?: number; // age adalah properti yang opsional
  email?: string; // email juga opsional
};

let user1: User = {
  name: "alhiefikri", // hanya punya nama
};

let user2: User = {
  name: "gocap", // punya nama
  age: 25, // punya umur juga
};

console.log(user1, user2);
```

**Penjelasan:**

- Di sini kita membuat tipe **User** dengan dua properti **opsional**: `age` dan `email`. Itu artinya, objek `User` bisa saja hanya punya nama, tanpa harus ada `age` atau `email`.
- Contoh:
  - **user1** hanya punya `name`, tapi nggak ada `age` atau `email`. Oke banget, kan? 😎
  - **user2** punya `name` dan `age`, tapi tetap bisa tanpa `email`. Jadi fleksibel banget! 🎉

**Kapan Digunakan?**

- Misalnya, kamu lagi bikin aplikasi sosial media. **Email** dan **umur** pengguna mungkin nggak selalu tersedia saat pertama kali mendaftar. Jadi, lebih baik jadikan mereka **opsional**! 📧❓

---

## **Keuntungan Optional Properties** ✨

1. **Fleksibilitas**: Kamu bisa menambahkan properti kapan saja tanpa takut bikin error.
2. **Mengurangi kekhawatiran**: Gak perlu khawatir kalau ada data yang hilang. TypeScript tetap bisa handle! 🛡️
3. **Lebih human-friendly**: Gak ada lagi yang bingung saat data tertentu gak ada! 😅

---

## **Kesimpulan** 🏁

Dengan **Optional Properties**, TypeScript memberikan kita kemampuan untuk membuat objek yang **lebih fleksibel**! 💪 Properti yang tidak wajib ada, seperti umur atau email, bisa dibiarkan kosong tanpa bikin kode error. Ini membantu banget ketika data tidak selalu lengkap! 😍

Jadi, kalo lagi nulis kode dan ada data yang kadang ada, kadang gak, **gunakan Optional Properties** untuk bikin semuanya lebih santai! 😎✨

---

**Emote Time!** 🌟

> "Kadang umur ada, kadang nggak. Kadang email ada, kadang nggak... Tapi yang penting, TypeScript tetap paham!" 🧐💻
