const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
'use strict';



let fullQuestions = [];
let teamMembers = [];
const roleQ = [{
    type: 'list',
    name: 'role',
    message: 'what is your role? Manager, Intern, Engineer',
    choices: [
        'Engineer',
        'Intern',
        'Manager'
    ]
}];

const baseQuestions = [

    {
        type: 'input',
        name: 'name',
        message: 'What is the first name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your ID? 1 - 100'
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email'
    }
];

const ManagerQ = [{
        type: 'input',
        name: 'officeNum',
        message: "What's the office number?"
    },
];

const EngineerQ = [{
    type: 'input',
    name: 'gitHub',
    message: 'What is your Git Hub user name?'
}];

const InternQ = [{
    type: 'input',
    name: 'school',
    message: 'What school are currently attending or graduate from?'
}];
let addnew = false;

// inquirer.prompt([{
//     type: 'confirm',
//     name: 'addnew',
//     message: 'Add another employee?'
// }]).then((ans) => {
//     console.log(ans.name);
//     addnew = ans.name;
// });

inquirer.prompt(roleQ).then((answers) => {
    //addEmp();
    const rolename = answers.role;
    if (rolename === 'Engineer') {
        fullQuestions = baseQuestions.concat(EngineerQ)
        console.log('enginerQ');
    }
    if (rolename === 'Intern') {
        fullQuestions = baseQuestions.concat(InternQ)
        console.log('internQ');
    }
    if (rolename === 'Manager') {
        fullQuestions = baseQuestions.concat(ManagerQ)
        console.log('managerQ');
    }
    inquirer.prompt(fullQuestions).then((ans) => {
        console.log('too full answers: ');
        console.log(ans);
        
        switch (rolename) {
            case 'Engineer':
                const engineer = new Engineer(ans.name, ans.id, ans.email, ans.github);
                teamMembers.push(engineer);
                //idArray.push();
                console.log('teammembers: ', teamMembers);
                break;
                case 'Intern':
                    const intern = new Intern(ans.name, ans.id, ans.email, ans.school);
                    teamMembers.push(intern);
                    break;
                    case 'Manager':
                        const manager = new Manager(ans.name, ans.id, ans.email, ans.github);
                        teamMembers.push(manager);
                        break;
                    }
                    fs.appendFile(outputPath, render(teamMembers), err => {
                        if (err) {
                            console.log('file print didnt work');
                        }
                    });
                });
            });
                //createTeam();
                


// function addEmp() {
// };

// function ask() {
//     inquirer.prompt(roleQ).then((answers) => {
//         const rolename = answers.role;
//         if (rolename === 'Engineer') {
//             fullQuestions = baseQuestions.concat(EngineerQ)
//             console.log('enginerQ');
//         }
//         if (rolename === 'Intern') {
//             fullQuestions = baseQuestions.concat(InternQ)
//             console.log('internQ');
//         }
//         if (rolename === 'Manager') {
//             fullQuestions = baseQuestions.concat(ManagerQ)
//             console.log('managerQ');
//         }
//         inquirer.prompt(fullQuestions).then((answers) => {

//         });

//     });
// };

//let addEmp = 'x'
// do{
//     inquirer.prompt([{
//         type: 'input',
//         name: 'more',
//         message: 'Enter another employee?',
//         choices: [
//             'Y',
//             'N'

//         ]
//     }]).then((answers) => {
//         var addEmp = answers.more;
//         console.log('this is more: ' ,addEmp);

//     });
// }while(addEmp === 'Y'|| addEmp === 'y');








// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```