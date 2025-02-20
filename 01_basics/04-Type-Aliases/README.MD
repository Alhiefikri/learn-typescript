# 📚 **Type Aliases di TypeScript** 🎯

## **Penjelasan** 📝

**Type Alias** adalah fitur di TypeScript yang memungkinkan kita untuk memberikan **nama alias** pada tipe data. Dengan Type Alias, kita bisa mendefinisikan tipe data yang kompleks dan memberinya nama agar kode menjadi lebih bersih dan mudah dibaca. Type Alias sangat berguna ketika kita perlu menggunakan tipe data yang sama di beberapa tempat dalam kode tanpa menulis ulang tipe tersebut.

Type Alias dapat digunakan untuk tipe data primitif seperti `string | number`, serta untuk tipe data kompleks seperti objek atau array.

---

## **Kapan Menggunakan Type Aliases?** ⏰

- **Ketika memiliki tipe data yang kompleks** yang digunakan di banyak tempat dalam aplikasi.
- **Untuk menyederhanakan tipe data yang panjang** sehingga lebih mudah digunakan dan dipahami.
- **Memudahkan pemeliharaan kode**, karena perubahan pada alias tipe hanya perlu dilakukan di satu tempat.

---

## **Contoh Penggunaan Type Aliases**

### 1. **Union Types dengan Type Alias** 🔗

```typescript
// Type Aliases
type ID = string | number; // Membuat alias tipe data ID yang bisa berupa string atau number

let userID: ID; // userID bertipe ID, yang bisa string atau number
let postID: ID; // postID bertipe ID, yang juga bisa string atau number

userID = "test123"; // userID bisa diisi dengan string

console.log(userID); // Menampilkan "test123"
```

**Penjelasan:**

- Di sini kita mendefinisikan alias tipe `ID` yang dapat berupa **string** atau **number** menggunakan `type ID = string | number;`.
- Kemudian, variabel `userID` dan `postID` bisa menggunakan tipe **ID**, yang berarti mereka bisa menyimpan nilai **string** atau **number**.
- Alih-alih menulis `string | number` berkali-kali, kita cukup menggunakan alias `ID`.

**Kapan Digunakan?**

- Jika kita memiliki variabel yang bisa menampung beberapa tipe data (misalnya ID yang bisa berupa angka atau string), Type Alias akan sangat membantu untuk memperjelas tipe tersebut. 🔄

---

### 2. **Menggunakan Type Alias untuk Objek** 🧳

```typescript
type User = {
  id: number;
  name: string;
  online: boolean;
}; // Type alias untuk tipe data objek User

const user1: User = {
  // user1 harus sesuai dengan tipe User
  id: 1,
  name: "alhiefikri",
  online: true,
};

console.log(user1); // Menampilkan objek user1
```

**Penjelasan:**

- Kita membuat alias tipe `User` untuk mendefinisikan struktur objek yang memiliki properti `id` (number), `name` (string), dan `online` (boolean).
- Variabel `user1` harus memiliki struktur yang sama dengan tipe alias `User`, yang berarti objek ini harus memiliki ketiga properti tersebut dengan tipe yang sesuai.
- Dengan menggunakan Type Alias, kita bisa memastikan bahwa objek-objek yang menggunakan tipe `User` selalu mengikuti struktur yang telah ditentukan.

**Kapan Digunakan?**

- Type Alias sangat bermanfaat ketika kita bekerja dengan objek yang memiliki struktur tertentu, seperti data pengguna, produk, atau entitas lain dalam aplikasi. Alih-alih mendefinisikan struktur objek secara berulang, kita cukup mendeklarasikan Type Alias sekali saja! 💼

---

## **Keuntungan Menggunakan Type Aliases** 🎯

1. **Meningkatkan keterbacaan kode**: Dengan memberi nama pada tipe data yang kompleks, kita bisa menjelaskan maksud tipe tersebut dengan lebih mudah.
2. **Menghindari penulisan tipe yang panjang berulang-ulang**: Ketika tipe data yang sama digunakan di berbagai tempat, Type Alias memungkinkan kita untuk mendeklarasikan tipe sekali saja.
3. **Meningkatkan pemeliharaan kode**: Jika ada perubahan pada tipe data, kita hanya perlu mengubah aliasnya, bukan setiap tempat di mana tipe tersebut digunakan.

---

## **Kesimpulan** 🎉

**Type Aliases** di TypeScript memungkinkan kita untuk memberikan nama pada tipe data dan menyederhanakan kode, terutama ketika bekerja dengan tipe data yang kompleks. Baik untuk **Union Types** maupun objek dengan struktur tertentu, Type Aliases memberikan **keterbacaan**, **fleksibilitas**, dan **kemudahan pemeliharaan** kode.

Jika kamu bekerja dengan tipe data yang sering digunakan atau ingin membuat kode lebih terstruktur, **gunakan Type Aliases**! 🏗️
