# 📚 **Merging Interface di TypeScript** 🎉

## **Apa Itu Merging Interface?** 🤔

Merging interface adalah fitur di TypeScript yang memungkinkan kita untuk **menggabungkan dua atau lebih interface dengan nama yang sama**. Ketika dua interface yang memiliki nama yang sama digabungkan, TypeScript secara otomatis akan menggabungkan semua properti dan method dari kedua interface tersebut. Ini berguna ketika kamu ingin menambah atau memperbarui struktur interface tanpa perlu mendefinisikan interface baru.

Contohnya, kita bisa menggabungkan interface `User` yang pertama dengan interface `User` yang kedua, yang menambahkan properti `status` sebagai opsional. Dengan begitu, objek `User` dapat memiliki `status` selain properti lainnya yang sudah ada. 💥🔗

## **Kapan Menggunakan Merging Interface?** ⏰

Kamu bisa menggunakan merging interface saat:

- **Menambah properti atau method** pada interface yang sudah ada tanpa mengubah interface aslinya.
- **Membagi definisi interface** menjadi beberapa bagian, yang kemudian digabungkan, terutama jika kamu bekerja dengan kode yang sangat besar atau eksternal.
- **Menjaga fleksibilitas dan ekstensi** dari interface tanpa mengubah struktur atau mempengaruhi bagian lain dari kode. 📏

## **Contoh Penggunaan Merging Interface di TypeScript** 📋

```typescript
// Mendefinisikan interface User pertama dengan method greet
interface User {
  name: string;
  age: number;
  isAdmin?: boolean;
  greet(): string;
}

// Merging dengan interface User kedua yang menambahkan properti status
interface User {
  status?: boolean;
}

// Membuat objek user1 yang mengimplementasikan hasil merging interface User
const user1: User = {
  name: "alhiefikri",
  age: 22,
  //   isAdmin: true,
  greet() {
    return "Hello There";
  },
  status: true, // Menambahkan properti status
};

console.log(user1); // Output: { name: 'alhiefikri', age: 22, greet: [Function: greet], status: true }
```

### **Penjelasan Kode**:

1. **Interface `User` pertama** mendefinisikan beberapa properti: `name`, `age`, `isAdmin` (opsional), dan method `greet()`.
2. **Interface `User` kedua** hanya menambahkan properti `status`, yang juga opsional.
3. **Merging interface**: Karena kedua interface `User` memiliki nama yang sama, TypeScript akan menggabungkannya menjadi satu interface. Dengan demikian, objek `user1` bisa memiliki properti dan method dari kedua interface yang telah digabungkan, termasuk properti `status`.
4. **`user1`**: Objek ini mengimplementasikan interface `User` yang telah digabungkan, sehingga memiliki properti `name`, `age`, `greet()`, dan `status`.

### **Apa yang Terjadi Saat Kode Dijalankan?**

Kode ini akan menampilkan objek `user1` yang memiliki semua properti yang ada di interface `User` setelah digabungkan, termasuk properti `status`. Jadi, hasil outputnya akan berupa objek dengan `name`, `age`, `greet()`, dan `status`.

## **Keuntungan Menggunakan Merging Interface** ✨

- **Ekstensi yang Mudah**: Kamu bisa menambahkan properti atau method ke dalam interface yang sudah ada tanpa merubah definisi interface yang lama. Jadi, kamu bisa tetap menjaga kompatibilitas kode yang sudah ada. 📈
- **Modularitas**: Membagi interface menjadi beberapa bagian yang bisa digabungkan sangat mempermudah pengelolaan kode besar atau bekerja dengan modul eksternal yang tidak bisa langsung diubah. 📦
- **Fleksibilitas**: Merging interface memungkinkan kode kamu lebih fleksibel dan mudah dikembangkan tanpa harus mendefinisikan ulang interface yang sudah ada. 🔄

## **Kesimpulan** 🏁

Merging interface di TypeScript memungkinkan kamu untuk menggabungkan beberapa definisi interface dengan nama yang sama, yang membuat kode kamu lebih fleksibel dan modular. Ini sangat berguna ketika kamu ingin menambah properti atau method ke dalam interface tanpa mengubah struktur asli. Jadi, kamu bisa memperbarui dan memperluas interface dengan mudah tanpa merusak kode yang sudah ada. 🔧💡

### **Emote Time!** 🌟

"Merging interface itu seperti menambahkan topping pizza baru ke pizza yang sudah ada. Tanpa harus buang pizza lama, tinggal tambahin aja! 🍕✨"
