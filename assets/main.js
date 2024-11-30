const CurrentYear=new Date().getFullYear()
console.dir();

const newYear=new Date(`January 1 ${CurrentYear+1} 00:00:00`)

const CurrentDate=new Date()
let diff=newYear-CurrentDate
var days=Math.floor(diff/1000/60/60/24)
var hours=Math.floor(diff/1000/60/60)%24
var minutes=Math.floor(diff/1000/60)%60
var seconds=Math.floor(diff/1000)%60

var countDays=document.getElementById("days")
var countHours=document.getElementById("hours")
var countMinutes=document.getElementById("minutes")
var countSeconds=document.getElementById("seconds")
function updateCounter(){

    const CurrentYear=new Date().getFullYear()
    console.dir();
    
    const newYear=new Date(`January 1 ${CurrentYear+1} 00:00:00`)
    
    const CurrentDate=new Date()
    let diff=newYear-CurrentDate
    var days=Math.floor(diff/1000/60/60/24)
    var hours=Math.floor(diff/1000/60/60)%24
    var minutes=Math.floor(diff/1000/60)%60
    var seconds=Math.floor(diff/1000)%60
    
    var countDays=document.getElementById("days")
    var countHours=document.getElementById("hours")
    var countMinutes=document.getElementById("minutes")
    var countSeconds=document.getElementById("seconds")



countDays.textContent=days<10?"0"+days:days
countHours.textContent=hours<10?"0"+hours:hours
 countMinutes.textContent=minutes<10?"0"+minutes:minutes
 countSeconds.textContent=seconds<10?"0"+seconds:seconds


}

setInterval(updateCounter, 1000);

/*
1000ms=1s
60s=1min
60min=1h
24hr=1day




*/ 