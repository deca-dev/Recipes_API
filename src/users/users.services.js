const usersControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    usersControllers.getAllUsers()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
};

const getUserById = (req, res) => {
    const id = req.params.id;
    usersControllers.getUserById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(404).json(err)
        })
};

const registerUser = (req, res) => {
    const {firstName, lastName, email, password, phone, birthday, gender, country } = req.body;
    if (firstName && lastName && email && password && phone && birthday) {
        usersControllers.createUser({firstName, lastName, email, password, phone, birthday, gender, country })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json(err.message)
            })
    } else {
        res.status(400).json({
            message: 'Missing data', fields: {
                firstName: 'string',
                lastName: 'string',
                email: 'example@example.com',
                password: 'string',
                phone: '+5212345678',
                birthday: 'YYYY/MM/DD'
            }
        })
    }
};

const patchUser = (req, res) => { //? Password change will be through email request
    const id = req.params.id;
    const {firstName, lastName, phone, birthday, gender, country } = req.body; //? Only params that the user can modify (Except role, password, email, status and isVerified)
    usersControllers.updateUser(id, { firstName, lastName, phone, birthday, gender, country })
        .then(data => {
            if (data[0]) { //? Validation if update was done (controller returns an array with # of modified rows)
                res.status(200).json({ message: 'User edit correctly' })
            } else {
                res.status(400).json({ message: 'Invalid id' })
            }
        })
        .catch(err => {
            res.status(400).json(err.message)
        })
};

const deleteUser = (req, res) => {
    const id = req.params.id;
    usersControllers.deleteUser(id)
        .then(data => {
            if (data) { //? Validation if destroy was succesfull, (controller returns a number of rows affected)
                res.status(204).json()
            } else {
                res.status(404).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => {
            res.status(400).json(err.message)
        })
};

//? Me - Routes Services

const getMyUser = (req, res) => {
    const id = req.user.id; //? Req.user contains token information
    usersControllers.getUserById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const patchMyUser = (req, res) => {
    const id = req.user.id;
    const {firstName, lastName, phone, birthday, gender, country} = req.body;
    usersControllers.updateUser({firstName, lastName, phone, birthday, gender, country})
        .then(resposnse => {
            res.status(200).json({message: 'User information updated!'})
        })
        .catch(err => {
            res.status(400).json(err.message)
        })
}

const deleteMyUser = (req, res) => {
    const id = req.user.id;
    usersControllers.updateUser(id, {status: 'inactive'})
        .then(data => {
            res.status(200).json({message: 'User deleted'})
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllUsers,
    getUserById,
    patchUser,
    registerUser,
    deleteUser,
    getMyUser,
    patchMyUser,
    deleteMyUser
}