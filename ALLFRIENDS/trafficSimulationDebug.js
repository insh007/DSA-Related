const config = {
    minGreenDurationInMilliSeconds: 10000,
    numberOfCarsPassThroughIntersectionPerSecond: 1,
    maxWaitForGreenInMilliSeconds: 30000,
    carsForGreen: 3,
    streetNames: ['A', 'B', 'C'],
};

// Initialize the state of the traffic light
const trafficLight = {
    currentGreenIndex: 0,
    greenStartTime: 0,
    streetQueues: config.streetNames.map(() => []),  //mapping over street  name
};

// to add a car to a street's queue
const addCar = (streetIndex) => {
    trafficLight.streetQueues[streetIndex].push(Date.now());
};

// Function to switch to the next green phase
const switchGreen = () => {
    const now = Date.now();
    const currentGreenDuration = now - trafficLight.greenStartTime;
    const currentGreenIndex = trafficLight.currentGreenIndex;
    const nextGreenIndex = (currentGreenIndex + 1) % config.streetNames.length;

    // Inshad Ali - Change here
    // Rule 2: Check if the maximum wait time for the cars on the current green phase has been exceeded
    if (trafficLight.streetQueues[nextGreenIndex].length === 0 &&
        trafficLight.streetQueues[currentGreenIndex].length > 0 &&
        now - trafficLight.streetQueues[currentGreenIndex][0] >= config.maxWaitForGreenInMilliSeconds) {
        trafficLight.currentGreenIndex = nextGreenIndex;
        trafficLight.greenStartTime = now;
        return;
    }

    // Inshad Ali - change here
    // Rule 1: Check if the current green phase hasn't reached the minimum duration and there are cars waiting
    if (currentGreenDuration < config.minGreenDurationInMilliSeconds &&
        trafficLight.streetQueues[currentGreenIndex].length > 0) {
        // If the current green phase hasn't reached the minimum duration and there are cars waiting,
        // we don't switch to the next green phase yet
        return;
    }

    // Rule 3: Check if the number of cars waiting on the current green phase has reached the limit
    if (trafficLight.streetQueues[currentGreenIndex].length >= config.carsForGreen) {
        return;
    }

    // Rule 4: Switch to the next green phase if there are no cars waiting on the current green phase
    if (trafficLight.streetQueues[currentGreenIndex].length === 0) {
        trafficLight.currentGreenIndex = nextGreenIndex;
        trafficLight.greenStartTime = now;
        return;
    }
};

setInterval(() => {

    console.log(`Current Green: Street ${config.streetNames[trafficLight.currentGreenIndex]}`);

    switchGreen();
}, 1000);


/* --------------- Overall Change -------------------- */
/*

In the switchGreen() function, I have changed the order of rules so that Rule 2 is checked before Rule 1. This ensures that if the current green phase has reached the minimum duration but there are no cars waiting, we switch to the next green phase if there are cars waiting on the next street.

I have added a check in Rule 2 to make sure that we only switch to the next green phase if the maximum wait time for the cars on the current green phase has been exceeded. This is done by checking the time elapsed since the first car in the queue of the current green phase.


*/