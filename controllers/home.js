const models = require('../models')
const Article = models.article
// const Category = models.category

exports.index = (req, res) => {
    Article.findAll().then(data => res.send(data))
    .catch(err => res.send(err))
}

exports.store = (req, res) => {
    Article.create(req.body).then(article => {
        res.send({article})
        // .catch(err => res.send(err))
    })
}