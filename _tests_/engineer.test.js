
const Engineer = require('../lib/engineer')


test("Can I get engineer's github()", () =>{
    const newEngineer = new Engineer("Josh","josh@2u.com", 1,"githubExample")
    expect(newEngineer.getGithub()).toBe("githubExample")
    }
    )