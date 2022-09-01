const stopwatch = () => {
    const display = document.querySelector('.display');
    let running = false;
    let startTime;
    let endTime;
    let interval;


    // Resets the screen display
    function resetDisplay() {
        display.textContent = '0.00';
    }


    // Resets the timer
    function resetTime() {
        startTime = new Date();
        resetDisplay();
    }


    // Updates the display every 0.05 seconds
    function updateDisplay() {
        let previousTime = Number(display.textContent) * 1000
        startTime = Number(new Date()) - previousTime;
        if (running === true) {
            interval = setInterval(() => {
                let currentTime = new Date();
                let displayNumber = (currentTime - startTime) / 1000;
                display.textContent = (Math.round(displayNumber * 100) / 100).toFixed(2);
            }, 43);
        } else {
            display.textContent = (Math.round(endTime * 100) / 100).toFixed(2);
        }
    }


    // Starts the timer
    const start = () => {
        if(running === true) {
            throw new Error('Stopwatch already running!');
        } else {
            running = true;
            updateDisplay();
        }
    }


    // Stops the timer
    const stop = () => {
        let currentTime = new Date();
        if (running === true) {
            endTime = (currentTime - startTime) / 1000;
            clearInterval(interval);
            running = false;
        } else {
            throw new Error("Timer hasn't been started!");
        }
    }


    // Resets the clock
    const reset = () => {
        resetTime();
    }

    return {start, stop, reset};
}

const sw = stopwatch();
console.log(sw)

const start = document.querySelector('.start')
start.addEventListener('click', sw.start)

const reset = document.querySelector('.reset')
reset.addEventListener('click', sw.reset)

const stop = document.querySelector('.stop')
stop.addEventListener('click', sw.stop)