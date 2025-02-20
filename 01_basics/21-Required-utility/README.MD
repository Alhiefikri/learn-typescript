# 📚 **Required Utility Type di TypeScript** 🎉

## **Apa Itu Required?** 🤔

**Required** adalah salah satu **utility type** di TypeScript yang berfungsi untuk mengubah semua properti dalam sebuah tipe menjadi **wajib** (required). Dengan kata lain, jika sebelumnya properti dalam sebuah tipe bisa bersifat opsional, dengan **Required**, kita memaksa properti-properti tersebut untuk diisi (tidak boleh ada yang hilang). 📝🚀

Dengan **Required**, kita memastikan bahwa **semua properti** yang ada dalam tipe harus ada ketika membuat objek. Ini sangat berguna ketika kamu ingin memastikan objek yang dibuat lengkap dan tidak ada properti yang terlewat. 😌👌

## **Kapan Menggunakan Required?** ⏰

Gunakan **Required** ketika:

- Kamu ingin memastikan bahwa **semua properti** dalam sebuah objek harus ada, tidak boleh ada yang **terlewat** atau **opsional**.
- Ketika kamu menerima tipe objek yang sebelumnya memiliki properti opsional dan ingin **memastikan semuanya diisi** di satu titik dalam program.
- Menghindari kesalahan yang mungkin muncul jika ada properti yang hilang pada objek yang seharusnya lengkap. 💥

## **Contoh Penggunaan Required** 📋

```typescript
interface User {
  id?: number;
  name?: string;
  email?: string;
}

const user: Required<User> = {
  id: 1,
  name: "alhie",
  email: "alhie@test.com",
};

console.log(user);
```

### **Penjelasan Kode:**

1. **`interface User`**: Di sini kita mendefinisikan sebuah **interface** `User` dengan properti `id`, `name`, dan `email` yang **opsional** (menggunakan `?`).

2. **`Required<User>`**: Ketika kita menggunakan **`Required<User>`**, kita mengubah properti yang semula opsional menjadi **wajib**. Dengan kata lain, semua properti yang tadinya bisa kosong sekarang harus ada.

3. **`const user: Required<User>`**: Di sini, kita mendeklarasikan objek `user` yang sekarang harus menyertakan semua properti dari `User` (`id`, `name`, dan `email`). Jika salah satu properti hilang, TypeScript akan memberikan **error**.

### **Keuntungan Menggunakan Required** ✨

- **Peningkatan Keamanan Tipe**: Dengan memastikan semua properti diisi, kamu mengurangi risiko objek yang tidak lengkap dan kesalahan saat runtime. 🛡️
- **Mencegah Bug**: Kamu tidak perlu khawatir ada properti yang terlewatkan saat membuat objek, sehingga mengurangi kemungkinan bug! 🐞
- **Penggunaan yang Sederhana**: Hanya dengan menggunakan `Required<T>`, kamu bisa dengan mudah memastikan objek yang dibuat harus lengkap. 😎

## **Kesimpulan** 🏁

**Required** sangat berguna saat kamu ingin memastikan bahwa objek yang kamu buat adalah **lengkap** dan **memiliki semua properti yang diperlukan**. Dengan menggunakan utility type ini, kamu dapat menghindari masalah yang mungkin timbul akibat objek yang tidak lengkap. Jadi, jika kamu ingin menjamin bahwa semua properti objek wajib ada, gunakan **Required**! 🚀

### **Emote Time!** 🌟

"Required itu seperti melengkapi checklist sebelum berangkat jalan-jalan, biar nggak ada yang ketinggalan! 🗺️✅"
