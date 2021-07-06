Employee = require("../lib/employee")

test("Can I create an instance of employee?", () =>{
const newEmployee = new Employee("Josh", "josh@2u.com", 1)
expect(typeof(newEmployee) ).toBe("object")
}
)
test("Can I create an employee name?", () =>{
const newEmployee = new Employee("Josh", "josh@2u.com", 1)
expect(newEmployee.name).toBe("Josh")
}
)
test("Can I get name from getName()", () =>{
const newEmployee = new Employee("Josh")
expect(newEmployee.getName()).toBe("Josh")
}
)
test("Can I get ID from getID()", () =>{
const newEmployee = new Employee("Josh","josh@2u.com", 1)
expect(newEmployee.getID()).toBe(1)
}
)
test("Can I get role from getRole()", () =>{
const newEmployee = new Employee()
expect(newEmployee.getRole()).toBe("Employee")
}
)



