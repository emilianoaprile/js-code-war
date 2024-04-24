console.log('Digital Cypher')

const result = encode('masterpiece', 1939)
console.log('Frase codificata:', result)

function encode(str, num) {
    const letters = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    };

    const arrayOfNum = String(num).split('').map((num) => {
        return Number(num)
    })
    console.log(arrayOfNum)
    
    let strLowerCase = str.toLowerCase()
    const encodedNumbers = []
    for (let i = 0; i < strLowerCase.length; i++) {
        const currentChar = strLowerCase[i]
        console.log(`la lettera corrente è: ${currentChar}`)
    
        for (key in letters) {
            const char = key
            const currentValue = letters[char]
            console.log(currentValue)
    
            if (key === currentChar) {
                console.log(char)
                console.log(`ho trovato lettera corrispondente, il numero è: ${currentValue}`)
                encodedNumbers.push(currentValue)
            }
        }
    }
    
    console.log(encodedNumbers)
    
    const encodedSum = [];
    
    for (let i = 0; i < encodedNumbers.length; i++) {
        // utilizzo il modulo per far ripartire da zero l'arrayOfNum nel caso in cui encodedNumbers.length è > arrayOfNum 
        let index = i % arrayOfNum.length
        console.log(index, arrayOfNum[index])
        let result = encodedNumbers[i] + arrayOfNum[index]
        encodedSum.push(result)
    }
    
    return encodedSum
}

/*
i = 0, index = 0 % 4 = 0, quindi usiamo il primo elemento di arrayOfNum.
i = 1, index = 1 % 4 = 1, quindi usiamo il secondo elemento di arrayOfNum.
i = 2, index = 2 % 4 = 2, quindi usiamo il terzo elemento di arrayOfNum.
i = 3, index = 3 % 4 = 3, quindi usiamo il quarto elemento di arrayOfNum.
i = 4, index = 4 % 4 = 0, di nuovo usiamo il primo elemento di arrayOfNum.
 */

