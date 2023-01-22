import inquirer from 'inquirer';
import { courseStudentArr, studentArr } from './addstudent.js';
import { CourseStudent } from './Course.js';

// var searchfilter: any

export async function editStudent() {
    var search = await inquirer.prompt([
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
        },
    ])
    if (search.student) {
        var searchfilter = studentArr.filter((element) => element.name === search.student || element.rollNumber === search.student);
        console.log(`\nSearch Result:`, search.student)
        console.table(searchfilter);

        var selected = await inquirer.prompt([
            {
                name: 'action',
                type: 'list',
                message: 'Select Waht do You Want To Edit',
                choices: ['Edit Name', 'Edit Age', 'Add Course', 'Delete Course']
            }
        ])

        if (selected.action === 'Edit Name') {
            var fresh = await inquirer.prompt([
                {
                    name: 'name',
                    type: 'input',
                    message: 'Enter New Name:',
                    validate(input) {
                        if (input) {
                            return true;
                        }
                        throw Error('Please Provide Valid Name...');
                    },
                }
            ])


            if (studentArr.find((element) => element.name === searchfilter[0].name)) {
                courseStudentArr[courseStudentArr.findIndex((obj) => obj.student === searchfilter[0].name)].student = fresh.name.toUpperCase()
                studentArr[studentArr.findIndex((obj) => (obj.name === searchfilter[0].name))].name = fresh.name.toUpperCase()
            };
            console.table(studentArr.filter((element) => element.name === fresh.name.toUpperCase()));
            console.log(`\nName has been Successfully updated...\n`);
        }; // edit name block end

        if (selected.action === 'Edit Age') {
            var fresh = await inquirer.prompt([
                {
                    name: 'age',
                    type: 'number',
                    message: 'Enter New Age:',
                    validate(input) {
                        if (!(isNaN(input))) {
                            return true;
                        }
                        throw Error('Please Provide Age In Numbers...');
                    },
                }
            ])
            studentArr[studentArr.findIndex((obj) => obj.name === searchfilter[0].name)].age = fresh.age
            console.table(studentArr.filter((element) => element.name === searchfilter[0].name));
            console.log(`\nAge has been Successfully updated...\n`);
        }; // edit age block end

        if (selected.action === 'Add Course') {
            var fresh = await inquirer.prompt([
                {
                    name: 'course',
                    type: 'list',
                    message: 'Select Course To Add',
                    choices: ['Aritificial Intelligence', 'Blockchain', 'Cloud Native Computing', 'Internet of Things', 'Web 3.0 & Metaverse Developer']
                }
            ])
            if (!(studentArr[studentArr.findIndex((obj) => obj.name === searchfilter[0].name)].course.find((element) => element === fresh.course))) {

                studentArr[studentArr.findIndex((obj) => obj.name === searchfilter[0].name)].course.push(fresh.course);
                console.table(studentArr.filter((element) => element.name === searchfilter[0].name));
                console.log(`\nNew Course has been Successfully Added...\n`);

                // below code is for adding new course object in course record array
                if (fresh.course === 'Aritificial Intelligence') {
                    let id = 'AI'
                    var courseobj = new CourseStudent(id, fresh.course, searchfilter[0].name)
                    courseStudentArr.push(courseobj);

                };
                if (fresh.course === 'Blockchain') {
                    let id = 'BCC'
                    var courseobj = new CourseStudent(id, fresh.course, searchfilter[0].name)
                    courseStudentArr.push(courseobj);

                };

                if (fresh.course === 'Cloud Native Computing') {
                    let id = 'CNC'
                    var courseobj = new CourseStudent(id, fresh.course, searchfilter[0].name)
                    courseStudentArr.push(courseobj);
                    // 
                };

                if (fresh.course === 'Internet of Things') {
                    let id = 'IOT'
                    var courseobj = new CourseStudent(id, fresh.course, searchfilter[0].name)
                    courseStudentArr.push(courseobj);

                };

                if (fresh.course === 'Web 3.0 & Metaverse Developer') {
                    let id = 'WMD'
                    var courseobj = new CourseStudent(id, fresh.course, searchfilter[0].name)
                    courseStudentArr.push(courseobj);

                };
            } //if  add Course block ending
            else {
                console.log(`\nYou Are Already Registered In This Course...\n`)
            };
        }; // add course if block ending

        if (selected.action === 'Delete Course') {
            var fresh = await inquirer.prompt([
                {
                    name: 'course',
                    type: 'list',
                    message: 'Select Course to Delete',
                    choices: ['Aritificial Intelligence', 'Blockchain', 'Cloud Native Computing', 'Internet of Things', 'Web 3.0 & Metaverse Developer']
                }
            ])
            if ((studentArr[studentArr.findIndex((obj) => obj.name === searchfilter[0].name)].course.find((element) => element === fresh.course))) {

                let studentCourseIndex = (studentArr[studentArr.findIndex((obj) => obj.name === searchfilter[0].name)].course.indexOf(fresh.course));

                studentArr[studentArr.findIndex((obj) => obj.name === searchfilter[0].name)].course.splice(studentCourseIndex, 1);

                console.table(studentArr.filter((element) => element.name === searchfilter[0].name));

                // this code is for Deleteing course from the Course object array
                let courseIndex = courseStudentArr.findIndex((obj) => obj.student === searchfilter[0].name && obj.name === fresh.course);
                courseStudentArr.splice(courseIndex, 1);
                console.log(`\nCourse has been Successfully Deleted...\n`);
            } // if block end
            else {
                console.log(`\nThis Course Does Not Exist...\n`)
            }
        } // delete course if block end

    } // function editStudent ending // else need to be put to avoid empty console.table
};