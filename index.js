const express= require('express');
const {connect}= require("./utils/mongodb")
const homeRoutes = require('./routes/home.routes')
const tagRoutes = require('./routes/tags.routes')
const mangaRoutes = require('./routes/mangas.routes')
connect()



const PORT = 3000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", homeRoutes)
app.use('/tags', tagRoutes)
app.use('/mangas', mangaRoutes)

app.listen(PORT, () =>{
    console.log(`Listen in port: ${PORT}`)

})