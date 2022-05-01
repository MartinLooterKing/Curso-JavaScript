const vowels = ['a' || 'A', 'e' || 'E', 'i' || 'I', 'o' || 'O', 'u' || 'U']; 
function makeReport(report){
       
    let data = [{word: report, reverseWord: "", countVowels: count = 0}];

    console.log(`A palavra é: ${data[0].word}`);

    for( let index = report.length - 1; index >= 0; index-- ){
        data[0].reverseWord += report[index];

    }

    console.log(`Ela inversa fica: ${data[0].reverseWord}`);
    
    for(let letter of report){
        if(vowels.includes(letter)){
            count++;
            
        }
        
    }
    console.log(`A quantidade de vogais é: ${data[0].countVowels}`);
   
}

makeReport('salve');
