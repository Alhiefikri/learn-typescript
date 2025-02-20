# 📚 **Generic Constraint di TypeScript** 🎉

## **Apa Itu Generic Constraint?** 🤔

**Generic Constraint** memungkinkan kita untuk membatasi jenis tipe yang bisa digunakan dalam sebuah fungsi atau interface **generic**. Dengan menggunakan constraint, kita dapat memastikan bahwa parameter generik yang digunakan memiliki properti atau metode tertentu yang diperlukan untuk berfungsi dengan baik.

Misalnya, jika kita ingin agar parameter generik hanya menerima tipe data yang memiliki **properti `length`** (seperti string atau array), kita bisa memberikan **constraint** pada generik tersebut.

## **Kapan Menggunakan Generic Constraint?** ⏰

Gunakan **generic constraint** ketika:

- **Membutuhkan pembatasan** pada tipe data yang dapat digunakan oleh parameter generik, agar tipe tersebut memiliki properti atau metode tertentu.
- **Menghindari kesalahan tipe** dengan memastikan bahwa objek yang digunakan dalam fungsi atau interface memiliki sifat atau metode yang diperlukan.
- **Meningkatkan keamanan tipe (type safety)** dengan memberikan batasan yang lebih ketat pada tipe data yang diterima.

## **Contoh Penggunaan Generic Constraint** 📋

### **Contoh 1: Menggunakan Interface dengan Generic Type**

```typescript
interface User<T, U> {
  name: T;
  age: U;
}

const user1: User<string, number> = {
  name: "budiman",
  age: 22,
};
```

Di sini, kita mendefinisikan **interface `User`** dengan dua parameter generik: `T` untuk `name` dan `U` untuk `age`. Kita kemudian menentukan bahwa `user1` memiliki `name` dengan tipe **string** dan `age` dengan tipe **number**.

### **Contoh 2: Fungsi dengan Generic Constraint**

```typescript
function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

logLength<string>("Hello");
logLength([1, 2, 3, 4]);

// logLength<number>(23);  // Error: number doesn't have a 'length' property
```

### **Penjelasan Kode:**

1. **`logLength<T extends { length: number }>(item: T): void`**: Fungsi `logLength` ini memiliki **constraint** pada tipe generik `T`. Kita memastikan bahwa tipe `T` harus memiliki properti `length` yang bertipe **number**. Jadi, kita hanya bisa memberikan tipe data yang memiliki properti `length`, seperti `string` atau `array`.
2. **`logLength<string>("Hello")`**: Karena `string` memiliki properti `length`, ini valid dan akan mencetak panjang dari string `"Hello"`, yaitu `5`.

3. **`logLength([1, 2, 3, 4])`**: Array juga memiliki properti `length`, jadi ini valid dan akan mencetak panjang array, yaitu `4`.

4. **`logLength<number>(23)`**: Ini menghasilkan error, karena **number** tidak memiliki properti `length`, sehingga tidak memenuhi constraint yang diberikan.

## **Keuntungan Menggunakan Generic Constraint** ✨

- **Keamanan Tipe (Type Safety)**: Kamu dapat memastikan bahwa fungsi atau interface hanya akan bekerja dengan tipe data yang memenuhi syarat tertentu, seperti memiliki properti atau metode tertentu. 🚧
- **Fleksibilitas dengan Pembatasan**: Kamu tetap dapat menggunakan generic untuk fleksibilitas, tetapi dengan batasan yang lebih ketat untuk memastikan konsistensi. ⚖️
- **Peningkatan Intellisense dan Pembacaan Kode**: Ketika menggunakan constraint, IDE seperti VSCode akan memberikan **saran dan peringatan** yang lebih baik saat mengetik, karena TypeScript tahu persis tipe yang bisa digunakan. 🔍

## **Kesimpulan** 🏁

**Generic Constraint** memberikan kita cara untuk membatasi tipe data yang bisa diterima oleh fungsi atau interface yang generik, sambil tetap menjaga fleksibilitas. Dengan menggunakan constraint, kamu dapat memastikan bahwa tipe data yang digunakan memiliki properti atau metode yang diperlukan untuk berfungsi dengan benar. Ini meningkatkan **keamanan tipe** dan **kejelasan kode**.

### **Emote Time!** 🌟

"Generic constraint itu seperti memberi syarat sebelum kamu bisa ikut lomba, jadi semua peserta siap! 🏁😎"
