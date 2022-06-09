const inputBox = document.querySelector(".input-box");
const translateButton = document.querySelector(".translate-button");
const outputBox = document.querySelector(".output-box");

let inputArr = [];
let outputArr = [];

class morseCharacter {
    constructor(upperChar, lowerChar, morseChar){
        this.upperChar = upperChar;
        this.lowerChar = lowerChar;
        this.morseChar = morseChar;
    }

}

const morseA = new morseCharacter ("A", "a", ".-");
const morseB = new morseCharacter ("B", "b", "-...");
const morseC = new morseCharacter ("C", "c", "-.-.");
const morseD = new morseCharacter ("D", "d", "-..");
const morseE = new morseCharacter ("E", "e", ".");
const morseF = new morseCharacter ("F", "f", "..-.");
const morseG = new morseCharacter ("G", "g", "--.");
const morseH = new morseCharacter ("H", "h", "....");
const morseI = new morseCharacter ("I", "i", "..");
const morseJ = new morseCharacter ("J", "j", ".---");
const morseK = new morseCharacter ("K", "k", "-.-");
const morseL = new morseCharacter ("L", "l", ".-..");
const morseM = new morseCharacter ("M", "m", "--");
const morseN = new morseCharacter ("N", "n", "-.");
const morseO = new morseCharacter ("O", "o", "---");
const morseP = new morseCharacter ("P", "p", ".--.");
const morseQ = new morseCharacter ("Q", "q", "--.-");
const morseR = new morseCharacter ("R", "r", ".-.");
const morseS = new morseCharacter ("S", "s", "...");
const morseT = new morseCharacter ("T", "t", "-");
const morseU = new morseCharacter ("U", "u", "..-");
const morseV = new morseCharacter ("V", "v", "...-");
const morseW = new morseCharacter ("W", "w", ".--");
const morseX = new morseCharacter ("X", "x", "-..-");
const morseY = new morseCharacter ("Y", "y", "-.--");
const morseZ = new morseCharacter ("Z", "z", "--..");
const morse0 = new morseCharacter ("0", "0", "-----");
const morse1 = new morseCharacter ("1", "1", ".----");
const morse2 = new morseCharacter ("2", "2", "..---");
const morse3 = new morseCharacter ("3", "3", "...--");
const morse4 = new morseCharacter ("4", "4", "....-");
const morse5 = new morseCharacter ("5", "5", ".....");
const morse6 = new morseCharacter ("6", "6", "-....");
const morse7 = new morseCharacter ("7", "7", "--...");
const morse8 = new morseCharacter ("8", "8", "---..");
const morse9 = new morseCharacter ("9", "9", "----.");
const morseSpc = new morseCharacter (" ", " ", "/");

const applyInputValue = () => {
    const inputValue = inputBox.value
    const characterToTranslate = inputValue.charAt(inputValue.length -1);
    inputArr.push(characterToTranslate);
}

const findMorseObject = () => {
    for (i=0; i=inputArr.length; i++){
        
    }
}


inputBox.addEventListener("input", applyInputValue);
translateButton.addEventListener("click", findMorseObject);