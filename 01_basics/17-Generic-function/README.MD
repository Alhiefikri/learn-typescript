# 📚 **Generic Function di TypeScript** 🎉

## **Apa Itu Generic Function?** 🤔

**Generic Function** di TypeScript memungkinkan kita untuk menulis fungsi yang dapat bekerja dengan berbagai tipe data tanpa mengorbankan tipe yang ketat. Dengan menggunakan **generic**, kita dapat membuat fungsi yang fleksibel, yang bisa menerima tipe data yang berbeda-beda, tetapi tetap menjaga keamanan tipe (type safety). 😎

Pada contoh yang diberikan, kita menggunakan parameter **generic type parameter** (`T`) yang memungkinkan fungsi menerima dan mengembalikan nilai dengan tipe apapun yang kita tentukan saat pemanggilan fungsi. Ini memungkinkan kita untuk menghindari penulisan fungsi yang terpisah untuk setiap tipe data yang berbeda.

## **Kapan Menggunakan Generic Function?** ⏰

Gunakan generic function ketika:

- **Ingin membuat fungsi yang bekerja dengan berbagai tipe data**, namun tetap menjaga agar tipe data yang digunakan tetap konsisten.
- **Tidak ingin menulis fungsi berulang untuk tipe data yang berbeda**, misalnya saat kamu membuat fungsi yang dapat menangani berbagai tipe data yang serupa, seperti string, number, atau objek lain.
- **Ingin fleksibilitas** untuk memberikan tipe yang berbeda saat memanggil fungsi tersebut.

## **Contoh Penggunaan Generic Function** 📋

```typescript
// Fungsi generic yang dapat menerima dan mengembalikan tipe data apapun
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello There !")); // Output: "Hello There !"
console.log(identity<number>(2025)); // Output: 2025

console.log(identity("Hello world")); // Output: "Hello world"
```

### **Penjelasan Kode**:

1. **`identity<T>(value: T): T`**: Fungsi `identity` ini menggunakan parameter `T` sebagai **generic type parameter**. Artinya, kita bisa menggunakan tipe data apapun yang kita tentukan saat pemanggilan fungsi.
2. **`identity<string>("Hello There !")`**: Ketika memanggil fungsi dengan `identity<string>`, kita memberitahu TypeScript bahwa `T` akan bertipe **string**, jadi fungsi akan mengembalikan string.
3. **`identity<number>(2025)`**: Demikian juga, dengan `identity<number>`, kita memberitahu TypeScript bahwa `T` akan bertipe **number**, jadi hasilnya adalah angka `2025`.

4. **`identity("Hello world")`**: Ketika memanggil fungsi tanpa mendefinisikan tipe generik secara eksplisit, TypeScript akan secara otomatis infer (`menyimpulkan`) tipe data yang sesuai berdasarkan argumen yang diberikan.

### **Keuntungan Menggunakan Generic Function** ✨

- **Fleksibilitas**: Kamu dapat menggunakan fungsi yang sama untuk berbagai tipe data, tanpa harus menduplikasi kode. 🎯
- **Keamanan Tipe**: Meskipun fleksibel, generic tetap menjaga keamanan tipe (type safety), jadi kamu tidak perlu khawatir ada kesalahan tipe yang terjadi. 🛡️
- **Reusabilitas**: Dengan generics, kamu bisa menulis fungsi yang lebih umum dan dapat digunakan kembali di berbagai bagian aplikasi. 🧰

## **Kesimpulan** 🏁

Fungsi generic adalah cara yang hebat untuk membuat fungsi yang fleksibel namun tetap menjaga konsistensi tipe di TypeScript. Kamu dapat menulis kode yang lebih **ringkas**, **efisien**, dan **aman** karena tidak perlu menulis fungsi terpisah untuk setiap tipe data yang berbeda. Jadi, setiap kali kamu merasa membutuhkan fungsi yang mendukung berbagai tipe data, generic function adalah jawabannya! 💡

### **Emote Time!** 🌟

"Generic function itu seperti menu makanan yang bisa disesuaikan dengan selera! Mau apa aja bisa, tapi tetep sesuai dengan yang kamu inginkan! 🍕✨"
