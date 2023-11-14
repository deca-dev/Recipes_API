const typeServices = require('./types.services')
const router = require('express').Router()
const passport = require('passport')
const adminValidate = require('../middlewares/rol.middleware')
require('../middlewares/auth.middleware')(passport)

router.route('/')
    .get(typeServices.getAllTypes)
    .post(passport.authenticate('jwt', {session: false}, adminValidate, typeServices.createType))

router.route('/:id')
    .get(typeServices.getTypeById)
    .delete(passport.authenticate('jwt', {session: false}, adminValidate, typeServices.deleteType))

module.exports = router