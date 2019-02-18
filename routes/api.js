var express = require('express');
var router = express.Router();

var employees = require('./employees');
var projects = require('./projects');
var auth      = require('./auth');

// Employees
router.get('/employees', employees.getEmployees);
router.post('/employees', authChecker, employees.addEmployee);

router.get('/employees/:id', employees.getEmployee);
router.put('/employees/:id', authChecker, employees.updateEmployee);
router.delete('/employees/:id', authChecker, employees.deleteEmployee);

router.get('/employees/search/:name', employees.getEmpByName);

// Projects
router.get('/projects', projects.getProjects);
router.post('/projects', projects.addProject);

router.get('/projects/:id', projects.getProject);
router.post('/projects/:id', authChecker, projects.updateProject);

router.get('/projects/:id/employees', projects.getProjectEmp);
router.post('/projects/:id/employees', authChecker, projects.updateProjectEmp);

// Login and Logout
router.get('/auth/login', auth.getLogin);
router.post('/auth/login', auth.login);

router.post('/auth/logout', auth.logout);


function authChecker(req, res, next) {
  console.log('authChecker() Invoked from api, session details: ' + req.session.username);
  if (req.session && req.session.username) {
    next();
  } else {
    res.status(403).json({
      message: 'You must be logged in.'
    });
  }
}

module.exports = router;