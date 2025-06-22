"use strict";
//Basic Types 
//primitives  and reference
//[]{}() -->reference 
//primitive types(number ,string ,boolean->true or false )
// let a=12;
// console.log(typeof(a))
//Arrays
// let arr=[1,2,3,4,{name:"harsh"}]
// console.log(arr)
// console.log(typeof(arr))
//Tuples->Means fixed size 
// let arr:[string,number]=["Subhankar",22];
// console.log(arr)
// console.log(typeof(arr))
//Enums ->enumeration
// enums UserRoles{
//     Admin=12,
//     guest="Guest",
//     Super_Admin="superadmin"
// }
// UserRoles.Admin
//Any ,unknown,void Null,Undefined ,Never 
// let a:number;  -> giving a type of number so that in future we can only use 'a' as a number 
// let a;    // this is a typw called any 
// let a:unknown;
// a=12;
// a="harsh";
// difference between any and unknown is jokhon any use kori
//tokhon typescript amader upor depend hoea jai mne suppose 
//let a;
// a=12;
// a="harsh";
// s.toUpperCase();
//ai code ta valid noi but tobhu korbe and ai code ta valid noi
//karon a er ekbar type use korchi integer and akbar type use korchi 
//string so s.toUpperCase() ta suddho string er jonno use korte parbo
//but jokhon unknown use korbo tokhon 
//let a;
// a=12;
// a="harsh";
//if(typeof a==="string")
//{
// s.toUpperCase();
//}
//kaj korbe 
//void 
// function abcd():void
// {
//     console.log("hey")
// }
//NULL
// let a:null=null;
//Never
// function abcd():never
// {
//     while(true){}
// }
// abcd();
// console.log("hey");
//------------------------------------------------------------------------------
//Type Inference
//Understanding Type inference
//type annotations 
//------------------------------------------------------------------------------
//Interference and Types Alisases
//Defining interfaces 
//using Interfaces to define object shapes 
//Extending Interfaces 
//Type aliases
//Intersection types 
// interface User {
//     name: string;
//     email: string;
//     password: string;
//     gender?: string;
// }
// function getDataOfUser(): User {
//     return {
//         name: "Subhankar",
//         email: "ahjh@gmail.com",
//         password: "fgcbvhb"
//     };
// }
// const user = getDataOfUser();
// console.log(user.name); 
// getDataOfUser({name:"Harsh",email:"suhhbasj@gmail.com",password:"harsh"})
// interface User {
//     name: string;
//     email: string;
//     password: string;
//     gender?: string;
// }
// interface Admin extends User{
//     admin:boolean;
// }
// function abcd(obj:Admin)
// {
// }
//Type aliases
// type sankhya=number;
// let a:sankhya;
//-------------------------------------------------------------------------------
//classes and objects
//class defination 
//constructors
//access modifiers(public,private ,protected)
//readonly properties
//Optional properties 
//parameter properties
//getter and setter 
//staticc members 
//Abstract classes and methods 
