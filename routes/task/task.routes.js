const { Router } = require('express');
const authMdlw = require('../../middleware/auth.middleware');
const parseTasksByDate = require('../helpers/tasksHelpers');

const createTaskRoute = require('./createTask');
const getTaskRoute = require('./getTask');
const delTaskRoute = require('./delTask');
const updateTaskRoute = require('./updateTask');
const getTaskByIdRoute = require('./getTaskById');
const initialTaskskRoute = require('./initialTasks');
const getWeekInfo = require('./getFullWeekInfo');

const router = Router();



router.post('/createTask', authMdlw, (req, res)=> createTaskRoute(req, res))


router.post('/getTask', authMdlw, (req,res) => getTaskRoute(req,res));

router.delete('/delTask', authMdlw, (req, res) => delTaskRoute(req, res));

router.put('/updateTask', authMdlw, (req, res) => updateTaskRoute(req, res));

router.post('/getTaskById', authMdlw, (req, res) => getTaskByIdRoute(req, res));

router.get('/init', authMdlw, (req, res) => initialTaskskRoute(req, res));

router.post('/getDetailsPerRange', authMdlw, (req,res) => getWeekInfo(req,res));

module.exports = router;

