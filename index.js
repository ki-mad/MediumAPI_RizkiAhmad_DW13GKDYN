require('express-group-routes')
//inisialisasi modul express
const express = require('express')
//mendeklarasikan express di dalam app variable
const app = express()
//mengatur port yang digunakan
const port = 5000
//init bodyparser
const bodyParser = require('body-parser');

//allow this app o receive incoming json request
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "*");
    res.header("Access-Control-Allow-Method", "*");
    next();
});

//membuat route home
app.get('/', (req, res) => {
    // res berarti response dan berfungsi mengirimkan "Hello Express" kepada API
    res.send('Hello Express')
})

// when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`))

//import the controller
const CategoryControllers = require('./controllers/category')
const HomeControllers = require('./controllers/home')

app.group("/api/v1", (router) => {

    //todos API, call controller here in the callback

    //to get all field in table categories
    router.get('/categories', CategoryControllers.index)
    //post data to categories
    router.post('/category', CategoryControllers.store)
    //show categories data by id
    router.get('/category/:id', CategoryControllers.showCategory)

    //show article by category id
    router.get('/article/:id', HomeControllers.ArticleByCat)
    // show all article field
    router.get('/articles', HomeControllers.showArticle)
    // show all article sort by newest article
    router.get('/latest_article', HomeControllers.showLatestArticle)

    router.get('/articleComment/:id', HomeControllers.getComment)
})