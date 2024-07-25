// Exercise-1
// function greet(name,callback){
//     console.log("Hello! How are you"+" "+ name);
//     callback();
// } 
// greet("Nikhil",function callback(){
//     console.log("Greeting through callback function");
// });


// Exercise-2
// function fetchData(data,callback){
//     setTimeout(()=>{
//         console.log("Fetching the data is"+data);
//         // in output we will see the value of data is undefiend because we store data in let 
//         // because variable that store in let/const hoisted but not initialzed instead of let i use the var then output would be diffrent
//     },5000);
//     callback(this.data);
// }
// let data=12;
// fetchData(data,function callback(data){
//     console.log("Fetched data is"+" " +data)
// });

//Exercise-3----doubt???
// function doHomework(subject,startCallback,progressCallback,completeHomework){
//     function startCallback(subject){
//         console.log("starting the assignment of"+" "+subject);
//     };
//     startCallback(subject);
//     function progressCallback(subject){
//         console.log("progressing the assignment of"+" "+subject);
//     };
//     progressCallback(subject);
//     function completeHomework(subject){
//         console.log("completing the assignment of"+" "+subject);
//     };
//     completeHomework(subject);
// }
// var subject="Javascript";
// doHomework(subject);

//Excercise-4
//  const pro= new Promise((resolve,reject)=>resolve(setTimeout(()=>{console.log("Data fetched Succesfully")},3000)));
// 
// const pro=new Promise((resolve,reject)=>{console.log("promise object is created")});
// pro.then(
// //   setTimeout(()=>{console.log("Data is fetched successfuly")},3000)
// // why this is not working
// // (res)=>console.log("data fetched successfully")
// );

//Excercise -5
// const promise=new Promise((resolve,reject)=>{console.log("promise is created")});

// let data=0.1;
// if(data>0.5){
//     promise.then(console.log("Data fetched successfully"));
// }
// else{
//     promise.catch(console.log("Data fetch failed"));
// }

// Exercise-6
// const fetchUserdata=new Promise((resolve,reject)=>{resolve("Successfully")});
// const fetchUserPost=new Promise((resolve,reject)=>{resolve("Successfuly")});
 
// fetchUserdata.then(function userData(){
//     setTimeout(()=>{console.log("fetching user data")},2000);
// }).then(function postData(){
//     setTimeout(()=>{console.log("fetching post data")},3000);
// });

// Exercise-7
// const fetchWeather=new Promise((resolve,rejrct)=>{setTimeout(()=>{resolve("fetched the weather data")},2000)});
// const fetchNews=new Promise((resolve,reject)=>{setTimeout(()=>{resolve("fetched the weather-news  data")},5000)});

// // why in an arrary value is undefined
// const fetchWeather=new Promise((resolve,rejrct)=>{setTimeout(()=>{resolve(console.log("fetched the weather data"))},2000)});
// const fetchNews=new Promise((resolve,reject)=>{setTimeout(()=>{resolve(console.log("fetched the weather-news  data"))},5000)});

// Promise.all([fetchWeather,fetchNews]).then((res)=>console.log(res));

//Exercise-10
// const fetchWeather=new Promise((resolve,rejrct)=>{setTimeout(()=>{resolve(console.log("fetched the weather data"))},2000)});
// const fetchNews=new Promise((resolve,reject)=>{setTimeout(()=>{resolve(console.log("fetched the weather-news  data"))},5000)});

// async function weatherData(){
//     const p=await fetchWeather;
//     console.log(p);
//      const q=await fetchNews;
//      console.log(q);
// }

//Exercise-11
async function getUserData(){
    try{
           
            console.log("fetching user data")
            nhjgkjg();
    }
    catch (errr){
          console.log("Error");
    }
}
const user={age:10}
getUserData();