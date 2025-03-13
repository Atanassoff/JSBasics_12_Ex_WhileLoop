function oldBooks(input){
    let theBook = input[0];
    let i = 1;
    let currentBook = input[i]; 
    let found = false;
    while(currentBook !== "No More Books"){
        if(currentBook === theBook){
            found = true;
            break;
        }
        i++;
        currentBook = input[i];
    }
    if(found){
        console.log(`You checked ${i - 1} books and found it.`);
    }
    else{
        console.log(`The book you search is not here!\nYou checked ${i - 1} books.`);
    }
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]) 
//You checked 2 books and found it. 
oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]) 
//The book you search is not here! You checked 4 books. 
oldBooks(["Bourne","True Story","Forever","More Space","The Girl","Spaceship","Strongest","Profit","Tripple","Stella","The Matrix","Bourne"])
//You checked 10 books and found it.