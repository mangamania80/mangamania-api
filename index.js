const express= require('express');
const {connect}= require("./utils/mongodb")
const passport= require('passport')
require('./authentication')
const session = require('express-session')
const dotenv = require('dotenv');
dotenv.config();
const homeRoutes = require('./routes/home.routes')
const tagRoutes = require('./routes/tags.routes')
const usersRoutes = require('./routes/users.routes')
const loginRoutes = require('./routes/login.routes')
const mangaRoutes = require('./routes/mangas.routes')



const MongoStore = require('connect-mongo')

const {isAuth} = require('./middlewares/auth.middleware')

const PORT = 3000;
const app = express();

connect();


app.use(session({ 
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUnitialized: false,
    cookie: {
        maxAge: 1* 24* 60* 60* 1000,
    },

    store: MongoStore.create({mongoUrl:process.env.MONGODBURL})
}))



app.use(passport.initialize());
app.use(passport.session());

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/login', loginRoutes)
app.use('/users', usersRoutes)
app.use("/", homeRoutes)
app.use(isAuth)
app.use('/mangas', mangaRoutes)
app.use('/tags', tagRoutes)


app.use("*", (req, res) => {
    const error = new Error("Error, ruta desconocida")
    error.status = 404;
    return res.status(404).json(error)
});

app.use((error, req, res, next) => {
    console.log(error);
    return res.status(error.status || 500).json(error.message || "Unexpected error")
});

app.listen(PORT, () =>{
    console.log(`Listen in port: ${PORT}`)

})