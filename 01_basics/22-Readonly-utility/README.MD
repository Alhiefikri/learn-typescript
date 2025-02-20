# 📚 **Readonly Utility Type di TypeScript** 🎉

## **Apa Itu Readonly?** 🤔

**Readonly** adalah salah satu **utility type** di TypeScript yang memungkinkan kita untuk membuat semua properti dalam objek menjadi **hanya-baca (read-only)**. Artinya, setelah objek dibuat, kamu tidak bisa mengubah properti tersebut, menjadikannya **immutable** atau tidak dapat diubah. 🔒✨

Ini sangat berguna ketika kamu ingin melindungi data agar tidak bisa diubah setelah objek tersebut didefinisikan, seperti **data konfigurasi** atau **data yang tidak boleh dimodifikasi** setelah dibuat.

## **Kapan Menggunakan Readonly?** ⏰

Gunakan **Readonly** ketika:

- Kamu ingin mencegah perubahan pada objek setelah didefinisikan.
- Membutuhkan objek yang **tidak dapat dimodifikasi** setelah dibuat, seperti **konfigurasi aplikasi** atau **data tetap**.
- Ingin memastikan bahwa tidak ada yang sengaja atau tidak sengaja mengubah nilai properti dari objek yang bersifat tetap.

## **Contoh Penggunaan Readonly** 📋

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

const user: Readonly<User> = {
  id: 1,
  name: "alhie",
  email: "alhie@test.com",
};

console.log(user.name);
// user.name = "fikri";  // Error: Cannot assign to 'name' because it is a read-only property
// console.log(user.name);
```

### **Penjelasan Kode:**

1. **`interface User`**: Kita mendefinisikan **interface** `User` dengan properti `id`, `name`, dan `email`. Semua properti ini **biasa bisa diubah** tanpa masalah.
2. **`Readonly<User>`**: Ketika kita menggunakan `Readonly<User>`, kita mengubah objek `user` menjadi **hanya-baca**. Ini berarti semua properti dalam objek `user` tidak dapat diubah setelah nilai pertama kali diberikan. 😱

3. **`user.name = "fikri"`**: Jika kamu mencoba untuk mengubah properti yang sudah ditetapkan, TypeScript akan memberikan **error**. Karena `name` sudah bersifat **read-only**, perubahan nilai akan ditolak.

### **Keuntungan Menggunakan Readonly** ✨

- **Mencegah Perubahan yang Tidak Diinginkan**: Dengan menggunakan **Readonly**, kita memastikan bahwa objek yang sudah didefinisikan tidak bisa diubah lagi, yang mengurangi kemungkinan kesalahan atau perubahan tidak sengaja. 🙅‍♂️
- **Keamanan Data**: Ini sangat penting ketika kamu bekerja dengan data yang harus tetap konsisten dan tidak boleh dimodifikasi setelah dibuat. 🔐
- **Keamanan Tipe yang Lebih Kuat**: TypeScript membantu dengan memperingatkan kita jika mencoba untuk mengubah objek yang bersifat read-only. 🚨

## **Kesimpulan** 🏁

**Readonly** adalah utility type yang sangat berguna untuk memastikan bahwa objek yang kita buat tidak dapat diubah setelah didefinisikan. Ini menjamin **keamanan data** dan **integritas** objek di seluruh aplikasi. Jika kamu butuh objek yang tidak boleh diubah setelah dibuat, maka **Readonly** adalah pilihan yang tepat! 😎

### **Emote Time!** 🌟

"Readonly itu seperti tombol ‘Lock’ di keyboard—begitu diaktifkan, nggak ada yang bisa merubahnya lagi! 🔒😂"
