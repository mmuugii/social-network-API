const router = require('express').Router();
const { createUser, getUsers, getSingleUser, updateUser, deleteUser, addOneFriend, deleteFriend } = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteFriend);
router.route('/:userId/friends/:friendId').post(addOneFriend).delete(deleteFriend);

module.exports = router;