

export var initStudentId = 10000;
export var initTeacherId = 20000;

export class Person {
    name: string;
    age: number;
    course: string[] = [];
    constructor(name: string, age: number, course: string) {
        this.name = name;
        this.age = age;
        this.course.push(course);


    };
};