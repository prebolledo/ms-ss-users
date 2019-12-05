import express from 'express'
import bodyParser from 'body-parser'
const compression = require('compression')

const app = express()

app.use(compression({filter: () => true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

export default (initRoutes) => {
    initRoutes(app);
    const PORT = 10000
    app.listen(PORT, () =>{
        console.log(`server listen on port ${PORT}`)
    })
}