// Codewars Kata7 Solutions

// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// Create Counter Variable
// Convert the string into Array
// Loop through the Array
// Check if the Element inside the a, e, i, o, u
// Then increase the Counter

function getCount(str) {
    let vowels = 'aeiou';
    // let count = 0;
    // let strArray = str.replaceAll(' ','').split('');
    // for(let i = 0; i < strArray.length; i++){
    //     if(vowels.includes(strArray[i])){
    //         count++;
    //     };
    // }
    // return count;
    return str.replaceAll(' ', '').split('').filter((letter) => vowels.includes(letter)).length;
}