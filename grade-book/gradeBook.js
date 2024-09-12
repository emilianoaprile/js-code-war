console.log('ok')


// Libro dei voti
// Completa la funzione in modo che trovi la media dei tre punteggi assegnati e restituisca il valore della lettera associato a quel voto.


// Punteggio numerico	Grado di lettera
// 90 <= punteggio <= 100	'UN'
// 80 <= punteggio < 90	'B'
// 70 <= punteggio < 80	'C'
// 60 <= punteggio < 70	'D'
// 0 <= punteggio < 60	'F'


function getGrade(score1, score2, score3) {
    const average = (score1 + score2 + score3) / 3;
    if(average <= 100 && average >= 90) {
        console.log(average)
        return 'A'
    }
    if(average < 90 && average >= 80) {
        console.log(average)
        return 'B'
    }
    if(average < 80 && average >= 70) {
        console.log(average)
        return 'C'
    }
    if(average < 70 && average >= 60) {
        console.log(average)
        return 'D'
    }
    if(average < 60 && average > 0) {
        console.log(average)
        return 'F'
    }
}

const result = getGrade(85, 60, 60)
console.log(result)