import * as express from 'express'

class Server{
    constructor(app){
        this.app = app
    }
    
    listen = (PORT) =>{
        this.app.listen(process.env.PORT || PORT, () =>{
            console.log(`Server Running on http://localhost:${PORT}`)
        })
    } 

    setStaticDir = (dirname) =>{
        this.app.use(express.static(dirname))
    }

    setViewEngine = (engine) =>{
        this.app.set('view engine', engine)
    }
    
    setViewDirectory = (dirname) =>{
        this.app.set('views', dirname)
    }
}



export {Server}