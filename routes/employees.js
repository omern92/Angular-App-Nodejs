var DB = require('../database/dataFile');

async function getEmployees(req, res) {
  try {
    const employees = await DB.Employee.find().exec();
    res.json(employees)
  } catch(err) {
    res.status(500).json({ message: 'Oops... Something went wrong' });
  }
}

async function getEmployee(req, res) {
  try {
    const empId = req.params.id;
    const emp = await DB.Employee.findById(empId).exec();
    if (!emp) {
      res.status(403).json({ message: 'Could not find employee.' });
    }
    res.json(emp);

  } catch(err) {
    res.status(500).json({ message: 'Employee not found.' });
  }
}

async function getEmpByName(req, res) {
  try {
    const empName = req.params.name;
    const employees = await DB.Employee.find({ name: new RegExp(empName, "i") }).exec();
    res.json(employees);
  } catch(err) {
    res.status(500).json({ message: 'Oops... Something went wrong' });
  }
}

function addEmployee(req, res) {
  let employee = new DB.Employee;
  employee.name         = req.body.name;
  employee.designation  = req.body.designation;
  employee.project      = req.body.project;
  employee.skills       = req.body.skills;

  employee.save( (err) => {
    if(err) {
      res.status(500).json({ message: 'Oops... Could not add employee' });
    } else {
      res.json({ message: `Employee ${employee.name} added successfully.` });
    }
  });
}

async function deleteEmployee(req, res) {
  try {
    const id = req.params.id;
    DB.Employee.findByIdAndDelete(id).exec();
    res.json({ message: 'Employee deleted successfully' });

  } catch(err) {
    res.status(500).json({ message: 'Could not delete employee.' });
  }
}

async function updateEmployee(req, res) {
  try {
    DB.Employee.findByIdAndUpdate(req.body._id, req.body).exec();
    res.json({ message: `${req.body.name} updated successfully.` });

  } catch(err) {
    res.status(500).json({ message: 'Oops... Something went wrong' });
  }
}



module.exports = { getEmployees, getEmployee, getEmpByName, addEmployee, updateEmployee, deleteEmployee };