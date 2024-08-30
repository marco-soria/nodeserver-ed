const UserService = require('../services/userService')

const userService = new UserService()

getAllUsers = async (req, res) => {
    const users = await userService.getAll()
    res.status(200).json(users)
}

getUser = async (req, res) => {
    const id = req.params.id
    const user = await userService.filterById(id)
    if (!user) {
        return res.status(400).json({'message': "Usuario no encontrado"})
    }
    res.status(200).json(user)
}

createUser = async (req, res)=>{
    try {
        let data = req.body
        await userService.create(data)
        res.status(201).send("Usuario registrado")
    } catch (error) {
        res.status(500).json({"error": error.message})
    }
    
}

updateUser = async (req, res)=>{
    let data = req.body
    const id = req.params.id
    const user = await userService.filterById(id)
    if (!user) {
        return res.status(400).json({'message': "Usuario no encontrado"})
    }
    await userService.update(id, data)
    res.status(200).send('Usuario modificado')
}

deleteUser = async (req, res)=>{
    const id = req.params.id
    const user = await userService.filterById(id)
    if (!user) {
        return res.status(400).json({'message': "Usuario no encontrado"})
    }
    await userService.delete(id)
    res.status(200).send('Usuario eliminado')
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}