const User = require('../Models/User.mysql');

exports.register = async function(req,res) {
    const users = new User({
        username: req.body.username,
        password: req.body.password
    });

    await User.create(users, async (err,data) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Une erreur est arrive'
            })
        }else{
            res.json(data);
        }
    })
}

exports.getAll = async function(req,res){
    await User.getAll((err , data ) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Une erreur est arrive'
            })
        }else{
            res.json(data);
        }
    })
}
exports.getOne = async function(req,res){
    await User.getOne(req.params.id, (err , data ) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Une erreur est arrive'
            })
        }else{
            res.json(data);
        }
    })
}
exports.login = async function(req,res){
    await User.getOneByUsername(req.body.username, (err , user ) => {
        if(err || !user){
            res.status(err ? 500 : 401).send({
                message: err?.message || 'Invalid Credentials'
            })
        }else{
            if(user.password === req.body.password) {
                res.json({logged: true });
            }else{
                res.status(401).send({
                    message: 'Invalid Credentials'
                })
            }
        }
    })
}