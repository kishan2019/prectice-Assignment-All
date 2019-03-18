function limitFunctionCallCount(cb, n) {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // Returning null is acceptable if cb can't be returned
  let counter = n;
  function invoke () {
  //  counter-- >  0 ? cb() : throw(new Error (`Callback already called ${n}-times`));  I CAN NOT FIGURE OUT WHY THIS LINE IS NO WORKING
   counter-- >  0 ? cb() : console.log(`Callback already called ${n}-times`);
  }
  return {invoke};
}	
let nTimes = limitFunctionCallCount(cb, 3);
nTimes.invoke();
nTimes.invoke();
nTimes.invoke();
nTimes.invoke();



 cb = x => `Good! argument ${x} was no used!`;