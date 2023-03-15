//
//
//walkthrough of what i did is in whatidid.txt
//
//
let letters = [ 'w', 'e', ' ', 'a', 'r', 'e', ' ', 'B', 'S', 'T'];

let words: string[] = createWords(letters);

words.forEach(word => {
    console.log(word);
});

function createWords(letters: string[]): string[]
{
    let temp = "";
    let result: string[] = [];

    letters.forEach(ltr => {
         if (ltr == ' '){
            result.push(temp);
            temp = "";
        }
        if(letters.indexOf(ltr) == letters.length - 1){
            temp += ltr
            result.push(temp)
        }
        if(ltr!=' ') {
            temp += ltr;
        }
    });

    return result;
}