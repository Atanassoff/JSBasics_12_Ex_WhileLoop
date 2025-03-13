function walking(input) {
    let i = 0;
    let command = input[i];
    let currentSteps = 0;
    let sum = 0;
    while (command !== "Going home") {
        currentSteps = Number(command);
        sum += currentSteps;
        i++;
        command = input[i];
        if (sum >= 10000) {
            break;
        }
    }
    if (command === "Going home") {
        i++;
        currentSteps = Number(input[i]);
        sum += currentSteps;
    }
    let diff = Math.abs(10000 - sum);
    if (sum >= 10000) {
        console.log(`Goal reached! Good job!\n${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal.`)
    }
}

walking(["1000", "1500", "2000", "6500"])
//Goal reached! Good job! 1000 steps over the goal! 
walking(["1500", "300", "2500", "3000", "Going home", "200"])
//2500 more steps to reach goal.
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])
//Goal reached! Good job! 298 steps over the goal! 
walking(["125", "250", "4000", "30", "2678", "4682"])
//Goal reached! Good job! 1765 steps over the goal!