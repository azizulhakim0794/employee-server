const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
const router = express.Router();
const employeeController = require('./../employee/employee.controller')
router.post('/',employeeController.createPost)
router.get('/',employeeController.getPosts)
router.get('/:id',employeeController.getPostById)
router.put('/:id',employeeController.updateEmployeeById)
router.delete('/:id',employeeController.deleteEmployeeById)

module.exports = router;
