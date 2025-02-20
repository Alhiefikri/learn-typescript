# 📚 **Omit, Record, ReturnType, dan InstanceType di TypeScript** 🎉

## **Omit Utility Type di TypeScript** 🤔

**Omit** adalah utility type yang memungkinkan kita untuk **menghilangkan** properti tertentu dari sebuah tipe. Jadi, jika kamu memiliki tipe dengan beberapa properti dan ingin membuat tipe baru yang **tanpa** beberapa properti tersebut, kamu bisa menggunakan **Omit**. ✂️

Dengan **Omit**, kamu bisa memilih properti mana yang tidak ingin ada dalam tipe baru, dan TypeScript akan otomatis menghapusnya untukmu. 🧹✨

### **Contoh Omit:**

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type UserWithoutEmail = Omit<User, "email">;

const user1: UserWithoutEmail = {
  id: 1,
  name: "susanti",
};
```

**Penjelasan**:

- Menggunakan **`Omit<User, "email">`** membuat tipe baru **`UserWithoutEmail`** yang menghilangkan properti `email` dari tipe `User`.
- **`user1`** hanya memiliki `id` dan `name`, tanpa `email`. ✅

---

## **Record Utility Type di TypeScript** 📋

**Record** adalah utility type yang memungkinkan kita untuk mendefinisikan objek dengan **key yang bisa dipilih** dan **value dengan tipe tertentu**. Ini sangat berguna ketika kamu ingin membuat objek dengan key yang sudah ditentukan dan value yang konsisten di seluruh objek. 🔑📚

### **Contoh Record:**

```typescript
type UserRoles = "admin" | "user" | "guest";

const users: Record<UserRoles, string[]> = {
  admin: ["alhie", "bob"],
  user: ["bob"],
  guest: ["john"],
};
```

**Penjelasan**:

- Di sini, kita membuat tipe **`UserRoles`** yang memiliki nilai `"admin"`, `"user"`, dan `"guest"`.
- Menggunakan **`Record<UserRoles, string[]>`**, kita mendefinisikan objek `users` dengan key sesuai `UserRoles` dan value berupa array string (list nama pengguna).
- Tiap peran memiliki daftar nama pengguna yang relevan. 😎

---

## **ReturnType Utility Type di TypeScript** 🧐

**ReturnType** adalah utility type yang mengambil **tipe pengembalian** (return type) dari sebuah fungsi. Ini sangat berguna ketika kamu ingin mengetahui tipe data apa yang dikembalikan oleh sebuah fungsi tanpa perlu menulis ulang tipe tersebut. 🔄

### **Contoh ReturnType:**

```typescript
function getUser() {
  return { id: 1, name: "alice" };
}

type UserReturnType = ReturnType<typeof getUser>;
```

**Penjelasan**:

- Dengan menggunakan **`ReturnType<typeof getUser>`**, kita mendapatkan tipe pengembalian dari fungsi `getUser` tanpa harus menuliskan tipe objek yang dikembalikan secara eksplisit.
- **`UserReturnType`** akan menjadi tipe `{ id: number; name: string }` berdasarkan nilai yang dikembalikan oleh `getUser`. 🤖

---

## **InstanceType Utility Type di TypeScript** 👨‍💻

**InstanceType** adalah utility type yang digunakan untuk mendapatkan tipe **instansi** dari sebuah **class**. Jadi, jika kamu punya sebuah class dan ingin mengambil tipe dari **instance** yang dibuat dari class tersebut, kamu bisa menggunakan **InstanceType**. 🏗️

### **Contoh InstanceType:**

```typescript
class Person {
  constructor(public name: string) {
    this.name = name;
  }
}

type PersonInstance = InstanceType<typeof Person>;
```

**Penjelasan**:

- **`InstanceType<typeof Person>`** mengambil tipe dari instance yang dibuat oleh class `Person`.
- **`PersonInstance`** akan menjadi tipe `{ name: string }` karena itu adalah bentuk instance dari class `Person`. 💼

---

## **Kesimpulan** 🏁

Dengan menggunakan **Omit**, **Record**, **ReturnType**, dan **InstanceType**, kamu bisa menulis kode yang lebih fleksibel dan efisien di TypeScript. Setiap utility type ini memiliki kegunaan yang berbeda untuk memanipulasi tipe objek sesuai kebutuhan spesifik kamu:

- **Omit**: Menghilangkan properti dari tipe.
- **Record**: Membuat objek dengan key yang sudah ditentukan dan value dengan tipe tertentu.
- **ReturnType**: Mengambil tipe pengembalian dari fungsi.
- **InstanceType**: Mengambil tipe dari instance sebuah class.

Dengan memanfaatkan utility types ini, kamu bisa membuat kode yang lebih **terstruktur**, **terhindar dari error**, dan **lebih mudah dibaca**. 😎💻

### **Emote Time!** 🌟

"Utility types itu seperti cheat code di TypeScript—bikin coding jadi lebih efisien dan nggak pusing! 🎮✨"
