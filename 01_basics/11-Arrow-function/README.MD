# 📚 **Arrow Function di TypeScript** 🎉

## **Penjelasan** 🤔

**Arrow function** adalah cara penulisan function yang **lebih singkat dan ringkas** daripada function biasa. Di TypeScript, arrow function menggunakan tanda **`=>`** untuk mendeklarasikan function. Keuntungan utama dari arrow function adalah sintaksisnya yang lebih sederhana dan lebih mudah dibaca. Selain itu, arrow function juga **menjaga konteks `this`** (tidak ada masalah dengan `this` seperti pada function biasa). 🕵️‍♂️

---

## **Kapan Digunakan?** ⏰

- Gunakan **arrow function** ketika kamu ingin menulis kode yang **lebih ringkas** dan **lebih mudah dibaca**.
- **Arrow function** sangat berguna ketika kamu bekerja dengan **callback functions** atau **fungsi yang hanya terdiri dari satu baris kode**.

---

## **Contoh Penggunaan Arrow Function** 📋

### 1. **Arrow Function dengan 1 Baris Kode**

```typescript
const multiplay = (a: number, b: number): number => a * b;

console.log(multiplay(3, 4)); // Output: 12
```

**Penjelasan:**

- Di sini, kita mendeklarasikan sebuah function `multiplay` menggunakan **arrow function**.
- Sintaksnya lebih singkat daripada function biasa, dan **tidak memerlukan keyword `return`** jika hanya ada satu ekspresi di dalam body function.
- **`(a: number, b: number): number`** menunjukkan bahwa parameter `a` dan `b` adalah bertipe `number`, dan hasil dari function ini juga bertipe `number`.
- Ketika kita panggil `multiplay(3, 4)`, outputnya adalah `12`.

### 2. **Perbandingan dengan Function Biasa**

```typescript
// Function biasa
function multiply(a: number, b: number): number {
  return a * b;
}

// Arrow function
const multiplyArrow = (a: number, b: number): number => a * b;
```

**Penjelasan:**

- Pada **function biasa**, kita perlu menuliskan kata kunci `function` dan `return`.
- Pada **arrow function**, kita langsung menulis **parameter** dan **ekspresi** dalam satu baris, dan TypeScript **secara otomatis** mengembalikan hasil ekspresi tersebut.

---

## **Keuntungan Menggunakan Arrow Function** ✨

1. **Penulisan Lebih Ringkas**: Arrow function memungkinkan kita untuk menulis kode dengan lebih singkat dan lebih mudah dibaca, tanpa mengorbankan fungsionalitas. 📝
2. **Fungsi Sederhana**: Sangat cocok untuk fungsi yang hanya memiliki satu baris kode, seperti perhitungan atau manipulasi data kecil. 🔥
3. **Membantu Menjaga `this`**: Arrow function tidak mengikat `this` pada dirinya sendiri, yang berarti `this` tetap merujuk pada konteks di luar fungsi. Ini berguna untuk **callback functions** atau ketika bekerja dengan event handlers di JavaScript. 🔗

---

## **Kesimpulan** 🏁

- **Arrow function** adalah cara penulisan function yang lebih singkat dan lebih mudah dibaca dibandingkan dengan function biasa.
- Ini sangat berguna untuk **fungsi sederhana**, seperti perhitungan atau manipulasi data kecil, yang hanya membutuhkan satu baris kode.
- **Arrow function** juga lebih baik dalam hal menjaga konteks `this`, yang sangat berguna untuk event handling atau callback functions. 🚀

**Emote Time!** 🌟

> "Arrow function itu seperti shortcut keyboard, lebih cepat dan praktis, tapi tetap membuat semuanya berjalan lancar!" 🎯⌨️
