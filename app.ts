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

// class Device{
//     name="lg";
//     price=12000;
//     category="digital";
// }
// let d1=new Device();
// let d2=new Device();

// console.log(d1);

// class bottle{
//     radius=120;
//     price=12000;
//     color="blue"
// }
// let b1=new bottle();
// console.log(b1.color);


//constructor
//ek aisi machine jo ki produce kr rhi hai final consumable product

// class BottleMaker {
//     constructor(public name: string, public price: number) {
//         this.name = name;
//         this.price = price;
//     }
// }

// let b1 = new BottleMaker("Milton", 1200);
// console.log(b1);


// class HumanMaker{
//     age=0;
//     constructor(public name:string,public isHandsome:boolean){}
// }
// let h1=new HumanMaker("Subhankar",true)
// console.log(h1);


//this keyword

// class BottleMaker {
//     public name;
//     public price;
//     constructor( name: string, price: number) {
//         this.name = name;
//         this.price = price;
//     }
// }
// let b1 = new BottleMaker("Milton", 1200);
// console.log(b1);




//Access Modifiers

// class BottleMaker {
//     constructor( public name:string) {
//     }
// }
// class metalBotlemaker extends BottleMaker{
//     constructor(public name:string) {
//         super(name);
//     }
//     getValue()
//     {
//         console.log(this.name);
        
//     }
// }
// // let b1 = new BottleMaker("Milton");
// let b2=new metalBotlemaker("milton")
// b2.getValue();



// class User{
//     constructor(public readonly name:string)
//     {

//     }
//     changename()
//     {
//         this.name="hello"
//     }
// }
// let u1=new User("Harsh")
// u1.changename()



//optional properties

// class User{
//     constructor(public name:string,public age:number, public gender?:string){}

// }
// let u1=new User("Harsh",25,"male")
// let u2=new User("Surat",22)



//Parameter properties
// class User{
//     // public name;
//     // public age
//     constructor(public name:string,public age:number){
//         // this.name=name;
//         // this.age=age;
//     }

// }



//getter and setters

// class User{
//     constructor(public _name:string,public age:number){}
//     get name()
//     {
//         return this._name;
//     }
//     set name(value:string)
//     {
//         this._name=value;
//     }
// }
// let u1=new User("Harsh",25)




//static Members

// class sherry{
//     static version=1.0;
//      static getRnadomNumber()
//      {
//         return Math.random()
//      }
// }



//Abstract Classes 
//iska matlab essetial cheze required
//suppose ek class banaya cooking ka 
//usme essential kya kya hona chaiye?
//gas and gas ka name essential hei kyunki without  gas hum cooking hein nahi kar sakte hein 
// ab ye hogeya essential class 
// ab iss cooking class ko hum extend kar sakte hein 
//thats all about Abstract class 




//Function 
// function abcd(name:string,cb:(value:string)=>void)
// {
// }
// abcd("harsh",(value:string)=>{
//     console.log(value);
// })



// function abcdef(name: string, cb: (value: number) => number) {
//     console.log("Name:", name);
//     console.log("Callback output:", cb(42)); // Example usage
// }

// abcdef("Subhankar", (value: number) => {
//     return value;
// });



// function ab(name:string,age:number,cb:(value:string)=>void)
// {
//     cb("heyy")
// }
// ab("harsh",25,(value:string)=>{
//     console.log(value);
// })




//optional parameters

// function abcd(name:string,age:number,gender?:string)
// {
//  console.log(name,age,gender)
// }
// abcd("harsh",25,"male");
// abcd("hcc",22,) // here gender become optional 




//default parameters

// function abcd(name:string,age:number,gender:string="Dont want to reveal gender")
// {
//  console.log(name,age,gender)
// }
// abcd("harsh",25);



//function rest parameters
//rest operator 

// function sum(...arr:number[])
// {
//     // console.log(arr)
//     // console.log(arr[0]);
// }
// sum(1,2,3,4,5,6,7,8,9,)

//spread operator
// var arr=[1,2,3,4,5];
// var arr2=[...arr];



//function overloading 
// function abcd(a:string):void;
// function abcd(a:string,b:number):number;

// function abcd(a:any ,b?:any)
// {
//     if(typeof a==="string" && typeof b===undefined)
//     {
//         console.log("heyy");
        
//     }
//      if(typeof a==="string" && typeof b==="number")
//      {
//         return 123
//      }
//      else throw Error("Something is wrong ");
   
// }


//generics



//Generic Function

// function abc<T>(a:T)
// {
//     console.log(a)
// }
// abc<string>("harsh")
// abc<Number>(12)
// abc(true)


//Generic Interfaces 
// interface Halua<T>{
//     name:string;
//     age:number;
//     key:T
// }

// function abcd(obj:Halua<Boolean>){
// }

// abcd({name:"flnjdns",age:23,key:true})




//generic classes

// class BottleMaker<T>{
//     constructor(public key:T){}
// }

// let b1=new BottleMaker("hey")
// console.log(b1);

//This will not work 
// function abcd<T>(a:T,b:T):T
// {
//     return "hey";
// }
// abcd<string>("hey","hello")


//but this will work
// function abcd<T>(a:T,b:T):T
// {
//     return a;
// }
// abcd<string>("hey","hello")


//and this will also work
// function abcd<T>(a:T,b:T):T
// {
//     return "hey" as T;
// }
// abcd<string>("hey","hello")



//Type Assertion 
// let a :any=12;
// (a as string).



//type guards->type narrowing 
// function abcd(a:string | number)
// {
//     if(typeof a=="number")
//     {
//         // a.
//     }
// }

// abcd(12);
// abcd("hello")


