const employees = [
    { id: 1, name:'John', age:30, department:'IT', salary:5000 },
    { id: 2, name:'Alice', age:24, department:'HR', salary:6000 },
    { id: 3, name:'Mary', age:35, department:'Finance', salary:5600 },
    { id: 4, name:'Kostas', age:40, department:'Marketing', salary:5900 },
    { id: 5, name:'Dim', age:33, department:'HR', salary:10000 }
]

displayEmployees();
//const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.department} - $${employee.salary}</p>`).join('');
//document.getElementById('employeesDetails').innerHTML = totalEmployees;

function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.department} - $${employee.salary}</p>`).join('');
document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc,employee) => acc + employee.salary, 0);
    alert(`Total salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department == 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML= `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'no employee found with this id';
    }
}