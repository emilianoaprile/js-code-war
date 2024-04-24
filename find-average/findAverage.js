console.log('Find Average')

const votes = []
getArrayOfVotes(votes, 10)
const avarage = findAverage(votes)
console.log(`La media dei voti è: ${avarage}`)

function getArrayOfVotes(arrayOfVotes, numOfVotes) {
    while (arrayOfVotes.length < numOfVotes) {
        let vote = getRandomIntInclusive(2, 10)
        console.log(vote)
        arrayOfVotes.push(vote)
    }
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function findAverage(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        const currentVote = array[i]
        sum += currentVote
    }
    const avarageVote = sum / array.length

    if (array.length === 0) {
        return `Ci sono ${sum} voti`
    } else {
        return avarageVote
    }
}