const inquirer = require ("inquirer");
const fs = require('fs');
// const writeFileSync = util.promisify(fs.writeFile);


 function generateEmployee(data){
     console.log(data)
    return `<div>${data.employeeCreate}</div>`
}

promptUser = () => {
    return inquirer.prompt(
[
    {
    type: "list",
    message: 'Which employee would you like to create?',
    name: "employeeCreate",
    choices: ["engineer", "intern", "manager"]
},


]
    )};
    
const init = () => {
    promptUser()
    .then((data)=>{
        if (data.employeeCreate == "intern"){
            internPrompt()
        }
        fs.writeFileSync('index.html', generateEmployee(data) )
        })
    .then(() => console.log ("Employee Created"))
    .catch((err) => console.error(err));

}
// Function call to initialize app
init();