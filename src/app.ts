import express, { Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes'
import cookieParser from 'cookie-parser'
const app = express()

// using parser
app.use(express.json())
app.use(cookieParser())
app.use(cors())


// using router
app.use('/api', router)

app.get('/', (req: Request, res: Response) => {
    res.send('Server is running 💨🏃‍♀️')
})

export default app
