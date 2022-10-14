const express=require('express')
const body=require('body-parser')
const app=express()

//1.- Variables de entorno 
const dotenv=require('dotenv')
dotenv.config({path:'./env/.env'})
const port=process.env.PORT || 8080

//2.- Rutas estáticas
app.use(express.static(`${__dirname}/public`))

//3.- Rutas dinámicas
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/vistas`)

//4.- Peticiones Post
app.use(body.urlencoded({extended:false}))
app.use(body.json())

//5.- Ruteo
app.use('/', require('./rutas/root'))

//6.- Estados 
app.use((req, res, next)=>{
    console.log('404')
    res.status(404).render('404',{data:''})
})

//7.- Cookies -- Requiere Mysql 

//8.- Servidor Web
app.listen(port, ()=>{
    console.log(`Servidor iniciado en el puerto ${port}`)
})





