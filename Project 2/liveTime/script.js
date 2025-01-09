function showtime(){
    const date = new Date();
    let greetings="Good Morning";
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session ="AM";
    console.log(hours);
    if(hours<12 && hours>6){
        greetings="Good Morning";
    }
    else if (hours>12 && hours<18){
        greetings = "Good Evening";
    }
    else greetings="Good Night";
    if(hours>12){
        hours=hours-12;
        session ="PM";
    }
    hours =(hours<10)?"0"+hours:hours;
    minutes = (minutes<10)?"0"+minutes:minutes;
    seconds = (seconds<10)?"0"+seconds:seconds;

    let time = hours+ ":" + minutes + ":"+seconds+" "+ session;
    document.querySelector("#time").innerText=time;
    document.querySelector("#greetings").innerText = greetings;
}
setInterval(function(){
    showtime();
},1000);