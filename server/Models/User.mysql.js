const sql = require('../config/mysql');

const User = function(User) {
    this.username = User.username;
    this.role = User.role;
    this.password = User.password;
}

User.create = (newUser, result) => {
    sql.query('INSERT INTO user SET ?', newUser, (err,res) => {
        if(err){
            result(err,null)
            return;
        }
        result(null,{id:res.insertId, ...newUser})
    })
}

User.getAll = (result) => {
    sql.query('SELECT * FROM user', (err,res) => {
        if(err){
            result(err,null);
            return;
        }
        result(null, res)
    })
}

User.getOne  = (id, result) => {
    sql.query(`SELECT * FROM user WHERE id=${id}`, (err,res) => {
        if(err || !res || !res[0] ){
            result(err,null);
            return;
        }
        result(null, res[0])
    })
}

User.getOneByUsername  = (username, result) => {
    sql.query(`SELECT * FROM user WHERE username='${username}'`, (err,res) => {
        if(err || !res || !res[0] ){
            result(err,null);
            return;
        }
        result(null, res[0])
    })
}

module.exports = User;