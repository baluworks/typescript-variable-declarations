// Import stylesheets
import './style.css';

// with var
function counterwithVar(){
  for(var i=0;i<10;i++){
  (function (i){
 setTimeout(()=>{
      console.log(`var${i}`);
    },100*i)
  })(i);
   
  }
}

function counterWithLet(){
  for(let i=0;i<10;i++){
    setTimeout(()=>{
      console.log(`let${i}`);
    },i*1000);
  }
}
// counterwithVar();
// counterWithLet();

//const

const obj ={
  first:'1',
  second:'2'
};

obj={
   first:'10',
  second:'20',
  last:'30'
};
console.log(obj);

// Array destructuring
let arr = [1,2,3];
let [a,b,c] =arr;
console.log(a,b,c);
//swap a,b
[a,b] =[b,a];
console.log(a,b,c);

//rest operator for Array
let firstArray = ['a','b','c','d'];
let newArray = [...firstArray,'e','f'];
console.log('FirstArray:',firstArray);
console.log('newArray:',newArray);

// rest operator for tuple
let firstTuple :[number,string,boolean] =[544368,'Balajee',true];

let [x,y,z]= firstTuple;
console.log(x,y,z);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;