// Code your solutions in this file
// create a function named writeCards()that takes two arguments
// one is an arrays of string names 
// two is an array for events

function writeCards(names, event) {
    let returnThankYouMessages = [];
    for (let a =0; a < names.length; a++) {
        returnThankYouMessages.push(`Thank you, ${names[a]}, for the wonderful ${event} gift!`);
    }
    return returnThankYouMessages;
}
// create a function to count down from a positive number to zero
// logs each number when counting down starting from the number provided to zero
// while is used if i dont know how often i will loop
function countDown(num) {
    if (num <= 0) {
        console.log("Invalid input!")
        return;
    }
    while (num >= 0) {
        console.log(num);
        num--;
    }
}