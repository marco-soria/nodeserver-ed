

getAllUsers = (req,res) => {
    res.status(200).json({message: 'Get all users'});
}

getUser = (req,res) => {
    //console.log(req.query.enabled)
    //console.log(req.params.id)
    res.status(201).json({message: `Get user by id ${req.params.id}`});
}

createUser = (req,res) => {
    let data = req.body;
    const {name, lastname, email, phone} = data;
    res.status(200).json({message: 'Create user', data: {name, lastname, email, phone}});
}

updateUser = (req,res) => {
    let data = req.body;
    const {name, lastname, email, phone} = data;
    res.status(200).json({message: 'Update user', data: {name, lastname, email, phone}})
}

deleteUser = (req,res) => {
    res.status(200).json({message: `Delete user ${req.params.id}`});
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}