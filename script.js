const stopwatch = () => {

    function resetTime() {
        start.startingPoint = new Date();
    }

    const start = () => {
        let startingPoint = new Date();
        console.log(startingPoint);
    }

    const stop = () => {
        console.log(start.startingPoint)
        let currentTime = new Date();
        if (currentTime - start.startingPoint > 0) {
        const finishTime = (new Date() - start.startingPoint) / 1000;
        console.log(finishTime);
        resetTime();
        } else {
            alert('TIMER HASNT BEEN STARTED')
        }
    }

    return {start, stop};
}

const sw = stopwatch();
console.log(sw)

const start = document.querySelector('.start')
start.addEventListener('click', sw.start) 

const stop = document.querySelector('.stop')
stop.addEventListener('click', sw.stop)