const pessoas = require('../models/pessoas-mdl')

const index = async(connection, req, res) => {
    const params = {
        pageSize: req.query.pageSize || 10,
        currentPage: req.query.page || 0
    }
    const results = await pessoas.findAll(connection, params)
    res.render('pessoas/index', { results })
}

const deleteOne = async(connection, req, res) => {
    await pessoas.deleteOne(connection, req.params.id)
    res.redirect('/pessoas')
}

const createForm = (req, res) => {
    res.render('pessoas/create')
}

const createProcess = async(connection, req, res) => {
    await pessoas.create(connection, req.body)
    res.redirect('/pessoas')
}

const updateForm = async(connection, req, res) => {
    const pessoa = await pessoas.findById(connection, req.params.id)
    res.render('pessoas/update', { pessoa })
        //res.send(req.body)
}

const updateProcess = async(connection, req, res) => {
    await pessoas.update(connection, req.params.id, req.body)
    res.redirect('/pessoas')
}

module.exports = {
    index,
    deleteOne,
    createForm,
    createProcess,
    updateForm,
    updateProcess
}