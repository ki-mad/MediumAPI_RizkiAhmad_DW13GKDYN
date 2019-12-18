const models = require('../models')
const Category = models.category

exports.index = (req, res) => {
    Category.findAll().then(data => res.send(data))
    .catch(err => res.send(err))
}

exports.store = (req, res) => {
    Category.create(req.body).then(category => {
        res.send({category})
        // .catch(err => res.send(err))
    })
}