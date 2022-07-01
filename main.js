let start = document.querySelector("#start")
let reset = document.querySelector("#reset")

let finish = document.querySelector("#finish")
let audio = document.querySelector('#sound')

let counter = document.querySelector("#counter")

let time = 1
let miliSeconds = 0
let seconds = 0
let minute = 0
let interval;

    start.addEventListener("click", () => {
       interval =  setInterval (() => {
        watch();
       }, time);

     
    })

    reset.addEventListener("click", () => {
       clearInterval(interval)
       seconds = 0
       minute = 0
       document.querySelector("#counter").innerText = `00:00:00`
       finish.value = ''
    })

    function watch () {
        miliSeconds++;

        if(miliSeconds == 60) {
            miliSeconds = 0;
            seconds++;

            if(seconds == 60) {
                seconds = 0;
                minute++;
            }
        }
        
        let format = (minute < 10 ? '0' + minute : minute) + ':' + (seconds <10 ? '0' + seconds : seconds) + ':' + (miliSeconds < 10 ? '0' + miliSeconds : miliSeconds);
        document.querySelector("#counter").innerText = format;

        if(minute == finish.value) {
            clearInterval(interval)
            minute = 0;
            seconds = 0;
            miliSeconds = 0;
            audio.play()
        }

        if(finish.value <= 0) {
            alert("impossivel cronometra informe um valor para ser terminado")
            minute = 0;
            seconds = 0;
            miliSeconds = 0;
            audio.pause()
        }
    }
