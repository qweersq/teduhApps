// controllers/userController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { successResponse, errorResponse } = require('../helpers/responseHelper');
const { comparePasswords } = require('../helpers/passwordHelper');
const bcrypt = require('bcrypt');
require('dotenv').config();

let secretKey = process.env.JWT_SECRET;

const emailUserCheck = async (email) => {
    const user = await User.findOne({
        where: {
            email: email,
        },
    });

    // return boolean
    return user ? true : false;
};

const phoneUserCheck = async (phone) => {
    const user = await User.findOne({
        where: {
            phone: phone,
        },
    });

    // return boolean
    return user ? true : false;
};

const identityNumberUserCheck = async (identity_number) => {
    const user = await User.findOne({
        where: {
            identity_number: identity_number,
        },
    });
    
    // return boolean
    return user ? true : false;
};

const registerUser = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        // check if email already exist
        const emailExist = await emailUserCheck(email);
        const phoneExist = await phoneUserCheck(phone);
        if (emailExist) {
            return res.status(400).send(errorResponse('Email already exist', 400));
        }

        if (phoneExist) {
            return res.status(400).send(errorResponse('Phone already exist', 400));
        }

        const userCreate = await User.create({ name, email, password, phone, isNewUser: true});
        const token = jwt.sign({ id: userCreate.id, email: userCreate.email }, secretKey, { expiresIn: '1h' });

        const user = await User.findOne({
            where: {
                email: req.body.email,
            },
            attributes: { exclude: ['password'] },
        })

        res.status(201).send(successResponse({ user, token }, 'User registration successful'));
    } catch (error) {
        console.log(error);
        res.status(400).send(errorResponse(error, 400));
    }
};

const loginUser = async (req, res) => {
    try {
        const userCheck = await User.findOne({
            where: {
                email: req.body.email,
            }
        });

        if (!userCheck) {
            return res.status(401).send(errorResponse('Email not found', 401));
        }

        // Validate the password
        const isPasswordValid = await comparePasswords(req.body.password, userCheck.password);

        if (!isPasswordValid) {
            return res.status(401).send(errorResponse('Password is incorrect', 401));
        }

        // create token 
        const token = jwt.sign({ id: userCheck.id, email: userCheck.email }, secretKey, { expiresIn: '12h' });

        const user = await User.findOne({
            where: {
                email: req.body.email,
            },
            
        });

        res.send(successResponse({ user, token }, 'User login successful'));
    } catch (error) {
        res.status(401).send(errorResponse('Invalid login credentials', 401));
    }
};

const logoutUser = async (req, res) => {
    try {
        res.send(successResponse({}, 'User logout successful'));
    } catch (error) {
        res.status(500).send(error);
    }
};

// const createUser = async (req, res) => {
//     try {
//         const userCreate = await User.create(req.body);
//         const user = await User.findOne({
//             where: {
//                 email: req.body.email,
//             },
//             attributes: { exclude: ['password'] },
//         })

//         res.status(201).send(successResponse({ user }, 'User Create successful'));
//     } catch (error) {
//         console.log(error);
//         res.status(400).send(errorResponse(error, 400));
//     }
// };

// Get all users

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password'] },
        });
        res.send(successResponse(users, 'All users retrieved successfully'));
    } catch (error) {
        console.error('Error getting all users:', error);
        res.status(500).send(errorResponse('Internal Server Error', 500));
    }
};

// Get user by ID
const getUserById = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.findByPk(userId, {
            attributes: { exclude: ['password'] },
        });

        if (!user) {
            return res.status(404).send(errorResponse('User not found', 404));
        }

        res.send(successResponse(user, 'User retrieved successfully'));
    } catch (error) {
        console.error('Error getting user by ID:', error);
        res.status(500).send(errorResponse('Internal Server Error', 500));
    }
};

// Update user by ID
const updateUser = async (req, res) => {
    const userId = req.params.id;
    // const userId = req.body.id;
    try {
        const password = req.body.password;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            req.body.password = hashedPassword;
        }
        const [updatedRowsCount] = await User.update(req.body, { where: { id: userId } });

        if (updatedRowsCount === 0) {
            return res.status(404).send(errorResponse('User not found', 404));
        }

        const user = await User.findByPk(userId, {
            attributes: { exclude: ['password'] },
        });

        res.send(successResponse(user, 'User updated successfully'));
    } catch (error) {
        console.error('Error updating user by ID:', error);
        res.status(500).send(errorResponse({error}, 500));
    }
};

// Delete user by ID
const deleteUserById = async (req, res) => {
    const userId = req.params.id;

    try {
        const deletedRowCount = await User.destroy({ where: { id: userId } });

        if (deletedRowCount === 0) {
            return res.status(404).send(errorResponse('User not found', 404));
        }

        res.send(successResponse(null, 'User deleted successfully'));
    } catch (error) {
        console.error('Error deleting user by ID:', error);
        res.status(500).send(errorResponse('Internal Server Error', 500));
    }
};

const getProfile = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.user.email,
            },
            attributes: { exclude: ['password'] },
        });

        res.send(successResponse({user}, 'User retrieved successfully'));
    } catch (error) {
        console.error('Error getting user by ID:', error);
        res.status(500).send(errorResponse('Internal Server Error', 500));
    }
};

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    // createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUserById,
    getProfile
};
