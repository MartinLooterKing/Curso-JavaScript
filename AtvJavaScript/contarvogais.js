const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']; 
function countVowel(word){
    let count = 0;

    console.log(word);
    for(let letter of word){
    if(vowels.includes(letter)){
    
        count++; 
        }
    }
    return count;
}

countVowel('salve');

let quantity = countVowel('salve');

console.log(quantity);

/*const vowels = ['a', 'e', 'i', 'o', 'u'];
function countVowel(word){
    let count = 0;

    for(let letter of word.toLowerCase()){
    if(vowels.includes(letter)){
    
        count++; 
        }
    }
    return count;
}

countVowel('salve');

let quantity = countVowel('salve');

console.log('salve ' + quantity);*/