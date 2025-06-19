import {prismaClient} from "db/client"

import express, { type Request, type Response }  from "express"

const app = express();

app.use(express.json())

app.listen(8080)
app.get('/',async(req:Request,res:Response)=>{
    const user = await prismaClient.user.findMany();
    res.json(user);
})

app.post('/',async(req:Request,res:Response)=>{
    // const {username,password} = req.body;
    const user = await prismaClient.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    })
    res.json(user);
})