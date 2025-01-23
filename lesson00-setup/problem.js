function sayHello() {
  return "Hello, World!";
}

console.log(sayHello());

module.exports = sayHello;

/*
//Test is not passing. why?
  lesson00-setup git:(main) ✗ npm run test ./lesson00-setup/problem.test.js

> dsamasterclass@1.0.0 test
> jest ./lesson00-setup/problem.test.js

sh: jest: command not found
➜  lesson00-setup git:(main) ✗


*/
