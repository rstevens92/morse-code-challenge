// import the html elements into the script
// create character object array

const inputBox = document.querySelector('.input-box');
const translateButton = document.querySelector('.translate-button');
const outputBox = document.querySelector('.output-box');

// const testingClick = () => {
//     console.log('working click')
// };

// inputBox.addEventListener('click', testingClick);
// translateButton.addEventListener('click', testingClick);
// outputBox.addEventListener('click', testingClick);

let inputArr = [];
let translateObjectArr = [];
let outputArr = [];

const morseCharacterArray =[
    {lowerChar : 'a', upperChar : 'A', morseChar : '.-'},
    {lowerChar : 'b', upperChar : 'B', morseChar : '-...'},
    {lowerChar : 'c', upperChar : 'C', morseChar : '-.-.'},
    {lowerChar : 'd', upperChar : 'D', morseChar : '-..'},
    {lowerChar : 'e', upperChar : 'E', morseChar : '.'},
    {lowerChar : 'f', upperChar : 'F', morseChar : '..-.'},
    {lowerChar : 'g', upperChar : 'G', morseChar : '--.'},
    {lowerChar : 'h', upperChar : 'H', morseChar : '....'},
    {lowerChar : 'i', upperChar : 'I', morseChar : '..'},
    {lowerChar : 'j', upperChar : 'J', morseChar : '.---'},
    {lowerChar : 'k', upperChar : 'K', morseChar : '-.-'},
    {lowerChar : 'l', upperChar : 'L', morseChar : '.-..'},
    {lowerChar : 'm', upperChar : 'M', morseChar : '--'},
    {lowerChar : 'n', upperChar : 'N', morseChar : '-.'},
    {lowerChar : 'o', upperChar : 'O', morseChar : '---'},
    {lowerChar : 'p', upperChar : 'P', morseChar : '.--.'},
    {lowerChar : 'q', upperChar : 'Q', morseChar : '--.-'},
    {lowerChar : 'r', upperChar : 'R', morseChar : '.-.'},
    {lowerChar : 's', upperChar : 'S', morseChar : '...'},
    {lowerChar : 't', upperChar : 'T', morseChar : '-'},
    {lowerChar : 'u', upperChar : 'U', morseChar : '..-'},
    {lowerChar : 'v', upperChar : 'V', morseChar : '...-'},
    {lowerChar : 'w', upperChar : 'W', morseChar : '.--'},
    {lowerChar : 'x', upperChar : 'X', morseChar : '-..-'},
    {lowerChar : 'y', upperChar : 'Y', morseChar : '-.--'},
    {lowerChar : 'z', upperChar : 'Z', morseChar : '--..'},
    {lowerChar : '0', upperChar : '0', morseChar : '-----'},
    {lowerChar : '1', upperChar : '1', morseChar : '.----'},
    {lowerChar : '2', upperChar : '2', morseChar : '..---'},
    {lowerChar : '3', upperChar : '3', morseChar : '...--'},
    {lowerChar : '4', upperChar : '4', morseChar : '....-'},
    {lowerChar : '5', upperChar : '5', morseChar : '.....'},
    {lowerChar : '6', upperChar : '6', morseChar : '-....'},
    {lowerChar : '7', upperChar : '7', morseChar : '--...'},
    {lowerChar : '8', upperChar : '8', morseChar : '---..'},
    {lowerChar : '9', upperChar : '9', morseChar : '----.'},
    {lowerChar : ' ', upperChar : ' ', morseChar : '/'}
]

const applyInputValue = () => {
    const inputValue = inputBox.value
    const characterToTranslate = inputValue.charAt(inputValue.length -1);
    inputArr.push(characterToTranslate);
}

const findMorseObject = () => {
    const foundMorseObject = inputArr.map(inputValue => {
        return morseCharacterArray.find(morseCharacter => {
            return morseCharacter.lowerChar === inputValue || morseCharacter.upperChar === inputValue;
        })
    })
    translateObjectArr.push(foundMorseObject);
    console.log(foundMorseObject);
}

const translateMorse = () => {
    const getMorseChar = translateObjectArr.map(morseObject => {
       return morseObject.morseChar;
    })
    outputArr.push(getMorseChar);
    console.log(getMorseChar);
}

inputBox.addEventListener('input', applyInputValue);
translateButton.addEventListener('click', findMorseObject);
translateButton.addEventListener('click', translateMorse);