console.log('Repeat String')

const result = repeatStr(5, 'Hello')
console.log(result)


function repeatStr(number, string) {

    let stringRepeated = ''

    if (number === 0) {
        stringRepeated = 'You can not multiplicate for ZERO'
    } else {
        stringRepeated = string.repeat(number)
    }

    return stringRepeated;
}