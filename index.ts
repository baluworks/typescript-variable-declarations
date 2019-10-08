// Import stylesheets
import './style.css';

console.log("before declaration ",a);
let a =10;
console.log("after declaration ",a);
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;