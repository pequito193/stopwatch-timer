const stopwatch = () => {
    const display = document.querySelector('.display');
    let running = false;
    let startTime = 0;
    let endTime = 0;
    let interval;


    // Resets the screen display
    function resetDisplay() {
        const display = document.querySelector('.display')
        display.textContent = '0.00';
    }


    // Resets the timer
    function resetTime() {
        startTime = new Date();
        resetDisplay();
    }


    // Updates the display every 0.05 seconds
    function updateDisplay() {
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
            startTime = new Date();
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