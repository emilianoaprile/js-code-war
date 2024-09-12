console.log('Double Char')

// Data una stringa, devi restituire una stringa in cui ogni carattere (con distinzione tra maiuscole e minuscole) viene ripetuto una volta.

// Esempi (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

const doubleChar = (str) => str.split('').map(curr => curr + curr).join('')

console.log(doubleChar('Hello World'))