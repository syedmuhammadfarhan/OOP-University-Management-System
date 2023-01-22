#! /usr/bin/env node
import showBanner from 'node-banner';
import inquirer from 'inquirer';
import { addStudent } from './addstudent.js';
import { addTeacher } from './addteacher.js';
import { courseView } from './course-view.js';
import { editStudent } from './edit-student.js';
import { editTeacher } from './edit-teacher.js';
import { studentRecord } from './student-record.js';
import { teacherRecord } from './teacher-record.js';

await showBanner(`
University
Management
System`, '\nDevelop By FARHAN\n');

async function main() {
    var selected = await inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: 'MAIN MENU',
            choices: ['ADD STUDENT', 'ADD TEACHER', 'EDIT STUDENT', 'EDIT TEACHER', 'VIEW COURSE', 'VIEW STUDENT', 'VIEW TEACHER'],
        },
    ])
    if (selected.action === 'ADD STUDENT') {
        await addStudent();
    };

    if (selected.action === 'ADD TEACHER') {
        await addTeacher();
    };
    if (selected.action === 'EDIT STUDENT') {
        await editStudent();
    };
    if (selected.action === 'EDIT TEACHER') {
        await editTeacher();
    };

    if (selected.action === 'VIEW COURSE') {
        await courseView();
    };

    if (selected.action === 'VIEW STUDENT') {
        await studentRecord();
    };

    if (selected.action === 'VIEW TEACHER') {
        await teacherRecord();
    };

}; // function main() ending


async function toContinue() {
    do {
        await main();
        var again = await inquirer.prompt([
            {
                name: 'answer',
                type: 'list',
                message: 'DO You Want To Continue:',
                choices: ['Yes', 'No'],
            }
        ]);
    }
    while (again.answer === 'Yes')
}; // do while function toContinue ending

toContinue();