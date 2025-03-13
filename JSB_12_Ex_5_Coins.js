function coins(n) {
    let cents = Number(n) * 100;
    let coins = 0;
    let coinValue = 0;
    let i = 0;
    while(cents >= 1) {
        i++;
        switch (i) {
            case 1:
                coinValue = 200;
                break;
            case 2:
                coinValue = 100;
                break;
            case 3:
                coinValue = 50;
                break;
            case 4:
                coinValue = 20;
                break;
            case 5:
                coinValue = 10;
                break;
            case 6:
                coinValue = 5;
                break;
            case 7:
                coinValue = 2;
                break;
            case 8:
                coinValue = 1;
                break;
            default:
                break;
        }
        coins += Math.floor(cents / coinValue);
        cents %= coinValue;
    }
    console.log(coins);
}

// function coins(input) {
//     let sum = Number(input[0]);
//     let cents = Math.floor(sum * 100);
//     let coins = 0;
//     while (cents > 0) {
//         if (cents >= 200) {
//             cents -= 200;
//         } else if (cents >= 100) {
//             cents -= 100;
//         } else if (cents >= 50) {
//             cents -= 50;
//         } else if (cents >= 20) {
//             cents -= 20;
//         } else if (cents >= 10) {
//             cents -= 10;
//         } else if (cents >= 5) {
//             cents -= 5;
//         } else if (cents >= 2) {
//             cents -= 2;
//         } else if (cents >= 1) {
//             cents -= 1;
//         }
//         coins++;
//     }
//     console.log(coins);

// }

//2 лв, 1 лв, 50 ст, 20 ст, 10 ст, 5 ст, 2 ст 1 ст
coins(["1.23"]) // 4 
coins(["2"]) // 1 
coins(["0.56"]) // 3 
coins(["2.73"]) // 5 