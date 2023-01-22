import inquirer from "inquirer";
import { courseStudentArr } from "./addstudent.js";
import { courseTeacherArr } from "./addteacher.js";

export async function courseView() {
    const selected = await inquirer.prompt([
        {
            name: 'courseid',
            type: 'list',
            message: 'SELECT COURSE ID TO VIEW COMPLETE RECORD',
            choices: ['AI', 'BCC', 'CNC', 'IOT', 'WMD']
        }
    ])

    if (courseTeacherArr.find((element) => element.id === selected.courseid)) {

        if (selected.courseid === 'AI') {
            let aiTeacher = courseTeacherArr.filter((element) => element.id === 'AI');
            console.log(`\nTeaching Faculty For This Course:`);
            console.table(aiTeacher);

        };
        if (selected.courseid === 'BCC') {
            let aiTeacher = courseTeacherArr.filter((element) => element.id === 'BCC');
            console.log(`\nTeaching Faculty For This Course:`);
            console.table(aiTeacher);

        };
        if (selected.courseid === 'CNC') {
            let aiTeacher = courseTeacherArr.filter((element) => element.id === 'CNC');
            console.log(`\nTeaching Faculty For This Course:`);
            console.table(aiTeacher);

        };
        if (selected.courseid === 'IOT') {
            let aiTeacher = courseTeacherArr.filter((element) => element.id === 'IOT');
            console.log(`\nTeaching Faculty For This Course:`);
            console.table(aiTeacher);
        };

        if (selected.courseid === 'WMD') {
            let aiTeacher = courseTeacherArr.filter((element) => element.id === 'WMD');
            console.log(`\nTeaching Faculty For This Course:`);
            console.table(aiTeacher);

        };

    }// if block for teacher
    else { console.log(`\nNo Record Exist For The Teachers In This Course...\n`) };

    if (courseStudentArr.find((element) => element.id === selected.courseid)) {

        if (selected.courseid === 'AI') {

            let aiStudent = courseStudentArr.filter((element) => element.id === 'AI');
            console.log(`\nStudents Enrolled For This Course:`);
            console.table(aiStudent);
        };
        if (selected.courseid === 'BCC') {

            let aiStudent = courseStudentArr.filter((element) => element.id === 'BCC');
            console.log(`\nStudents Enrolled For This Course:`);
            console.table(aiStudent);
        };
        if (selected.courseid === 'CNC') {

            let aiStudent = courseStudentArr.filter((element) => element.id === 'CNC');
            console.log(`\nStudents Enrolled For This Course:`);
            console.table(aiStudent);
        };
        if (selected.courseid === 'IOT') {

            let aiStudent = courseStudentArr.filter((element) => element.id === 'IOT');
            console.log(`\nStudents Enrolled For This Course:`);
            console.table(aiStudent);
        };
        if (selected.courseid === 'WMD') {

            let aiStudent = courseStudentArr.filter((element) => element.id === 'WMD');
            console.log(`\nStudents Enrolled For This Course:`);
            console.table(aiStudent);
        };
    }// if block for student
    else { console.log(`\nNo Record Exist For The Studens In This Course...\n`) };
};