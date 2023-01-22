import inquirer from 'inquirer';
import { courseTeacherArr, teacherArr } from './addteacher.js';
import { CourseTeacher } from './Course.js';

export async function editTeacher() {
    var search = await inquirer.prompt([
        {
            name: 'teacher',
            type: 'input',
            message: 'SEARCH TEACHER BY NAME OR TEACHER ID (BLOCK LETTERS):',
            validate(input) {
                if ((teacherArr.find((element) => element.name === input)) || (teacherArr.find((element) => element.teacherId === input))) {
                    return true;
                }
                throw Error('No Result Found...');
            },
        },
    ]);
    if (search.teacher) {
        var searchfilter = teacherArr.filter((element) => element.name === search.teacher || element.teacherId === search.teacher);
        console.log(`\nSearch Result:`, search.teacher)
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


            if (teacherArr.find((element) => element.name === searchfilter[0].name)) {
                courseTeacherArr[courseTeacherArr.findIndex((obj) => obj.teacher === searchfilter[0].name)].teacher = fresh.name.toUpperCase()
                teacherArr[teacherArr.findIndex((obj) => (obj.name === searchfilter[0].name))].name = fresh.name.toUpperCase()
            };
            console.table(teacherArr.filter((element) => element.name === fresh.name.toUpperCase()));
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
            teacherArr[teacherArr.findIndex((obj) => obj.name === searchfilter[0].name)].age = fresh.age
            console.table(teacherArr.filter((element) => element.name === searchfilter[0].name));
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
            ]);
            if (!(teacherArr[teacherArr.findIndex((obj) => obj.name === searchfilter[0].name)].course.find((element) => element === fresh.course))) {
                teacherArr[teacherArr.findIndex((obj) => obj.name === searchfilter[0].name)].course.push(fresh.course);
                console.table(teacherArr.filter((element) => element.name === searchfilter[0].name));
                console.log(`\nNew Course has been Successfully Added...\n`);

                // below code is for generating new course object in course array
                if (fresh.course === 'Aritificial Intelligence') {
                    let id = 'AI';
                    var courseobj = new CourseTeacher(id, fresh.course, searchfilter[0].name);
                    courseTeacherArr.push(courseobj);

                }
                ;
                if (fresh.course === 'Blockchain') {
                    let id = 'BCC';
                    var courseobj = new CourseTeacher(id, fresh.course, searchfilter[0].name);
                    courseTeacherArr.push(courseobj);

                }
                ;
                if (fresh.course === 'Cloud Native Computing') {
                    let id = 'CNC';
                    var courseobj = new CourseTeacher(id, fresh.course, searchfilter[0].name);
                    courseTeacherArr.push(courseobj);

                }
                ;
                if (fresh.course === 'Internet of Things') {
                    let id = 'IOT';
                    var courseobj = new CourseTeacher(id, fresh.course, searchfilter[0].name);
                    courseTeacherArr.push(courseobj);

                }
                ;
                if (fresh.course === 'Web 3.0 & Metaverse Developer') {
                    let id = 'WMD';
                    var courseobj = new CourseTeacher(id, fresh.course, searchfilter[0].name);
                    courseTeacherArr.push(courseobj);

                }
                ;
            } //if block ending
            else {
                console.log(`\nYou Are Already Registered In This Course...\n`);
            } // else block end
        }
        ; // add course if block ending
        if (selected.action === 'Delete Course') {
            var fresh = await inquirer.prompt([
                {
                    name: 'course',
                    type: 'list',
                    message: 'Select Course to Delete',
                    choices: ['Aritificial Intelligence', 'Blockchain', 'Cloud Native Computing', 'Internet of Things', 'Web 3.0 & Metaverse Developer']
                }
            ]);

            if ((teacherArr[teacherArr.findIndex((obj) => obj.name === searchfilter[0].name)].course.find((element) => element === fresh.course))) {

                let teacherCourseIndex = (teacherArr[teacherArr.findIndex((obj) => obj.name === searchfilter[0].name)].course.indexOf(fresh.course));

                teacherArr[teacherArr.findIndex((obj) => obj.name === searchfilter[0].name)].course.splice(teacherCourseIndex, 1);

                console.table(teacherArr.filter((element) => element.name === searchfilter[0].name));

                // below course is for deleting the same course from course object array
                let courseIndex = courseTeacherArr.findIndex((obj) => obj.teacher === searchfilter[0].name && obj.name === fresh.course);

                courseTeacherArr.splice(courseIndex, 1);

                console.log(`\nCourse Has Been Successfully Deleted...\n`);
            }

            else {
                console.log(`\nThis Course Does Not Exist...\n`)
            }

        }; // delete course if block end
    }; // function editteacher ending
};
