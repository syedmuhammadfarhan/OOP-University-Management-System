
export class Course {
    id: number;
    name: string;
    student: string[];
    teacher?: string[];
    constructor(id: number, name: string, student: string[], teacher?: string[]) {
        this.id = id;
        this.name = name;
        this.student = student;
        this.teacher = teacher
    }
};

export class CourseStudent {
    id: string;
    name: string;
    student: string;
    constructor(id: string, name: string, student: string) {
        this.id = id;
        this.name = name;
        this.student = student;
    }
};

export class CourseTeacher {
    id: string;
    name: string;
    teacher: string;
    constructor(id: string, name: string, teacher: string) {
        this.id = id;
        this.name = name;
        this.teacher = teacher;
    }
};