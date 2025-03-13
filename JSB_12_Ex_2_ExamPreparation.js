function examPreparation(input) {
    let maximumBadMarks = Number(input[0])
    let i = 1;
    let numberOfProblems = 0;
    let badMarks = 0;
    let sum = 0;
    let problem = input[i];
    i++;
    let mark = Number(input[i]);
    let lastProblem = "";
    let stop = false;

    while (badMarks < maximumBadMarks) {
        if (mark > 4) {
            lastProblem = problem;
        } else {
            badMarks++;
            if (badMarks === maximumBadMarks) {
                stop = true;
                break;
            }
        }
        sum += mark;
        numberOfProblems++;
        i++;
        problem = input[i];
        i++;
        if (problem !== "Enough") {
            mark = Number(input[i]);
        } else {
            break;
        }
    }
    
    if (!stop) {
        let avg = (sum / numberOfProblems).toFixed(2);
        console.log(`Average score: ${avg}\nNumber of problems: ${numberOfProblems}\nLast problem: ${lastProblem}`);
    } else {
        console.log(`You need a break, ${badMarks} poor grades.`);
    }
}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])
//Average score: 5.25 
//Number of problems: 4 
//Last problem: Bus 
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"])
//You need a break, 2 poor grades.