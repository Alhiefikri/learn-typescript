# 📚 **Pick Utility Type di TypeScript** 🎉

## **Apa Itu Pick?** 🤔

**Pick** adalah salah satu **utility type** di TypeScript yang memungkinkan kita untuk **memilih** properti-properti tertentu dari sebuah tipe dan membuat tipe baru hanya dengan properti-properti yang dipilih. Jadi, daripada mengambil seluruh properti dalam sebuah objek, kamu bisa memilih hanya properti yang kamu butuhkan. 💼✨

Misalnya, jika kamu memiliki sebuah interface **User** dengan banyak properti, tetapi hanya ingin membuat objek dengan beberapa properti saja, kamu bisa menggunakan **Pick** untuk memilih properti yang diinginkan. 🎯

## **Kapan Menggunakan Pick?** ⏰

Gunakan **Pick** ketika:

- Kamu hanya membutuhkan sebagian properti dari sebuah objek atau tipe, dan ingin mengurangi kompleksitas dengan memilih hanya yang diperlukan.
- Ingin membuat tipe baru berdasarkan properti yang sudah ada, misalnya hanya bagian dari data yang perlu dikirim ke API.
- Membantu dalam **refactoring** kode agar hanya properti tertentu yang terpapar atau diubah.

## **Contoh Penggunaan Pick** 📋

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type Userinfo = Pick<User, "id" | "name">;

const userInfo1: Userinfo = {
  id: 2,
  name: "Udin",
};
```

### **Penjelasan Kode:**

1. **`interface User`**: Di sini, kita memiliki **interface** `User` yang memiliki tiga properti: `id`, `name`, dan `email`. Semua properti ini awalnya ada di tipe `User`.

2. **`type Userinfo = Pick<User, "id" | "name">`**: Dengan menggunakan **Pick**, kita membuat **tipe baru** bernama `Userinfo` yang hanya berisi properti `id` dan `name` dari tipe `User`. Properti `email` tidak akan ada dalam `Userinfo`.

3. **`const userInfo1: Userinfo`**: Di sini, kita mendeklarasikan objek `userInfo1` dengan tipe `Userinfo` yang hanya memiliki dua properti: `id` dan `name`, sesuai dengan yang kita pilih menggunakan **Pick**.

### **Keuntungan Menggunakan Pick** ✨

- **Memilih Properti yang Diperlukan**: Dengan **Pick**, kamu bisa dengan mudah memilih properti yang dibutuhkan tanpa harus mengganggu sisa objek. 👌
- **Mengurangi Overhead**: Jika kamu hanya membutuhkan sebagian kecil data dari objek besar, menggunakan **Pick** mengurangi kompleksitas dan menghindari data yang tidak perlu. 🧹
- **Fleksibilitas dan Keamanan Tipe**: Dengan **Pick**, kamu tetap mendapatkan manfaat dari **type-checking** TypeScript, memastikan bahwa tipe yang dibuat hanya mengandung properti yang valid. ✅

## **Kesimpulan** 🏁

**Pick** sangat membantu ketika kamu ingin memilih hanya beberapa properti dari tipe yang lebih besar, sehingga tipe baru yang dihasilkan lebih sederhana dan hanya mengandung data yang relevan. Ini sangat berguna untuk membuat objek lebih ringan dan menghindari kelebihan properti yang tidak diperlukan. 🎯

### **Emote Time!** 🌟

"Pick itu seperti memilih topping pizza yang kamu suka, nggak perlu semua topping, cukup yang kamu inginkan aja! 🍕✨"
