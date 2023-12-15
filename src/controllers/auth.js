const usersModel = require('../models/users')

exports.createNewUser = async (req, res) => {
    const {body} = req;
    try {
        await usersModel.createNewUser(body);
        const result = {
            message: 'Register Successfully',
            data: body
        }
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

exports.getUserById = async (req, res, next) => {
    try {
        const { idUser } = req.params;

        // Periksa apakah userId tidak kosong (undefined)
        if (!idUser) {
            return res.status(400).json({
                message: 'User ID is required',
            });
        }

        const [userData] = await usersModel.getUserById(idUser);

        if (userData) {
            const result = {
                message: 'Get User by ID Success',
                data: userData,
            };
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: 'User not found',
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

exports.getUserByEmail = async (req, res, next) => {
    try {
        const { emailUser } = req.params;
        if (!emailUser) {
            return res.status(400).json({
                message: 'Email is required',
            });
        }
        const [userData] = await usersModel.getUserByEmail(emailUser);
        if (userData) {
            const result = {
                message: 'Get User by Email Success',
                data: userData,
            };
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: 'User not found',
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

exports.getAllUsers = async (req, res, next) => {
    try {
        const [data] = await usersModel.getAllUsers();
        const result = {
            message: 'Get All User Succes',
            data: data,
        }
    res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

exports.updateUser = async (req, res, next) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        await usersModel.updateUser(body, idUser);
        const result = {
            message: 'Update Success!',
            data: {
                id: idUser,
                ...body
            }
        }
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

exports.deleteUser = async (req, res, next) => {
    const {idUser} = req.params;
    try {
        await usersModel.deleteUser(idUser);
        const result= {
            message: 'Delete Success!',
            data: null
        }
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    } 
}