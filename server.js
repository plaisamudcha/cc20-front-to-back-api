import express from 'express'
import cors from 'cors'
import morgan from 'morgan';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

const PORT = 3026;
const pai = express()
pai.use(express.json())
pai.use(cors({
  origin: "http://localhsot:5173"
}))
pai.use(morgan('dev'))

pai.use('/api',userRouter)
pai.use('/auth',authRouter)

pai.use((err,req,res,next) => {
  res.json({message: "server error"})
})

pai.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`)
})