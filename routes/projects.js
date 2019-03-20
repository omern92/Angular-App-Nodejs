var DB = require('../database/dataFile');


async function getProjects(req, res) {
  try {
    const projects = await DB.Project.find().exec()
    res.json(projects);

  } catch(err) {
    res.status(403).json('Could not get the projects.');
  }
}

async function getProject(req, res) {
  try {
    const id = req.params.id;
    const project = await DB.Project.findById(id).exec();
    res.json(project);

  } catch(err) {
    res.status(403).json('Could not get the project.');
  }
}

async function addProject(req, res) {
  let project             = new DB.Project;
      project.name        = req.body.name;
      project.designation = req.body.designation;
      project.developers  = req.body.developers;
      project.finished    = req.body.finished;
  
  project.save( (err) => {
    if(err) {
      res.status(500).json({ message: 'Oops... Could not add project' });
    } else {
      res.json({ message: `Project "${project.name}" added successfully.` });
    }
  });
}

async function updateProject(req, res) {
  try {
    DB.Project.findByIdAndUpdate(req.body._id, req.body).exec();
    res.json({ message: `${req.body.name} updated successfully.` });

  } catch(err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
}

async function getProjectEmp(req, res) {
  try {
    const id = req.params.id;
    const employees = await DB.Project.findById(id).populate('developers');

    res.json(employees.developers);

  } catch(err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
}

async function updateProjectEmp(req, res) {
  try {
    const oldProjectId = req.body.oldProjectId;
    const newProjectId = req.body.newProjectId;
    const userId       = req.body.userId;
  
    DB.Project.findByIdAndUpdate(oldProjectId, { $pull: { developers: userId } }).exec();
    const newProject = await DB.Project.findByIdAndUpdate(newProjectId, { $push: { developers: userId } }).exec();
    res.json({ message: `Project "${newProject.name}" updated successfully.` });

  } catch(err) {
    res.status(500).json({ message: 'Could not update the project.' });
  }
}

async function countProjects(req, res) {
  try {
    const mobile = await DB.Project.countDocuments({ designation: 'Mobile' });
    const web    = await DB.Project.countDocuments({ designation: 'Web' });
    const array  = [mobile, web];
    res.json(array);

  } catch(err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
}



module.exports = { getProjects, getProject, addProject, updateProject, getProjectEmp, updateProjectEmp, countProjects }
