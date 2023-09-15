const {Router} = require('express');
const { getToDo, saveToDo, upDateToDo, deleteToDo } = require('../controllers/ToDoControllers');

const router = Router()

router.get('/',getToDo)
router.post('/save',saveToDo)
router.post('/update' , upDateToDo)
router.post('/delete' , deleteToDo)

module.exports = router ;