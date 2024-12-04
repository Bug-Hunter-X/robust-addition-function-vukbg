function foo(a, b) {
  if (a === null || b === null) {
    return null; // or throw new Error('Null values are not allowed');
  }
  return a + b; 
}