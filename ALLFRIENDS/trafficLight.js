/*
Write a simple traffic light simulation using JavaScript and the 'config' variable below.

The traffic light controls an intersection with multiple streets, see 'config.streetNames'. Only one street is given green light at any given time. This street lets 'config.numberOfCarsPassThroughIntersectionPerSecond' cars pass through the intersection.

For the switching green, these rules apply in declining priority:

1. Rule: Each green phase has to be at least 'config.minGreenDurationInMilliSeconds' long, unless there are no cars going through the green light.

2. Rule: When a street has waited config.maxWaitForGreenInMilliSeconds' or longer it should receive green.

3. Rule: When a street has 'config.carsForGreen' or more cars waiting it should receive green.

4. Rule: When all cars have passed through green, the street that has waited the longest and has cars queued should receive green.

A function 'addCar(streetIndex)' is used to queue cars at the intersection. The function is called from somewhere else outside this scope. You can assume no thread related issues.

*/

// const config = {
//     // A green phase must be at least this long
//     minGreenDurationInMilliSeconds: 10000,
//     // Every second this many cars go through the green light
//     numberOfCarsPassThroughIntersectionPerSecond: 1,
//     // If a street waited this long or longer, it should receive green
//     maxWaitForGreenInMilliSeconds: 30000,
//     // Number of cars that will give a street priority for the next green
//     carsForGreen: 3,
//     // The streets for this intersection:
//     streetNames: ['A', 'B', 'C'],
// }
//   */ ------------- the end


// Define configuration for the intersection
const config = {
    minGreenDurationInMilliSeconds: 10000, // minimum green light duration for a street in milliseconds
    numberOfCarsPassThroughIntersectionPerSecond: 1, // number of cars that can pass through the intersection in one second
    maxWaitForGreenInMilliSeconds: 30000, // maximum time in milliseconds to wait for a green light on a street
    carsForGreen: 3, // minimum number of cars that must be waiting for a street to get a green light
    streetNames: ['A', 'B', 'C'] // names of the streets at the intersection
  };
  
  // Initialize variables to keep track of the current green light status and street information
  let greenLightIndex = 0;
  let greenLightTimerId = null;
  let greenLightStartTime = null;
  let streets = [];
  
  // Define a Street class to keep track of waiting cars and the last time the street had a green light
  class Street {
    constructor(name) {
      this.name = name;
      this.waitingCars = [];
      this.lastGreenTime = null;
    }
  }
  
  // Initialize the streets array with the names of the streets at the intersection and start the green light cycle
  function initialize() {
    streets = config.streetNames.map((name) => new Street(name));
    console.log(streets)
    startGreenLightCycle();
  }
  
  // Start the green light cycle by selecting the next street to get a green light and setting a timer for the minimum green light duration
  function startGreenLightCycle() {
    greenLightIndex = getNextGreenLightIndex();
    greenLightStartTime = Date.now();
    greenLightTimerId = setTimeout(switchToNextGreenLight, config.minGreenDurationInMilliSeconds);
  }
  
  // Switch the green light to the next street by updating the last green time for the current street, selecting the next street to get a green light, and setting a timer for the minimum green light duration
  function switchToNextGreenLight() {
    streets[greenLightIndex].lastGreenTime = Date.now();
    greenLightIndex = getNextGreenLightIndex();
    greenLightStartTime = Date.now();
    greenLightTimerId = setTimeout(switchToNextGreenLight, config.minGreenDurationInMilliSeconds);
  }
  
  // Get the index of the next street to get a green light based on the number of waiting cars and the time since the last green light
  function getNextGreenLightIndex() {
    let nextGreenLightIndex = greenLightIndex;
    let maxWaitForGreen = config.maxWaitForGreenInMilliSeconds;
  
    for (let i = 0; i < streets.length; i++) {
      const street = streets[nextGreenLightIndex];
      if (street.waitingCars.length >= config.carsForGreen) {
        // If the number of waiting cars on the current street is greater than or equal to the minimum number of cars required for a green light, return the index of the current street
        return nextGreenLightIndex;
      }
  
      const timeSinceLastGreen = street.lastGreenTime === null ? maxWaitForGreen : Date.now() - street.lastGreenTime;
      if (timeSinceLastGreen >= maxWaitForGreen) {
        // If the time since the last green light for the current street is greater than or equal to the maximum time allowed to wait for a green light, select the current street as the next street to get a green light
        nextGreenLightIndex = i;
        maxWaitForGreen = timeSinceLastGreen;
      }
    }
  
    // Return the index of the street that has waited the longest for a green light
    return nextGreenLightIndex;
  }
  
// Function to add a car to a street's waiting cars queue
function addCar(streetIndex) {
    const street = streets[streetIndex];
    street.waitingCars.push(null);

    // If the current street has the green light and there is only one car waiting, do nothing
    if (greenLightIndex === streetIndex && street.waitingCars.length <= 1) {
        return;
    }

    // If a green light cycle is in progress, clear the timeout to prevent the cycle from completing
    if (greenLightTimerId !== null) {
        clearTimeout(greenLightTimerId);
    }

    // Calculate how many cars have passed through the intersection since the start of the green light cycle
    const elapsedTime = Date.now() - greenLightStartTime;
    const carsPassed = Math.floor(elapsedTime / 1000) * config.numberOfCarsPassThroughIntersectionPerSecond;
    const carsRemaining = street.waitingCars.length - carsPassed;

    // If there are enough cars waiting on the street to trigger a green light cycle, start the cycle
    if (carsRemaining >= config.carsForGreen) {
        greenLightIndex = streetIndex;
        startGreenLightCycle();
    // If there are not enough cars waiting, start a new green light cycle with the remaining time of the current cycle    
    } else {
        greenLightTimerId = setTimeout(startGreenLightCycle, config.minGreenDurationInMilliSeconds - elapsedTime);
    }
}

// Call initialize to start the simulation
initialize();
