const categoryServices = require('./categories.services')
const router = require('express').Router();
const passport = require('passport')
const adminValidate = require('../middlewares/rol.middleware');
require('../middlewares/auth.middleware')(passport)

//? /
//? /:id

router.route('/')
    .get(categoryServices.getAllCategories)
    .post(passport.authenticate('jwt', {session: false}),adminValidate,categoryServices.createCategory)

router.route(':/id')
    .get(categoryServices.getCategoryById)
    .delete(passport.authenticate('jwt', {session: false}),adminValidate,categoryServices.deleteCategory)

module.exports = router

