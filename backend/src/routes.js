//------------------------------------------Importing Librarys--------------------------------------//

const express = require('express')

//------------------------------------------Controllers---------------------------------------------//

const userController = require('./controllers/userController')
const commentController = require('./controllers/commentController')
const postController = require('./controllers/postController')

//----------------------------------------Router Definition-----------------------------------------//

const router = express.Router()

//-------------------------------------------Routes-------------------------------------------------//

//Test Route

router.get('/test', (req, res) => {
    res.send("Testing Server, This Route is working just Fine!")
})

//CRUD User

router.post('/createUser', userController.store)
router.delete('/deleteUser/:id', userController.destroy)
router.get('/showUser/:id', userController.showOne)
router.get('/showAll', userController.showAll)
router.put('/updateUser/:id', userController.update)
router.get('/userPosts', userController.userPosts)

//Login User

router.get('/login', userController.login)

//Create and Edit Comments

router.post('/createComment', commentController.store)
router.put('/editComment/:id', commentController.edit)

//Create Post

router.post('/createPost', postController.store)


//-------------------------------------------Exporting Router---------------------------------------//

module.exports = router
