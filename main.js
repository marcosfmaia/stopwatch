let start = document.querySelector("#start");
let reset = document.querySelector("#reset");

let minute = 0;
let seconds = 0;
let miliSeconds = 0; 
let time = 1 // Alterar para 1000 mile segundos para os segundos certo
let interval;


    start.addEventListener("click", () => {
        interval = setInterval(() => {
            watch();
        }, time);
    });

    reset.addEventListener("click", () => {
       clearInterval(interval)
       minute = 0;
       seconds = 0;
       miliSeconds = 0;
       document.querySelector("#counter").innerText = `00:00:00`;
    
    });

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


        if(minute == 1) {
            clearInterval(interval)
            minute = 0;
            seconds = 0;
            miliSeconds = 0;
            document.querySelector("#counter").innerText = "Acabou o Intervalo vamos voltar a aula"
        }
    };
