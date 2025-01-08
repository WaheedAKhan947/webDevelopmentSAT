// Beginner Level MCQs
const beginnerMCQs = [
    {
        question: "What is the correct syntax to print a message in the console in JavaScript?",
        options: ["print('Hello World')", "console.log('Hello World')", "echo('Hello World')", "printf('Hello World')"],
        answer: 1
    },
    {
        question: "Which of the following is a JavaScript data type?",
        options: ["String", "Number", "Boolean", "All of the above"],
        answer: 3
    }
];

// Intermediate Level Short Answer Questions
const intermediateShortAnswers = [
    {
        question: "Explain the difference between '==' and '===' in JavaScript.",
        answer: "The '==' operator compares values for equality after converting both values to a common type. The '===' operator compares both values and types without performing type conversion."
    },
    {
        question: "What is a closure in JavaScript?",
        answer: "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope."
    }
];

// Advanced Level Scenario-Based Questions
const advancedScenarios = [
    {
        question: "You have an array of numbers. Write a function to find the sum of all even numbers in the array.",
        scenario: "Example: For the array [1, 2, 3, 4, 5, 6], the function should return 12.",
        answer: `function sumEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
}`
    },
    {
        question: "Explain how you would handle asynchronous operations in JavaScript.",
        scenario: "Provide examples using callbacks, promises, and async/await.",
        answer: `// Using Callbacks
function fetchData(callback) {
    setTimeout(() => {
        callback('Data fetched');
    }, 1000);
}

// Using Promises
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 1000);
    });
}

// Using Async/Await
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 1000);
    });
}

async function getData() {
    const data = await fetchData();
    console.log(data);
}`
    }
];
