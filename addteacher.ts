import chalk from 'chalk';
import inquirer from 'inquirer';
import { CourseTeacher } from './Course.js';
import { Teacher } from "./Teacher.js";


export var teacherArr: { name: string, age: number, course: string[], qualification: string, teacherId: string }[] = [];
export var courseTeacherArr: { id: string, name: string, teacher: string }[] = [];

export async function addTeacher() {
    var addteacher = await inquirer.prompt([
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
                if (isNaN(input)) {
                    throw Error('Please Provide Age In Numbers...');
                }
                return true;
            },
        },
        {
            name: 'qualification',
            type: 'list',
            message: 'SELECT QUALIFICATION:',
            choices: ['Graduate', 'Masters', 'M.Phil', 'PhD', 'Other Certificatios']
        },
        {
            name: 'course',
            type: 'list',
            message: 'SELECT COURSE:',
            choices: ['Aritificial Intelligence', 'Blockchain', 'Cloud Native Computing', 'Internet of Things', 'Web 3.0 & Metaverse Developer']
        },

    ])
    if ((teacherArr.find((element) => element.name === addteacher.name.toUpperCase()))) {
        console.log(`\nYou Are An Existing Teacher...\n`);
        console.log(`Select`, chalk.green("EDIT TEACHER"), `From the Main Menu To Continue...\n`)
    }
    else {

        var teacherobj = new Teacher(addteacher.name.toUpperCase(), addteacher.age, addteacher.course, addteacher.qualification);
        teacherArr.push(teacherobj);
        console.table(teacherArr.filter((element) => element.name === addteacher.name.toUpperCase()));
        console.log(`\nNew Teacher Successfully Added...\n`)

        if (addteacher.course === 'Aritificial Intelligence') {
            let id = 'AI'
            var courseobj = new CourseTeacher(id, addteacher.course, addteacher.name.toUpperCase())
            courseTeacherArr.push(courseobj);

        };

        if (addteacher.course === 'Blockchain') {
            let id = 'BCC'
            var courseobj = new CourseTeacher(id, addteacher.course, addteacher.name.toUpperCase())
            courseTeacherArr.push(courseobj);

        };

        if (addteacher.course === 'Cloud Native Computing') {
            let id = 'CNC'
            var courseobj = new CourseTeacher(id, addteacher.course, addteacher.name.toUpperCase())
            courseTeacherArr.push(courseobj);

        };

        if (addteacher.course === 'Internet of Things') {
            let id = 'IOT'
            var courseobj = new CourseTeacher(id, addteacher.course, addteacher.name.toUpperCase())
            courseTeacherArr.push(courseobj);

        };

        if (addteacher.course === 'Web 3.0 & Metaverse Developer') {
            let id = 'WMD'
            var courseobj = new CourseTeacher(id, addteacher.course, addteacher.name.toUpperCase())
            courseTeacherArr.push(courseobj);

        };
    } //else ending
}; //function addteacher ending