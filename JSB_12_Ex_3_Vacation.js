function vacation(input) {
    let i = 0;
    let budget = Number(input[i]);
    i++;
    let cash = Number(input[i]);
    i++;
    let command = input[i];
    i++
    let money = Number(input[i]);
    let spendNum = 0;
    let days = 0;
    let enough = false;
    while (i < input.length) {
        days++;
        if (command === "save") {
            cash += money;
            spendNum = 0;
            if (cash >= budget) {
                enough = true;
                break;
            }
        } else if (command === "spend") {
            spendNum++;
            cash -= money;
            if (cash < 0) {
                cash = 0;
            }
        }
        if(spendNum === 5){
            enough = false;
            break;
        }
        i++;
        command = input[i];
        i++
        money = Number(input[i]);
    }
    if (enough) {
        console.log(`You saved the money for ${days} days.`);
    }
    else{
        console.log(`You can't save the money.\n${days}`);
    }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"])
//You saved the money for 2 days. 
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"])
//You saved the money for 4 days.
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10",  "spend", "10"]) 
//You can't save the money. 
// 5 
