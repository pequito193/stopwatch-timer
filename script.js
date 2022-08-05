const stopwatch = () => {
    let running = false;
    let startTime = 0;
    let endTime = 0;
    let duration = 0;


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
        setInterval(() => {
            let currentTime = new Date();
            const display = document.querySelector('.display')
            display.textContent = (currentTime - startTime) / 1000;
        }, 50);
    }


    // Starts the timer
    const start = () => {
        if(running = false) {
            throw new Error('Stopwatch already running!');
        } else {
            running = true;
            startTime = new Date();
            updateDisplay();
        }
    }


    // Stops the timer
    const stop = () => {
        if (running = true) {
        endTime = (new Date() - start.startingPoint) / 1000;
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