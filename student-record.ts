import inquirer from "inquirer";
import { studentArr } from "./addstudent.js";

export async function studentRecord() {
    var selected = await inquirer.prompt([
        {
            name: 'student',
            type: 'input',
            message: 'SEARCH STUDENT BY NAME OR ROLL NUMBER (BLOCK LETTERS):',
            validate(input) {
                if ((studentArr.find((element) => element.name === input)) || (studentArr.find((element) => element.rollNumber === input))) {
                    return true;
                }
                throw Error('No Result Found...');
            },
        }
    ])
    let searchStudent = studentArr.filter((element) => element.name === selected.student || element.rollNumber === selected.student);
    console.log(`\nSearch Result:`, selected.student) //shows the name input for search
    console.table(searchStudent);

};