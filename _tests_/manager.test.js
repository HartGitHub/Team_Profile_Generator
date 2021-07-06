const Manager = require("../lib/manager");

test("Can I get manager's getOfficeNumber()", () =>{
    const newManager = new Manager("josh","2@u.com",1,45)
    expect(newManager.getOfficeNumber()).toBe(45)
    }
    )