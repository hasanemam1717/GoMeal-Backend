import express, { Request, Response } from 'express';
const app = express();

// using parser
app.use(express.json());

// using router 
// app.use('/api', router)


app.get('/', (req: Request, res: Response) => {
    res.send('Server is running 💨🏃‍♀️');
});


export default app;