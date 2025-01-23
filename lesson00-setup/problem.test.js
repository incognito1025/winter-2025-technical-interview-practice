const sayHello = require("./problem");

describe("sayHello", () => {
  test("should return 'Hello, World!'", () => {
    expect(sayHello()).toBe("Hello, World!");
  });
});

/*
//imports the `sayHello` function from the problem.js file in the current directory
//require() function in Node.js is used to import modules or other js files. It brings in the sayHello function so it can be tested.
//("./problem") - location of the file
      const sayHello = require("./problem"); 

//`describe` a Jest function that groups related tests together.
//takes two arguments:
//first argument is a string describing what is being tested (`sayHello`), which is  the function or feature being tested.
//second argument is a callback function that contains the individual test cases for the `sayHello` function
      describe("sayHello", () => {

//test("should return 'Hello, World!'", () => {
//test defined an individual test case.
//It takes two arguments a string description (`"should return 'Hello, World!'") of what the test is verifying.

  test("should return 'Hello, World!'", () => {
    expect(sayHello()).toBe("Hello, World!");
  });
});

//testing for the function to return "Hello, World!";


*/