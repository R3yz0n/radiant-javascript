// All we'd read up to know is a synchronous programming
// sync- one after another

// HOF

console.log("first");

// async fn

// a request to the server
setTimeout(() => {
  console.log("fn called");
}, 5000); // 2000ms //2s

console.log("second");

setInterval(() => {
  console.log("interval");
}, 100);
console.log("hi");
