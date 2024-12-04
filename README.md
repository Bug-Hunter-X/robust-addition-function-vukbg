# Incorrect Null Handling in Addition Function
This repository demonstrates a common error in JavaScript: incorrect handling of null values in a function. The function `foo` is supposed to add two numbers, but it incorrectly returns 0 when either input is null.  The correct behavior would be to return null or throw an error. 

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

## Bug
The bug lies in how null values are handled in the `foo` function.  Instead of returning null, it returns 0, which may lead to unexpected behavior in other parts of the program.

## Solution
The solution demonstrates the proper way to handle null values: either explicitly returning null or throwing an error to indicate invalid input.  This avoids potential issues caused by the incorrect return value of 0.