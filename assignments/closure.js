// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

hideAndSeek();
function hideAndSeek() {
  const num1 = 43;
  console.log(`${num1} is a perfectly fine number.`);

  canYouSeeMe();
  function canYouSeeMe() {
    const num2 = 93;
    console.log(`${num2} is also fine.`);

    // youCantSeeMe();
    function youCantSeeMe() {
      const num3 = 949 * 13;
      console.log(
        `${num3} shall never see the light of day unless it's invoked.`
      );
    }
  }
}

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
