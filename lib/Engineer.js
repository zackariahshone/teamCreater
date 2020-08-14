// TODO: Write code to define and export the 
//Engineer class.  HINT: This class should inherit from Employee.
//const emp = require("./Employee");

const Employee = require("./Employee");



class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name,id,email);
       
        this.github = github;
        //this.role = getRole();
    }
             getGithub(){
                return this.github;
            }// * getGithub()
    
             getRole(){
                return "Engineer";
            }// * getRole() // Overridden to return 'Engineer'
}

module.exports = Engineer;