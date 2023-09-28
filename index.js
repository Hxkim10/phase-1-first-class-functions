// receivesAFunction
function receivesAFunction(callback) {
  callback();
}

// returnsANamedFunction
function returnsANamedFunction() {
  function namedFunction() {}
  return namedFunction;
}

// returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
  return () => {};
}
