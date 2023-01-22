
import chalk from 'chalk';
import inquirer from 'inquirer';
import { CourseStudent } from './Course.js';
import { Student } from './Student.js';


export var studentArr: { name: string, age: number, course: string[], rollNumber: string }[] = []
export var courseStudentArr: { id: string, name: string, student: string }[] = [];


export async function addStudent() {
    var addstudent = await inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'ENTER NAME:',
            validate(input) {
                if (input) {
                    return true;
                }
                throw Error('Please Provide Valid Name...');
            },

        },
        {
            name: 'age',
            type: 'number',
            message: 'ENTER AGE:',
            validate(input) {
                if (!(isNaN(input))) {
                    return true;
                }
                throw Error('Please Provide Age In Numbers...');
            },
        },
        {
            name: 'course',
            type: 'list',
            message: 'SELECT COURSE:',
            choices: ['Aritificial Intelligence', 'Blockchain', 'Cloud Native Computing', 'Internet of Things', 'Web 3.0 & Metaverse Developer']
        },

    ])
    if ((studentArr.find((element) => element.name === addstudent.name.toUpperCase()))) {
        console.log(`\nYou Are An Existing Student...\n`);
        console.log(`Select`, chalk.green("EDIT STUDENT"), `From the Main Menu To Continue...\n`)
    }
    else {
        var studentobj = new Student(addstudent.name.toUpperCase(), addstudent.age, addstudent.course);
        studentArr.push(studentobj);
        console.table(studentArr.filter((element) => element.name === addstudent.name.toUpperCase()));
        console.log(`\nNew Student Successfully Added...\n`)

        if (addstudent.course === 'Aritificial Intelligence') {
            let id = 'AI'
            var courseobj = new CourseStudent(id, addstudent.course, addstudent.name.toUpperCase()) //touppercase need to put
            courseStudentArr.push(courseobj);

        };

        if (addstudent.course === 'Blockchain') {
            let id = 'BCC'
            var courseobj = new CourseStudent(id, addstudent.course, addstudent.name.toUpperCase())
            courseStudentArr.push(courseobj);

        };

        if (addstudent.course === 'Cloud Native Computing') {
            let id = 'CNC'
            var courseobj = new CourseStudent(id, addstudent.course, addstudent.name.toUpperCase())
            courseStudentArr.push(courseobj);

        };

        if (addstudent.course === 'Internet of Things') {
            let id = 'IOT'
            var courseobj = new CourseStudent(id, addstudent.course, addstudent.name.toUpperCase())
            courseStudentArr.push(courseobj);

        };

        if (addstudent.course === 'Web 3.0 & Metaverse Developer') {
            let id = 'WMD'
            var courseobj = new CourseStudent(id, addstudent.course, addstudent.name.toUpperCase())
            courseStudentArr.push(courseobj);

        };
    } // else block ending
}; // addstudent if ending
