// Write a function that introduces yourself. It should take your name and your hometown and return a string that says "Hello, my name is [your name] and I am from [your hometown]."

function introduceYourself(name, hometown) {
    let introduction = `Hello, my name is ${name} and I am from ${hometown}`;

    return introduction;
}

// Then console.log the result of your function to the console.

console.log(introduceYourself("Niki", "Brooklyn"));
console.log(introduceYourself("John Doe", "NY"));
console.log(introduceYourself("Jane Doe", "Oz"));

/*
//Node.js is an environment for us to run javascript
When we type in node.js in the terminal, we are essentially calling a function called node

`npm` stands for node package manager
`npm` run test
`npm ./lesson00-setup/problem.test.js`



*/
