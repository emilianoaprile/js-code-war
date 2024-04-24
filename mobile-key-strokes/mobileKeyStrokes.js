console.log('Old Mobile Displal KeyStrokes')

const userWord = prompt('inserisci una parola')
const result = mobileKeyBoard(userWord)
console.log(result)


function mobileKeyBoard(string) {

    const mobileDisplay = {
        tasto1: ['1'],
        tasto2: ['2', 'a', 'b', 'c'],
        tasto3: ['3', 'd', 'e', 'f'],
        tasto4: ['4', 'g', 'h', 'i'],
        tasto5: ['5', 'j', 'k', 'l'],
        tasto6: ['6', 'm', 'n', 'o'],
        tasto7: ['7', 'p', 'q', 'r', 's'],
        tasto8: ['8', 't', 'u', 'v'],
        tasto9: ['9', 'w', 'x', 'y', 'z'],
        tasto10: ['*'],
        tasto11: ['0'],
        tasto12: ['#']
    }
    console.log(mobileDisplay)

    let countKeyStrokes = 0
    for (let k = 0; k < string.length; k++) {
        const currentChar = string[k]
        console.log(`lettera corrente: ${currentChar}`)

        for (let key in mobileDisplay) {
            // console.log(key)
            let array = mobileDisplay[key]
            console.log(array)
            for (let i = 0; i < array.length; i++) {
                const currentEl = array[i]
                console.log(currentEl)
                if (currentEl.includes(currentChar)) {

                    const indexOfchar = array.indexOf(currentEl)
                    console.log(indexOfchar)
                    countKeyStrokes += indexOfchar + 1

                }
            }
        }

    }

    return countKeyStrokes
}
