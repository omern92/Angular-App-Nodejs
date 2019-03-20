var mongoose      = require('mongoose');
// const { DB_URI }  = require('../env_var');

var dbURI = 'mongodb+srv://omern:a741963@cluster0-rwt5r.mongodb.net/Employees?retryWrites=true';

mongoose.connect(dbURI, { useNewUrlParser: true }, (error) => {
  if (error) {
    console.error(error);
  }
});

var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  name: String,
  project: { type: Schema.Types.ObjectId, ref: 'projects' },
  designation: String,
  skills: String,
  available: Boolean
});

var ProjectSchema = new Schema({
  name: String,
  designation: String,
  developers: [{ type: Schema.Types.ObjectId, ref: 'employees' }],
  finished: Boolean
});

var AdminSchema = new Schema({
  username: String,
  password: String
});

var Employee = mongoose.model('employees', EmployeeSchema);
var Project  = mongoose.model('projects', ProjectSchema);
var Admin    = mongoose.model('admins', AdminSchema);


module.exports = { Employee, Project, Admin };