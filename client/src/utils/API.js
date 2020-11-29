import axios from 'axios';
import { localStorageToken } from '../configs/config'

// const token  = localStorage.getItem(localStorageToken)


export const httpRequest = axios.create({
        baseURL: '/api',
        method:'get',
        headers:{
            'Authorization': `Bearer ${ localStorage.getItem(localStorageToken)}`
        },

    });



export const getInitTasksAPI = () => httpRequest.get('/task/init')

export const createTaskAPI = task => httpRequest.post('/task/createTask',{ data: task,})

export const getTasksAPI = param => httpRequest.post('/task/getTask',{ data:param })

export const deleteTaskAPI = id => httpRequest.delete('/task/delTask',{ data: id, })

export const updateTaskAPI = task => httpRequest.put('/task/updateTask', { data: task })

export const getTaskByIdAPI = id => httpRequest.post('/task/getTaskById', {data: id})

export const getUserInfo = id => httpRequest.post('/user/getUserInfo', {data: id})

export const updateUserInfo = idAndData => httpRequest.put('/user/updateUserInfo', {data: idAndData});

export const getWorkDaysPerRange = dayRange => httpRequest.post('/task/getDetailsPerRange', { data: dayRange })