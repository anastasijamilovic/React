// prompt(`dhbwjna`);
// jsv9000.app

console.log(nesto);

console.log("after error");

setTimeout(() => {
  console.log(nesto);
});

const promise = new Promise((resolve, reject) => {
  resolve("text");
});

promise();

console.log("after timeout");
