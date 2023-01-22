import inquirer from "inquirer";
import { teacherArr } from "./addteacher.js";

export async function teacherRecord() {
    var selected = await inquirer.prompt([
        {
            name: 'teacher',
            type: 'input',
            message: 'SEARCH TEACHER BY NAME OR ROLL NUMBER (BLOCK LETTERS):',
            validate(input) {
                if ((teacherArr.find((element) => element.name === input)) || (teacherArr.find((element) => element.teacherId === input))) {
                    return true;
                }
                throw Error('No Result Found...');
            },
        }
    ])
    let searchteacher = teacherArr.filter((element) => element.name === selected.teacher || element.teacherId === selected.teacher);
    console.log(`\nSearch Result:`, selected.teacher)
    console.table(searchteacher);

};