// In this kata, you will write a function that receives an 
// array of string and returns a string that is either
//  'naughty' or 'nice'. Strings that start with the
//   letters b, f, or k are naughty. Strings that start with
//    the letters g, s, or n are nice. Other strings are neither naughty nor nice.

// If there is an equal amount of bad and good actions, return 'naughty'

// function whatListAmIOn(actions){
//     //your code here
//   let myString = actions.join("")
//   if (myString[0] == "b" || myString[0] == "f" || myString[0] == "k" ) {
//     return 'naughty'
//   }if (myString[0] == "g" ||myString[0] == "s" ||myString[0] == "n" ) {
//     return 'nice'
//   } 

//   }

//   console.log(whatListAmIOn(['broke someone\'s window', 'fought over a toaster', 'killed a bug']))

  

function whatListAmIOn(actions) {
    let naughtyCount = 0;
    let niceCount = 0;

    for (let i = 0; i < actions.length; i++) {
        const action = actions[i].toLowerCase().trim(); // Convert to lowercase and remove leading/trailing spaces

        if (action.startsWith('b') || action.startsWith('f') || action.startsWith('k')) {
            naughtyCount++;
        } else if (action.startsWith('g') || action.startsWith('s') || action.startsWith('n')) {
            niceCount++;
        }
    }

    if (naughtyCount > niceCount) {
        return 'naughty';
    } else if (niceCount > naughtyCount) {
        return 'nice';
    } else {
        return 'naughty'; // If counts are equal, return 'naughty'
    }
}

// Examples:
const bad_actions = ['broke someone\'s window', 'fought over a toaster', 'killed a bug'];
console.log(whatListAmIOn(bad_actions)); // Outputs 'naughty'

const good_actions = ['got someone a new car', 'saved a man from drowning', 'never got into a fight'];
console.log(whatListAmIOn(good_actions)); // Outputs 'nice'

const actions = ['broke a vending machine', 'never got into a fight', 'tied someone\'s shoes'];
console.log(whatListAmIOn(actions)); // Outputs 'naughty'
