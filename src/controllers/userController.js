

getAllUsers = (req,res) => {
    res.json({message: 'Get all users'});
}

getUser = (req,res) => {
    //console.log(req.query.enabled)
    //console.log(req.params.id)
    res.json({message: `Get user by id ${req.params.id}`});
}

module.exports = {
    getAllUsers,
    getUser
}