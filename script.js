// Part 1: Mastering JavaScript Basics

// variables
let userName = "Fred";
const currentTime = new Date().getHours();
let greetingMessage;

if (currentTime < 12) {
    greetingMessage = "Good morning, " + userName + "!";
} else if (currentTime < 18) {
    greetingMessage = "Good afternoon, " + userName + "!";
} else {
    greetingMessage = "Good evening, " + userName + "!";
}

document.getElementById('greeting-output').textContent = greetingMessage;

console.log("Part 1: The greeting has been set.");

// Part 2: JavaScript Functions

// Function 1: 
function addNumbers(a, b) {
    return a + b;
}

// Function 2: 
function toggleContent() {
    const textElement = document.getElementById('toggleText');
    textElement.classList.toggle('hidden');
}

// Call the functions
let sum = addNumbers(5, 10);
console.log("Part 2: The sum of 5 and 10 is: " + sum);

const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', toggleContent);

console.log("Part 2: The toggle function is ready.");

// Part 3: JavaScript Loops

// Example 1: 
const loopList = document.getElementById('loopList');
for (let i = 1; i <= 3; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = "Item " + i;
    loopList.appendChild(listItem);
}

// Example 2: 
const colors = ["red", "green", "blue"];
colors.forEach(function(color) {
    console.log("Part 3: I like the color " + color);
});

// Part 4: Mastering the DOM
const changeColorButton = document.getElementById('changeColorButton');
const colorBox = document.getElementById('colorBox');

// Add a click listener to the button
changeColorButton.addEventListener('click', function() {
    colorBox.style.backgroundColor = "skyblue";
    colorBox.textContent = "Color changed!";
    
});

console.log("Part 4: DOM events are ready.");