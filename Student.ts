import { Person } from './Person.js';

let initStudentId = 10000;

export class Student extends Person {
    rollNumber: string;
    constructor(name: string, age: number, course: string) {
        super(name, age, course);
        this.rollNumber = 'PIAIC' + ++initStudentId;

    };

};

// const student1 = new Student('farhan', 22, ['bcc'])
// console.log(student1);