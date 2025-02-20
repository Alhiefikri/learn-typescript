# 📚 **Panduan Tipe Data di TypeScript** 🖥️

Pada artikel ini, kita akan menjelajahi beberapa fitur dasar di **TypeScript** yang membuat kode kita lebih terstruktur dan aman. Siap-siap, kita akan belajar tipe data seperti string, number, boolean, array, dan bahkan `any` yang sedikit lebih fleksibel, tapi penuh risiko! 😱

---

## 1. **Tipe Data dengan Type Inference & Type Annotation** ✍️

```typescript
// Type Inference
let nama = "alhie fikri"; // TypeScript otomatis tahu ini adalah string

nama = "alhie"; // TypeScript tetap tahu ini string, karena sebelumnya sudah diinisialisasi dengan string.

// Type Annotation
let age: number = 26; // Di sini kita memberi tahu TypeScript bahwa age harus bertipe number
```

**Penjelasan:**

- **Type Inference** 🧠: TypeScript secara otomatis mendeteksi tipe data berdasarkan nilai yang diberikan. Jadi, kamu nggak perlu repot-repot menulis tipe setiap saat! 🤖
- **Type Annotation** 🏷️: Ini adalah cara kita memberi tahu TypeScript **secara eksplisit** tipe data yang diharapkan. Seperti memberi label pada variabel agar TypeScript tahu dengan pasti tipe data apa yang harus dipakai! 📜

---

## 2. **Tipe Data Primitif di TypeScript** 🔢📚

```typescript
// String
let namasaya: string = "alhie"; // tipe string

// Number
let ages: number = 22; // tipe number

// boolean
let isMarried: boolean = false; // tipe boolean
```

**Penjelasan:**

- **String** 📝: Tipe ini untuk menyimpan teks, seperti nama atau kalimat. Contoh: `"alhie"`, `"TypeScript Rocks!"` ✨.
- **Number** 🔢: Tipe ini untuk angka, baik integer (bilangan bulat) atau floating-point (bilangan desimal). Contoh: `22`, `3.14` 📏.
- **Boolean** ⚖️: Tipe ini hanya bisa bernilai `true` atau `false`. Biasanya untuk status atau kondisi seperti "Menikah" atau "Lulus". ✅❌

---

## 3. **Array dan Tuple yang Keren!** 🎉

```typescript
// Array number
let numbers: number[] = [1, 2, 3, 4, 5]; // Array yang hanya bisa berisi angka

// Array string
let hobbies: string[] = ["mancing", "basket", "catur"]; // Array yang hanya bisa berisi string

// Tupple
let person: [string, number, number] = ["alhie", 22, 43]; // Tuple dengan tipe data berbeda
```

**Penjelasan:**

- **Array** 📚: Menyimpan beberapa elemen dengan tipe yang sama. Misalnya, hanya angka atau hanya string. Contoh: `let numbers: number[] = [1, 2, 3]`.
- **Tuple** 🎯: Mirip dengan array, tapi bisa menyimpan elemen dengan tipe yang berbeda! Jadi kamu bisa simpan data campuran seperti nama (string), umur (number), dan berat badan (number) dalam satu variabel! 🤹‍♂️

---

## 4. **Tipe Data Any - Bisa Apa Saja! 😅**

```typescript
let variable: any;

variable = "alhie"; // bisa menyimpan string
variable = 22; // bisa juga angka
variable = true; // bahkan bisa boolean!

function logValue(value: any) {
  console.log(value); // Menampilkan nilai apapun
}

logValue("ini data dari api"); // Menampilkan string
logValue(2312); // Menampilkan angka
```

**Penjelasan:**

- **Any** 🔄: Tipe `any` memungkinkan kita untuk menyimpan **apa saja**! Fleksibel banget! 😎 Tapi, hati-hati! Karena tipe ini bisa menyebabkan **kesalahan** saat runtime, seperti kita bisa sebar "data acak" ke kode kita tanpa kendali. 🏃‍♀️

---

## 5. **Resiko Penggunaan Any - Waspada! ⚠️**

```typescript
function anyRisk(value: any) {
  console.log(value.toFixed(2)); // Coba panggil `toFixed` yang cuma ada di tipe number
}

anyRisk("alhie"); // Error! `toFixed` cuma ada di tipe number
```

**Penjelasan:**

- **Risiko Penggunaan `any`** ⚡: Meskipun `any` memberikan kebebasan, itu juga membuka pintu untuk **kesalahan**! 🤦‍♂️ Misalnya, dalam contoh ini, kita mencoba memanggil metode `toFixed(2)` yang hanya bisa dipanggil oleh tipe data `number`. Kalau kita kasih nilai selain angka, aplikasi kita bisa **error**! 💥

---

## **Kesimpulan:**

🎯 **TypeScript** memberikan banyak keuntungan dalam hal **keamanan tipe** dan **struktur kode** yang lebih baik! 🚀

- **Type Inference** membantu kita menulis kode dengan lebih cepat tanpa harus mendeklarasikan tipe setiap saat! 🙌
- **Type Annotation** memberikan kontrol penuh terhadap tipe data, memastikan kode kita lebih aman dan terhindar dari bug. 🛡️
- **Any** sangat fleksibel, tetapi **berisiko** kalau digunakan sembarangan! Hati-hati! ⚠️
- **Array** dan **Tuple** memungkinkan kita mengelola koleksi data dengan tipe yang berbeda, menjaga semuanya terstruktur! 🗂️

Jadi, pastikan kamu memilih tipe data yang tepat di setiap situasi agar kode TypeScript-mu makin mantap! 😎✨
