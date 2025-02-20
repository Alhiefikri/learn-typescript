# 📚 **Optional Properties di Interface TypeScript** 🎉

## **Apa Itu Optional Properties?** 🤔

Dalam TypeScript, kamu bisa membuat properti dalam interface menjadi **opsional**. Artinya, kamu boleh memilih untuk memberikan nilai pada properti tersebut atau tidak. Ini berguna ketika ada beberapa data yang tidak selalu diperlukan. Untuk membuat properti opsional, kamu hanya perlu menambahkan tanda tanya (`?`) setelah nama properti.

Contohnya, dalam contoh berikut, kita punya properti `isAdmin` di interface `User` yang bersifat opsional, yang berarti objek `User` boleh memiliki properti ini, atau tidak. 🤹‍♀️

## **Kapan Menggunakan Optional Properties?** ⏰

Kamu menggunakan optional properties ketika ada beberapa informasi dalam objek yang tidak selalu ada atau tidak selalu diperlukan. Misalnya:

- **Pengguna tidak selalu memiliki status admin**: Jika beberapa pengguna di aplikasi kamu bukan admin, kamu bisa membuat `isAdmin` sebagai properti opsional.
- **Fitur opsional**: Ketika ada fitur opsional pada objek, seperti `address`, `phone`, atau `photo`, yang tidak selalu harus ada dalam setiap objek. 📱💭

## **Contoh Penggunaan Optional Properties di TypeScript** 📋

```typescript
// Mendefinisikan interface User dengan properti opsional isAdmin
interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // Properti isAdmin opsional
}

// Membuat objek user1 tanpa properti isAdmin
const user1: User = {
  name: "alhiefikri",
  age: 22,
  //   isAdmin: true,  // Ini bisa dilewatkan karena isAdmin bersifat opsional
};

// Membuat objek user2 dengan properti isAdmin
const user2: User = {
  name: "budiman",
  age: 22,
  isAdmin: true,
};

console.log(user1); // Output: { name: 'alhiefikri', age: 22 }
console.log(user2); // Output: { name: 'budiman', age: 22, isAdmin: true }
```

### **Penjelasan Kode**:

1. **`isAdmin?: boolean`**: Properti `isAdmin` didefinisikan sebagai **opsional** di dalam interface `User`. Artinya, objek `User` bisa saja tidak memiliki properti ini.
2. **`user1`**: Objek pertama hanya memiliki properti `name` dan `age`, tanpa `isAdmin`. Ini sah-sah aja karena `isAdmin` opsional.
3. **`user2`**: Objek kedua memiliki semua properti yang didefinisikan di interface, termasuk `isAdmin`.

### **Apa yang Terjadi Saat Kode Dijalankan?**

Kode ini akan menampilkan dua objek:

- `user1` akan ditampilkan hanya dengan properti `name` dan `age`, tanpa `isAdmin`.
- `user2` akan ditampilkan dengan properti lengkap, termasuk `isAdmin`.

## **Keuntungan Menggunakan Optional Properties** ✨

- **Fleksibilitas**: Kamu bisa membuat properti yang tidak selalu dibutuhkan, yang membuat kode lebih fleksibel dan tidak terlalu kaku. 🤸‍♀️
- **Menyederhanakan Struktur Data**: Mempermudah pengelolaan data yang tidak selalu harus memiliki nilai pada beberapa properti. ✅
- **Mengurangi Kode Redundan**: Kalau suatu properti tidak selalu digunakan, kita tidak perlu mendefinisikan nilai default atau memeriksa keberadaannya secara manual. 🌟

## **Kesimpulan** 🏁

Optional properties di TypeScript memungkinkan kamu untuk mendefinisikan properti yang tidak selalu ada pada objek. Dengan menambahkan tanda tanya (`?`) pada nama properti di interface, kamu memberikan fleksibilitas pada objek untuk tidak menyertakan properti tersebut. Ini sangat membantu dalam situasi di mana tidak semua data harus ada pada setiap objek.

### **Emote Time!** 🌟

"Optional properties itu seperti memilih topping pizza. Kalau kamu nggak suka keju, ya nggak usah ditambahin! 🍕😄"
