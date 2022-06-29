let start = document.querySelector("#start")
let reset = document.querySelector("#reset")

let seconds = 0
let minute = 0
let interval;

    start.addEventListener("click", () => {
        interval = setInterval(watch, 10)
    })

    reset.addEventListener("click", () => {
       clearInterval(interval)
       seconds = 0
       minute = 0
       document.querySelector("#counter").innerText = `00:00`
    
    })

    function watch () {
        seconds++
        if(seconds == 60) {
            minute++
            seconds = 0
        }
        document.querySelector("#counter").innerText = `${minute} : ${seconds}`
    }