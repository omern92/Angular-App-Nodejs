var DB = require('../database/dataFile');
var bcrypt = require('bcrypt');

async function login(req, res) {
  try {
    var user = await DB.Admin.findOne({ username: req.body.username }).exec()
    if (!user) res.json({ success: false, message: 'Wrong Username' });

    var hashedPass = user.password;
    if (bcrypt.compareSync(req.body.password, hashedPass)) {
      req.session.username = req.body.username;
      res.json({ success: true, message: 'Connected successfully' });
    } else {
      res.json({ success: false, message: 'Wrong Password' });
    }

  } catch (err) {
    res.status(500).json({ message: 'Something went wrong...' });
  }; 
}

function getLogin(req, res) {
  req.session.username ? res.json({ loggedIn: true }) : res.json({ loggedIn: false });
}

function logout(req, res) {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({ message: 'Could not log out.' });
    } else {
      res.status(200).json({ message: 'success' });
    }
  });
    
}

module.exports = { login, getLogin, logout };