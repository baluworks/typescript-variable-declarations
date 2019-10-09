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
counterwithVar();
counterWithLet();

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

// destructuring
let arr = [1,2,3];
let [a,b,c] =arr;
console.log(a,b,c);
//swap a,b
[a,b] =[b,a];
console.log(a,b,c);
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;