# 📚 **Parameter Optional dan Default di TypeScript** 🎉

## **Penjelasan** 🤔

### **Parameter Optional**

**Parameter optional** adalah parameter pada sebuah function yang **tidak wajib diisi** saat pemanggilan function. Parameter ini ditandai dengan tanda **`?`** setelah nama parameter. Jika parameter tidak diisi, maka ia akan **bernilai `undefined`** secara default.

### **Parameter Default**

**Parameter default** adalah parameter yang memiliki nilai default jika tidak diberikan nilai saat pemanggilan. Ini sangat berguna untuk memberikan nilai fallback jika parameter tidak disertakan oleh pengguna.

Namun, ada catatan penting: parameter default **harus diletakkan di akhir** daftar parameter, karena TypeScript akan bingung jika diletakkan di depan. 😅

---

## **Kapan Digunakan?** ⏰

- **Parameter Optional**: Digunakan ketika parameter pada function **bersifat opsional** dan tidak selalu diperlukan, sehingga membuat kode kita lebih fleksibel.
- **Parameter Default**: Gunakan ketika kamu ingin memberikan **nilai default** jika pengguna tidak memberikan nilai untuk parameter tersebut, menghindari penggunaan `undefined`.

---

## **Contoh Penggunaan Parameter Optional dan Default** 📋

### 1. **Parameter Optional**

```typescript
function greet(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, your age is ${age} years old`;
  }
  return `Hello ${name}`;
}

console.log(greet("Alhie", 22)); // Output: "Hello Alhie, your age is 22 years old"
console.log(greet("Alhie")); // Output: "Hello Alhie"
```

**Penjelasan:**

- **`age?`** adalah parameter opsional, jadi kamu bisa memanggil function `greet` dengan atau tanpa memberikan nilai untuk `age`.
- Jika `age` diberikan, maka akan muncul informasi usia, jika tidak, hanya menyapa dengan nama saja. 🌟

### 2. **Parameter Default**

```typescript
// Parameter default
function selamat(name: string = "Guest", age?: number): string {
  if (age) {
    return `Hello ${name}, your age is ${age} years old`;
  }
  return `Hello ${name}`;
}

console.log(selamat()); // Output: "Hello Guest"
console.log(selamat(undefined, 22)); // Output: "Hello Guest, your age is 22 years old"
console.log(selamat("Alhie", 22)); // Output: "Hello Alhie, your age is 22 years old"
```

**Penjelasan:**

- **`name: string = "Guest"`** adalah parameter dengan **nilai default**. Jika kita tidak memberikan nilai untuk `name`, maka parameter ini akan otomatis bernilai `"Guest"`.
- Kamu bisa memberikan nilai untuk `name`, atau biarkan kosong untuk menggunakan nilai default. 🌟
- **Parameter Default harus di akhir**, jadi `age?` tetap boleh diikuti tanpa nilai, dan function tetap berjalan dengan baik!

---

## **Keuntungan Parameter Optional dan Default** ✨

1. **Fleksibilitas**: Parameter opsional memungkinkan kamu untuk membuat function yang lebih fleksibel, di mana tidak semua parameter perlu diisi saat pemanggilan. 🌈
2. **Menghindari `undefined`**: Dengan parameter default, kamu bisa menghindari menggunakan nilai `undefined` dan memastikan parameter selalu memiliki nilai, baik itu dari input pengguna atau nilai default. 👍
3. **Mempermudah Penggunaan**: Membuat function lebih mudah digunakan tanpa harus memaksa pengguna untuk memberikan setiap parameter. 🛠️

---

## **Kesimpulan** 🏁

- **Parameter Optional** dan **Parameter Default** adalah fitur powerful yang mempermudah penulisan function yang lebih fleksibel dan efisien.
- **Parameter Optional** memungkinkan kamu untuk membuat parameter yang **tidak wajib diisi**, sementara **Parameter Default** memastikan function kamu tetap berjalan walaupun ada parameter yang tidak diberikan. 🚀
- Dengan menambahkan parameter default atau opsional, kamu membuat function lebih **user-friendly** dan mengurangi kerumitan dalam pemanggilan function! 🎯

**Emote Time!** 🌟

> "Parameter Optional dan Default itu kayak main puzzle, kita bisa kasih bagian yang wajib diisi dan sisanya bebas, biar seru!" 🧩🎉
