
let arr=["apple","banana","mango","orange"];
//copying the array
let farr1=arr.filter((ele)=>{
  console.log(ele);
  return true;
     
})
console.log(farr1);

let arr3=[20,15,10,30];
//select element less than 15
let farr3=arr3.filter((ele)=>{
  console.log(ele);
  return ele<=15;
    
})
//IF YOU HAVE ONE PRAMETER THEN YOU CAN REMOVE THE BRACES 
//let farr3=arr3.filter(ele=>ele<=15);
console.log(farr3);
let farr4=arr3.filter(ele=>{
  console.log(ele);
  return ele<=15
  })
console.log(farr4);
//IF YOU HAVE ONE PRAMETER THEN YOU CAN
//REMOVE THE BRACES
let farr5=arr3.filter(ele=>ele<=15);
console.log(farr5);
let people=[18,20,16,15,21]
let adult=people.filter(ele=>ele>=18);  
console.log(adult);
let arr6=[10,20,30,40,50];
arr6.map((ele)=>{
  console.log(ele);
  
})
let doller=[10,20,30,40,50];
let aud=doller.map(ele=> ele*1.5)
console.log(aud);
