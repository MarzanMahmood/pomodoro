var minute = 25;
var second = "00";

function halosaar(){
    document.getElementById("minute").innerHTML =  minute;
    document.getElementById("second").innerHTML =  second;
}

function chalo(){
    minute = 24;
    second = 59;
    document.getElementById("minute").innerHTML =  minute;
    document.getElementById("second").innerHTML =  second;

    var minute_interval = setInterval(minuteTimer, 60000);
    var second_interval = setInterval(secondTimer, 1000);

    function minuteTimer(){
        minute = minute - 1;
        document.getElementById("minute").innerHTML = minute;

    }

    function secondTimer(){
        second = second - 1;
        document.getElementById("second").innerHTML = second;


        if(second == 0){
            second = 60;
        }
}
}

