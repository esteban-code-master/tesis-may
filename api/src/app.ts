import express from "express"
import cors from 'cors'
import passport from "passport"
import passport_middleware from "./api.v1/middlewares/passport"
import ENVIRONMENT from './api.v1/config/environments'
import api_router_v1 from './api.v1/routes/index'


const app = express()

app.use(express.json())
app.use(passport.initialize())
app.use(cors())

passport.use(passport_middleware)
app.use('/api/v1',api_router_v1)



app.listen(ENVIRONMENT.port,() => {

    console.log(`Server listening at http://localhost:${ENVIRONMENT.port}`)
})
