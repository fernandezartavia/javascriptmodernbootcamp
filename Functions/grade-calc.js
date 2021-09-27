// students score, total possible score 
// 15/20 -> you got a C (75)

let getGrade = (score, possibleScore) => {
    if (typeof score !== 'number' || typeof possibleScore !== 'number') {
        throw Error('Score or possible scores are not number')
    }
    let grade = score / possibleScore * 100
    let gradeLetter = undefined;
    if (grade >= 90) {
        gradeLetter = 'A'
    } else if (grade >= 80) {
        gradeLetter = 'B'
    } else if (grade >= 70) {
        gradeLetter = 'C'
    } else if (grade >= 60) {
        gradeLetter = 'D'
    } else if (grade < 60) {
        gradeLetter = 'F'
    }
    return `Your grade is ${gradeLetter} and you got a ${grade}`
}

try {
    console.log(getGrade(10, 20))
}
catch (ex) {
    console.log('Catch block running!!!  ' + ex.message)
}