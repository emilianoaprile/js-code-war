console.log('Calcola indice massa corporea')

function bmi(w, h) {
    powH = h * h
    const bmi = w / powH

    if(bmi <= 18.5) {
        return "Underweight"
    }
    if(bmi <= 25) {
        return "Normal"
    }
    if(bmi <= 30) {
        return "Overweight"
    }
    if(bmi > 30) {
        return "Obese"
    }
}
