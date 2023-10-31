// 1 - rock 
// 2 - papper
// 3 - scissors
let playerChoise = parseInt(prompt('Make your choise: '))
let computerChoise = Math.floor(Math.random() * 3) + 1;

let choises = ['Rock', 'Paper', 'Scissors'];



if(playerChoise >= 1 && playerChoise <= 3){

    console.log('Player choise is ' + choises[playerChoise - 1]);
    console.log('Computer choise is ' + choises[computerChoise - 1]);   

    if(playerChoise == 1 && computerChoise == 3){
        console.log('Player win!');
    }
    // ..............................
    if(playerChoise == computerChoise){
        console.log('Draw!');
    }
}
else{
    console.error('Invalid player input');
}


// && and
// || or
// ! not    !true == false      !false == true


