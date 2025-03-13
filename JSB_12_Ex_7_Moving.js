function moving(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let volume = length * width * height;
    let i = 3;
    let command = input[i];
    let currentBoxes = 0;
    while (command !== "Done") {
        currentBoxes = Number(command);
        volume -= currentBoxes;
        if (volume < 0) {
            break;
        }
        i++;
        command = input[i];
    }
    if (volume < 0) {
        console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`)
    } else {
        console.log(`${volume} Cubic meters left.`);
    }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"])
//No more free space! You need 2 Cubic meters more. 
moving(["10", "1", "2", "4", "6", "Done"])
//10 Cubic meters left.