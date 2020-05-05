//------------------------------------------Importing Librarys--------------------------------------//

const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')
const userController = require('./controllers/userController')

//----------------------------------------Router Definition-----------------------------------------//

const router = express.Router()


//-------------------------------------------Routes-------------------------------------------------//

//Test Route

router.get('/test', (req, res) => {
    res.json({ Message: "Testing Server, This Route is working just Fine!" })
})

//CRUD User

router.post('/createUser', userController.store)
router.delete('/deleteUser/:id', userController.destroy)
router.get('/showUser/:id', userController.show)
router.put('/updateUser/:id', userController.update)

//Login User

router.get('/login', userController.login)


//-------------------------------------------Exporting Router---------------------------------------//


module.exports = router


//==================================================================================================//

//Image Created with Multer

// router.post('/post', multer(multerConfig).single('file'), async (req, res) => {
//     const { originalname: name, size, filename: key } = req.file

//     /*const image = await Image.create({
//         name,
//         size,
//         key,
//         url: '',
//     })*/

//     return res.send(req.file)

// })