function cake(input) {
    let i = 0;
    let length = Number(input[i]);
    i++;
    let width = Number(input[i]);
    i++;
    let allPieces = length * width;
    let command = input[i];
    i++;
    let currentPieces = 0;
    let leftCake = true;
    while (command !== "STOP") {
        currentPieces = Number(command);
        allPieces -= currentPieces;
        if (allPieces <= 0) {
            leftCake = false;
            break;
        }
        command = input[i];
        i++;
    }
    if (leftCake) {
        console.log(`${allPieces} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(allPieces)} pieces more.`);
    }
}

cake(["10", "10", "20", "20", "20", "20", "21"]) //No more cake left! You need 1 pieces more. 
cake(["10", "2", "2", "4", "6", "STOP"]) //8 pieces are left. 