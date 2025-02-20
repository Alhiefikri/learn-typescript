# 📚 **Enum dan Unknown Tipe di TypeScript** 🎉

## **Penjelasan** 🤔

### **Enum (Enumerations)**

**Enum** adalah fitur di TypeScript yang memungkinkan kita mendefinisikan sekumpulan **nilai konstan** dengan nama yang lebih mudah dimengerti. Dengan **Enum**, kita bisa memberikan nama pada sebuah **nilai numerik** atau **string**, membuat kode jadi lebih terstruktur dan gampang dipahami.

Selain itu, kamu bisa menggunakan **constant enum** (`const enum`) untuk optimasi kode! 🚀

### **Unknown Type**

**Unknown** adalah tipe data yang mirip dengan **any**, tetapi lebih aman. Saat kita menggunakan `unknown`, kita **perlu mengecek** tipe data sebelum menggunakannya. Ini berguna untuk menghindari error saat kita tidak tahu pasti tipe data apa yang ada di variabel tersebut. 🤯

---

## **Kapan Digunakan?** ⏰

- **Enum**: Gunakan ketika kamu perlu merepresentasikan sekumpulan nilai konstan yang memiliki makna yang jelas, seperti arah, status, atau kategori tertentu.
- **Unknown Type**: Gunakan saat kamu bekerja dengan data yang tidak diketahui tipe pastinya, seperti data yang berasal dari luar aplikasi (misalnya API) yang bisa jadi tipe apapun.

---

## **Contoh Penggunaan Enum dan Unknown Type** 📋

### 1. **Enum (Numerical dan String Enums)**

```typescript
// Enum numerik
enum Direction {
  Up = 6, // Up dimulai dari nilai 6
  Down, // Down otomatis memiliki nilai 7
  Left, // Left otomatis nilai 8
  Right, // Right otomatis nilai 9
}

// Enum string
enum DirectionString {
  Up = "Atas",
  Down = "Bawah",
  Left = "Kiri",
  Right = "Kanan", // Benerin Right jadi Kanan, biar nggak ada duplikat! 😅
}

let move: Direction = Direction.Up; // Menggunakan enum Direction

console.log(move); // Output: 6 (karena Up = 6)
```

**Penjelasan:**

- Di sini kita mendefinisikan dua enum:
  - **`Direction`**: Enum dengan nilai **numerik** yang dimulai dari `6` untuk `Up` dan otomatis bertambah untuk yang lainnya.
  - **`DirectionString`**: Enum dengan nilai **string** yang masing-masing arah diberi nama dalam bahasa Indonesia.
- Enums ini berguna untuk mengelompokkan nilai yang memiliki makna tertentu (seperti arah), sehingga tidak hanya mengandalkan angka saja. 📍

### 2. **Constant Enum**

```typescript
// Const Enum
const enum Arah {
  Atas = 6,
  Bawah,
  Kiri,
  Kanan,
}

let move: Arah = Arah.Atas;
console.log(move); // Output: 6
```

**Penjelasan:**

- **`const enum`** adalah **Enum yang dioptimalkan**. Ini lebih efisien karena saat TypeScript mengkompilasi kode, referensi ke enum akan diganti langsung dengan nilai konstan (misalnya, `Arah.Atas` langsung menjadi `6`).
- Gunakan `const enum` jika kamu butuh efisiensi dan tidak ingin nilai enum itu ada di runtime.

### 3. **Unknown Type**

```typescript
// Unknown Type
let data: unknown;

data = "hello ";

if (typeof data === "string") {
  console.log(data.toUpperCase()); // Output: "HELLO "
} else {
  console.log("data is not a string");
}
```

**Penjelasan:**

- **`unknown`** adalah tipe yang lebih aman daripada **`any`**. Kita **harus memeriksa tipe data** terlebih dahulu sebelum mengakses atau memanipulasinya.
- Pada contoh di atas, kita mengecek apakah `data` adalah string, jika ya, kita panggil method `toUpperCase()`. Kalau tidak, kita tampilkan pesan bahwa `data` bukan string.

---

## **Keuntungan Enum dan Unknown Type** ✨

### **Keuntungan Enum**:

1. **Membantu mengelompokkan nilai yang terkait**: Misalnya, arah (`Up`, `Down`, `Left`, `Right`) jadi lebih terstruktur dan tidak perlu lagi menulis angka sembarangan. 📐
2. **Lebih mudah dibaca**: Daripada menulis angka atau string secara langsung, kamu bisa memberikan nama yang lebih bermakna. Misalnya, `Direction.Up` jauh lebih jelas daripada `6`. 🧐

### **Keuntungan Unknown Type**:

1. **Lebih aman daripada any**: Dengan `unknown`, kamu harus memastikan tipe data sebelum menggunakan atau memodifikasi nilai, jadi lebih **terjamin keamanannya**. 🔐
2. **Penggunaan yang fleksibel**: Ideal untuk data yang berasal dari luar dan tipe datanya bisa berbeda-beda, seperti data dari API. 🌐

---

## **Kesimpulan** 🏁

- **Enum** di TypeScript sangat berguna untuk **mengelompokkan nilai** yang memiliki makna tertentu (seperti arah atau status), dan dapat membuat kode kamu lebih **terstruktur** dan **bermakna**! 💡
- **Unknown Type** memberikan kita **keamanan ekstra** ketika bekerja dengan data yang tipe datanya tidak pasti. Dengan `unknown`, kita bisa memastikan bahwa **kita hanya mengakses data dengan cara yang aman**. 🔒

**Emote Time!** 🌟

> "Enum itu seperti peta arah: jelas dan nggak bikin nyasar! Unknown? Lebih baik hati-hati, jangan sampai salah jalan!" 🚦😊
