"use strict";
// 1
// const n: number = 5
// const arr: number[] = []
// for(let i = 0; i <= n; i++ ){
//   arr.push(i)
// }
// console.log(arr);
// 2
// const n: number = 5;
// const arr: number[] = [];
// for(let i = 0; i <= n; i++){
//   arr.push(2**i)
// }
// console.log(arr);
// 3
// const n: number = 5
// let sum: number = 0
// const arr: number[] = []
// for(let i = 0; i <= n; i++ ){
//   arr.push(i)
//   sum +=arr[i]
// }
// console.log(arr);
// console.log(sum);
// 4
// const n: number = 100;
// let sum: number = 0;
// let sum2: number = 0;
// const arr: number[] = [];
// for (let i = 0; i <= n; i++) {
//   arr.push(i);
//   if (i % 2==0) {
//     sum2 += arr[i];
//   }
//   if (i % 2 == 1) {
//     sum += arr[i];
//   }
// }
// console.log(arr);
// console.log(sum, sum2, sum - sum2);
// 5
// let num = prompt("enter the number")
// const nimadur = Number(num)
// const arr: number[]=[]
// for(let i = 0; i < nimadur; i++){
//   arr.push(i)
// }
// console.log(arr);
// 6
// const n: number = 100;
// const arr: number[] = []
// for(let i = n; i >= 0; i -- ){
//   arr.push(i)
//   console.log(i);
// }
// 7
// qoldirildi
// 8==================
// const n: number = 20;
// let k: number = 5
// let l: number = 10
// let sum: number = 0
// const arr: number[] = []
// for(let i = 1; i <= n; i ++ ){
//   arr.push(i)
// }
// for(let i = k; i <=l; i++){
//   console.log(i);
//  sum+=i
// }
// console.log(sum);
// 9==========
// const n: number = 12;
// let maxIndex: number = 0
// const arr: number[] = []
// for(let i = 1; i <= n; i ++ ){
//   arr.push(i)
// }
// for(let i = 0; i<arr.length; i++){
//   if(i % 2 == 0 && maxIndex <i){
//     maxIndex=i
//   }
// }
// console.log(maxIndex);
// 10==============
// const n: number = 12;
// const arr: number[] = []
// for(let i = 1; i <= n; i ++ ){
//   arr.push(i)
// }
// let minIndex: number = arr[0]
// for(let i = 0; i<arr.length; i+=2){
//   if( minIndex > arr[i]){
//     minIndex=arr[i]
//   }
// }
// console.log(minIndex);
// 11=================
// const n: number = 12;
// let maxIndex: number = 0
// const arr: number[] = []
// for(let i = 1; i <= n; i ++ ){
//   arr.push(i)
// }
// for(let i = 0; i<arr.length; i++){
//   if(i % 2 == 1 && maxIndex <i){
//     maxIndex=i
//   }
// }
// console.log(maxIndex);
// 12===========
// const n: number = 6;
// let m: number = 0
// const arr: number[] = []
// for(let i = 1; i <= n; i ++ ){
//   arr.push(i)
// }
// for(let i=0; i< arr.length; i++){
//   m+=arr[i]
// }
// m/=n
// console.log(m);
// 13==========
// const n: number = 10;
// let m: number = 0
// const arr: number[] = []
// for(let i = 1; i <= n; i ++ ){
//   arr.push(i)
// }
// for(let i =1; i < arr.length; i++){
//   if(i%2==1){
//     console.log(i);
//   }
// }
// 14================
// const n: number = 10;
// let count:number = 0;
// const arr:number[]=[];
// const arr1:number[] = [];
// for(let i = 0; i <= n; i++){
//   arr.push(i)
// }
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j<=arr[i]; j++) {
//         if (arr[i] % j == 0) {
//             count++;
//         }
//     }
//     if (count>=3) {
//         arr1.push(arr[i]);
//   }
//   count = 0;
// }
// console.log(arr1);
// 15==============
// const n: number = 10;
// const arr:number[]=[];
// const arr1:number[]=[]
// for(let i = 0; i <= n; i++){
//   arr.push(i)
// }
// for(let i = 0; i < arr.length; i++){
//   if(arr[i]%2==1){
//     arr1.push(arr[i])
//   }
// }
// console.log(arr1);
// 16=============
// const arr:any[]=[1,"2",true, false,"orif","nimadur",3,6];
// for(let i = 0; i < arr.length; i++){
//   if(typeof(arr[i]) === "string" ){
//     console.log(arr[i]);
//   }
// }
// 17===============
// const arr:number[] = [2,3,4,5,6,7,8,9,10,11];
// const arr1:number[] =[2,3,4,4653,434,57575,10,11,12,13]
// let arr2 = []
// for(let i of arr){
//     for(let j of arr1){
//         if(i === j){
//             arr2.push(j)
//         }
//     }
// }
// console.log(arr2)
// 18===================
// let num = prompt("enter array length");
// const nimadur = Number(num);
// const arr: number[] = [];
// for (let i = 0; i < nimadur; i++) {
//   let el = prompt("enter array element");
//   const arrEl = Number(el);
//   arr.push(arrEl);
// }
// console.log(arr);
// 19=============
//  let num = prompt("enter array length");
// const nimadur = Number(num);
// const arr: number[] = [];
// let sum:number = 0
// for (let i = 0; i < nimadur; i++) {
//   let el = prompt("enter array element");
//   const arrEl = Number(el);
//   arr.push(arrEl);
// }
// for(let i = 0; i<arr.length; i++){
//   sum+=arr[i]
// }
// console.log(sum);
// 20================
// let n = prompt("Array uzunligi")
// const nimadur = Number(n);
// const arr:number[] = []
// for(let i=0; i<nimadur; i++){
//     let m = prompt("Array elementlari")
//     const el = Number(m);
//     arr.push(el)
// }
// let a =prompt("enter any")
// if(a === "juft"){
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//       }
//     }
// }else if(a==="toq"){
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 1) {
//         console.log(arr[i]);
//       }
//     }
// }
// 21=============
// const arr:number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// let num = arr.pop()
// console.log(num);
// 22chi masala
// const arr1:number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2:number[] = [2, 3, 4, 4653, 434, 57575, 10, 11, 12, 13];
// const arr3:number[] =[...arr1, ...arr2];
// let result:number[]=[]
// for(let i=0; i<arr3.length;i++){
//   if(!result.includes(arr3[i])){
//     result.push(arr3[i])
//   }
// }
// console.log(result);
