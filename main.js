// 1. Write a function that returns the sum of any two integers passed as arguments
function addNumbers(x, y) {
  let total = x + y;
  console.log(total);
  return total;
}

addNumbers (1, 2);
// 2. Write a function that returns the difference of the second argument from the first
 function subtractNumbers (x, y) {
  let total = x - y;
  console.log(total);
  return total;
}

subtractNumbers (1, 2);
// 3. Write a function that allows a user to enter their name as an
// argument and returns a statement greeting them like, `Hello, Homer!`
function greeting(userName) {
    let response = `Hello, ${userName}!`;
    console.log(response);
    return response;
}

greeting (`Homer`);
// 4. Write a function that returns the product of any argument
// multiplied by itself.
function multiplyNumbers(x, y) {
  let total = x * y;
  console.log(total);
  return total;
};

multiplyNumbers (4, 5);
// 5. Write a  function set equal to a variable called `volume`
// that returns a value of the dimensions of a box (l*w*h) and THEN
// invoke that function in a console.log() with a message of the box's
// dimensions
// ^ 🔥 This is s-tier/big-brain work and not for the faint of heart 🔥
function multiplyDimensions (x, y, z) {
  let volume = x * y * z;
  const message = `The dimensions of the box are ${volume} cubic meters`;
  console.log(message);
};

// The dimensions of the box are 200 cubic meters

multiplyDimensions (3, 5, 7);
