const usersServices = require('./users.services');
const router = require('express').Router();
const passport = require('passport');
const adminValidate = require('../middlewares/rol.middleware');
const {getUserRecipes} = require('../recipes/recipes.services')

require('../middlewares/auth.middleware')(passport)

//? Main Route

router.get('/',usersServices.getAllUsers);

//? Protected routes for each user
router.route('/me')
    .get(passport.authenticate('jwt', {session:false}), usersServices.getMyUser)
    .patch(passport.authenticate('jwt', {session: false}), usersServices.patchMyUser)
    .delete(passport.authenticate('jwt', {session: false}), usersServices.deleteMyUser)

//? Dynamic Routes by Id, restricted by middleware validation (adminValidate) if user is admin (passport.authenticate sets the req.user with the decrypted token info)
router.route('/:id')
    .get(usersServices.getUserById)
    .patch(passport.authenticate('jwt', {session: false}),adminValidate,usersServices.patchUser)
    .delete(passport.authenticate('jwt', {session: false}),adminValidate,usersServices.deleteUser)

router.get('/me/my_recipes',passport.authenticate('jwt', {session: false}), getUserRecipes)


module.exports = router