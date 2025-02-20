// void
function logMessage(message: string): void {
  console.log(message);
}

// never
function throwError(message: string): never {
  throw new Error(message);
}
