const Intern = require("../lib/intern");

test("Can I get Intern's getschool()", () =>{
    const newIntern = new Intern("josh","2@u.com",1,"uofa")
    expect(newIntern.getSchool()).toBe("uofa")
    }
    )