// Type Assertion

let someValue: unknown = "Hello TypeScript !";

// console.log((<string>someValue).length); // cara 1
// console.log((someValue as string).length); // rekomendasi untuk react / next

let imgElement = document.getElementById("my-image") as HTMLImageElement;

imgElement.src =
  "https://plus.unsplash.com/premium_photo-1739955024115-e2d219766d49?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8";
