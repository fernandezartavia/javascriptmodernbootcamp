// Prototypal Inheritance

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}. `
        this.likes.forEach((like) => {
            bio += `${this.firstName} likes ${like}. `
        })
        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes){
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio(){
        return `${this.fullName} is a ${this.position}`
    }
    getYearsLeft(){
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes){
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio(){
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} ${this.lastName} has a grade of ${this.grade} and he is ${status}`
    }
    upgradeGrade(points){
        this.grade+=points
    }
}

const student1 = new Student('Aaron','Fernandez',29,50,['playing soccer','javascript'])
student1.fullName = 'Clancey Turner'
console.log(student1.getBio())
student1.upgradeGrade(35)
console.log(student1.getBio())
student1.upgradeGrade(-50)
console.log(student1.getBio())


const emp1 = new Employee('Aaron','Fernandez',29,'Teacher',['playing soccer','javascript'])
emp1.fullName = 'Esteban Fernandez'
console.log(emp1.getBio())



