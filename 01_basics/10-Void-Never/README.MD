# 📚 **`void` dan `never` di TypeScript** 🎉

## **Penjelasan** 🤔

### **`void`**

- **`void`** digunakan pada **fungsi yang tidak mengembalikan nilai apa pun**. Artinya, jika sebuah function hanya bertugas untuk melakukan aksi (misalnya, mencetak ke konsol atau mengubah sesuatu), kita akan menggunakan tipe `void` pada return type-nya.
- Fungsi dengan return type **`void`** tidak mengembalikan nilai, jadi kita tidak bisa menggunakan `return` dengan nilai apa pun.

### **`never`**

- **`never`** digunakan untuk **fungsi yang tidak akan pernah mengembalikan nilai** dan **selalu berakhir dengan error atau kondisi tak terhingga**.
- Fungsi dengan return type **`never`** sering digunakan untuk menangani **error** atau kondisi yang memaksa program berhenti, seperti **throwing error** atau **infinite loops**.

---

## **Kapan Digunakan?** ⏰

- Gunakan **`void`** ketika sebuah function tidak mengembalikan nilai, hanya melakukan aksi (misalnya: `console.log`, manipulasi DOM, atau operasi lain yang tidak perlu mengembalikan hasil).
- Gunakan **`never`** untuk fungsi yang selalu mengarah ke kondisi error atau berhenti total, sehingga tidak ada nilai yang dikembalikan.

---

## **Contoh Penggunaan `void` dan `never`** 📋

### 1. **`void` pada Fungsi yang Tidak Mengembalikan Nilai**

```typescript
function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello, TypeScript!"); // Output: "Hello, TypeScript!"
```

**Penjelasan:**

- **`logMessage`** adalah fungsi yang menerima parameter `message` bertipe `string` dan mencetak pesan tersebut ke konsol.
- Fungsi ini **tidak mengembalikan apa pun** (hanya melakukan aksi `console.log`), maka tipe return-nya adalah `void`.
- Ini memberitahu TypeScript bahwa kita tidak mengharapkan nilai dari fungsi ini.

### 2. **`never` pada Fungsi yang Selalu Menyebabkan Error atau Berhenti**

```typescript
function throwError(message: string): never {
  throw new Error(message);
}

throwError("Something went wrong!"); // Akan melempar error
```

**Penjelasan:**

- **`throwError`** adalah fungsi yang menerima `message` dan langsung melemparkan error dengan `throw new Error(message)`.
- Fungsi ini **selalu berakhir dengan error** dan tidak akan pernah mengembalikan nilai, sehingga tipe return-nya adalah `never`.
- Ini memberitahu TypeScript bahwa fungsi ini **selalu akan mengakibatkan program berhenti atau error**, dan tidak ada kemungkinan untuk melanjutkan eksekusi setelah pemanggilan fungsi ini.

---

## **Keuntungan Menggunakan `void` dan `never`** ✨

1. **Memudahkan Pemahaman Kode**: Menggunakan `void` dan `never` membantu kita untuk lebih jelas memahami **tujuan** dan **aliran eksekusi** dari function. 📜
2. **Menghindari Kesalahan**: Dengan menggunakan tipe `void` dan `never`, TypeScript memberi kita **perlindungan** lebih terhadap kesalahan pemrograman yang mungkin terjadi, seperti mengharapkan nilai dari fungsi yang tidak pernah mengembalikannya. ⚠️
3. **Error Handling yang Lebih Baik**: **`never`** sangat berguna untuk menangani kondisi yang akan menyebabkan program berhenti, seperti pada **throwing errors** atau **infinite loops**, yang membuat kode lebih **robust**. 💪

---

## **Kesimpulan** 🏁

- **`void`** digunakan ketika sebuah function tidak mengembalikan nilai dan hanya melakukan aksi tertentu (misalnya: mencetak ke konsol, mengubah elemen DOM, dll.).
- **`never`** digunakan untuk fungsi yang **tidak mengembalikan apa pun**, dan **selalu mengarah pada error atau kondisi yang menghentikan eksekusi program**.

Dengan menggunakan `void` dan `never`, kamu bisa membuat kode lebih terstruktur dan lebih jelas dalam menangani error atau aksi yang tidak mengembalikan nilai! 🎯

**Emote Time!** 🌟

> "TypeScript itu kayak punya juru masak yang tahu kapan harus berhenti dan kapan hanya mencetak pesan ke meja, biar semuanya tetap teratur!" 🍽️👨‍🍳
