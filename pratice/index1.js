// function sujit(name="guest") {
//     console.log('welcome ' + name +'!');    
// }
// sujit();

//arguments method
// function sum() {
//    let array=Array.from(arguments);
//    console.log(array);
//   let sum= array.reduce(function(acu,curr){
//     return  acu+curr;
//   },0)
//   return sum;
// }

// ... method

// function sum(... numbers) {
//     console.log(numbers);
//     // let sum= numbers.reduce(function(acu,curr){
//     //     return acu,curr;
//     // },0)
//     // return sum;

//     // or

//     return numbers.reduce(function(acu,curr){
//         return acu,curr;
//     },0)
    
//  }
// console.log(sum(2,4))
// //  if you went  to parameter not take arguments in order then you can use object so in object pass you should pass all the object arguments in the callibrackets
// function greeting({name,city}){
//     console.log('welcome '+name+' come from city '+city);
// }

// greeting( {city:'bermbhapur',name:'sujit'});
// function start(params) {
//     console.log("only programming");
// }
// start();



// function mkd(name="maakandhunidevi") {
//     console.log('jay ${name} ' +name);
//   this.name=name;
// }
// mkd();
// let su=new mkd("radhekrusna");


// let arrow=(name)=>console.log("sujit"+name);

// arrow("panigrahi")

// array creation 

// first method 

// let num=[2,3,4];
// console.log(num);

// second method 
 
// let nums=new Array(3,5,6);
// console.log(nums);

// if you only store one element then it will print the size of the array for example 

// let nums=new Array(2);
// console.log(nums);

 // third method for declelation of array 

 // same   as first method but just different. the name of this method is lateral method 

//  let nums=Array(2,3,4);
//  console.log(nums)

// accees the element in array 
// you can use    the looping method for acces the element of  array

// let nums =[1,3,4,5];
// for(let i=0;i<nums.length;i++){
//     console.log(i+"th index no is "+ nums[i]);
// }

// you can use also a new for of  loop which have lunched recently 
// for (let num of nums) {
//     console.log("the value is "+ num)
// }
// let length=nums.length;
// nums[length]=6;
// for (let num of nums) {
//     console.log("the value is "+ num)
// }
    
// let nums=[1,2,3,4,5];
// push add the element at last index of array
// nums.push(6);

// nums.push(6);
// nums.push(7);
// console.log(nums);

// console.log(nums.pop());

// nums.unshift(5); // add the element at biging of the array
// nums.unshift(6); // add the element at beging of the array 
// console.log(nums)
// console.log(nums.shift());  // remove first element of the array 

// let nums=[1,2,3,4,5];

// console.log(nums.slice(0,2))  // slice method is return a new array basics of staring index and ending index but not including the end index ex: nums.slice(0,2) so here 0 is starting index and 2 is ending index so here it will creat a new array from 0 to 1 index 

// console.log(nums.slice(0))
// console.log(nums.slice(-2))
// console.log(nums.slice())  // this is a shallow copy of a array by using th slice  
// console.log("main array: ", nums)
// nums.splice(1,1,6)
// console.log(nums)
// console.log( "remove element from aray : "+nums.splice(1,2,9))
// console.log(nums)
// nums.splice(1,2)
// console.log(nums)

// concat method 
let nums=[1,2,3,4,5];
nums=nums.concat(6,7);
// console.log(nums.concat([6,7]))
console.log(nums);








