function foo(a, b) {
  if (a === null || b === null) {
    return 0; //This line is incorrect, it should return null or throw an error 
  }
  return a + b; 
}