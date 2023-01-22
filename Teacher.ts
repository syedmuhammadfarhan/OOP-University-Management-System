import { Person } from "./Person.js";
// import { initTeacherId } from "./person.js";

let initTeacherId = 20000;

export class Teacher extends Person {
    qualification: string
    teacherId: string;
    constructor(name: string, age: number, course: string, qualification: string) {
        super(name, age, course)
        this.qualification = qualification
        this.teacherId = 'PIAIC' + ++initTeacherId;

    };
};

// const teacher1 = new Teacher('sir zia', 50, ['web3']);
// console.table(teacher1);