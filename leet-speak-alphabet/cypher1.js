console.log('Cypher - Crittografia')

const userWord = prompt('inserisci il messaggio da criptare')
console.log(userWord)

const result = cypher(userWord)
console.log(result)

function cypher(string) {
    const letterMap = {
        'I': 1,
        'l': 1,
        'R': 2,
        'z': 2,
        'E': 3,
        'e': 3,
        'A': 4,
        'a': 4,
        'S': 5,
        's': 5,
        'G': 6,
        'b': 6,
        'T': 7,
        't': 7,
        'B': 8,
        'g': 9,
        'O': 0,
        'o': 0
    }
    console.log(letterMap)
    let cypherString = ''
    for (let i = 0; i < string.length; i++) {
        let currentChar = string[i]
        console.log(currentChar)
        if (letterMap.hasOwnProperty(currentChar)) {
            console.log(letterMap[currentChar])
            cypherString += letterMap[currentChar]
            console.log(cypherString)
        } else {
            cypherString += currentChar
        }
    }

    return cypherString

}

/*
Pseudo code:

creare un oggetto nel quale assegno per ogni lettere maiuscola o minuscola il numero
ciclo la stringa ottenuta dal prompt:
    - prendo carratere corrente
    - lo confronto con gli elementi dell'oggetto
    - SE il carrattere corrente è contenuto nell'oggetto 
        - concateno il valore dell'elemento corrispondente in una stringa
    - ALTRIMENTI 
        - concateno il carattere corrente

*/