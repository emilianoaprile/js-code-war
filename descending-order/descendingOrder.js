console.log('Descending Order')

const maximumNum = descendingOrder(42145)
console.log(maximumNum)

function descendingOrder(number) {
    let stringNumReversed = number.toString().split('').sort().reverse()
    
    let maximumNum = ''
    for (let i = 0; i < stringNumReversed.length; i++) {
        const currentEl = stringNumReversed[i]
        console.log(currentEl)
        maximumNum += currentEl

    }
    console.log(maximumNum)

    return parseInt(maximumNum)
}