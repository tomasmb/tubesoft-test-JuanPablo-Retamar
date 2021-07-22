const { Times } = require('../db');
const { v4: uuidv4 } = require('uuid');
const { Sequelize } = require('sequelize');

const save = async(req, res, next) => {
    if (!req.body.sec) {return res.status(400).json({message: 'bad request', status: 400})}
    try { 
        const id = uuidv4()
        const time = {
            id,
            seconds: req.body.sec,
            minutes: req.body.min,
            hours: req.body.hr,
            days: req.body.days,
        }
        const times = await Times.create(time)
        return res.status(200).json(times)
    } catch(error){
        return res.status(500).json({message: 'internal error DB'})
    }
}

const get = async(req, res, next) => {
    try{
        const times = await Times.findAll()
        return res.status(200).json(times)
    } catch(erro){
        return res.status(400)
    }
}

const del = async(req, res, next) => {
    try{
        await Times.destroy({where: {id : req.body.id}})
        const times = await Times.findAll()
        return res.json(times)
    } catch {
        next(error)
    }
}

module.exports = {
    get,
    save,
    del
}