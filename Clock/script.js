//BASIC CONCEPTS ON DATES.

//TO CREATE NEW DATE OBJECT 
//SYNTAX:  let date = new Date()//creating using contructor.

// let currdate = new Date();
// console.log(`The  current date are ${currdate}`);
// let hours =  currdate.getHours();//0-23
// console.log(`The  current hour are ${hours}`);
// let minutes =  currdate.getMinutes();
// console.log(`The  current minutes are ${minutes}`);
// let seconds =  currdate.getSeconds();
// console.log(`The  current seconds are ${seconds}`);


//we can also set the custom date.
 
// let customdate = new Date("20 Aug 2022");
// console.log(customdate);







const hours = document.getElementById("hours");
const mintues = document.getElementById("minutes");
const seconds  = document.getElementById("seconds");
const AmorPm   = document.getElementById("amorpm");




//function to get data the index file.

function UpdateClock(){
   let h = new Date().getHours();
   let m  = new Date().getMinutes();
   let s  = new Date().getSeconds();
   let ampm = hours >= 12 ? 'PM' : 'AM';
   
   h = h< 10 ? "0"+h :h;
   m = m<10 ? "0"+m :m;
   s = s<10 ? "0"+s :s;



   // Updating Time.
   hours.innerHTML = h;
   mintues.innerHTML = m;
   seconds.innerHTML = s;
   AmorPm.innerHTML = ampm;
   


   setTimeout(()=>{
    UpdateClock()
   })
}
UpdateClock()


