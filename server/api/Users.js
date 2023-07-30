// // api/users.js
import express from 'express'
const jwt = require('jsonwebtoken');
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const app = express()

app.use(express.json())

app.get('/users', async (req, res) => {
    res.json(await prisma.users.findMany())

})

app.post('/login', async (req, res) => {
    if (req.body.email && req.body.password) {
        try {
            const user = await prisma.users.findFirst({
                where: {
                    email: req.body.email
                }
            })
            if (!user) {
                return res.status(400).json({ message: 'User not found' })
            }
            if (user.password != req.body.password) {
                return res.status(400).json({ message: 'Incorrect password' })
            }
            const token = jwt.sign(user, '1234', { expiresIn: '1h' });

            // const cookieOptions = {
            //     httpOnly: true, // O cookie só pode ser acessado pelo servidor (não é acessível via JavaScript no cliente)
            //     maxAge: 3600000, // Tempo de vida do cookie em milissegundos (1 hora neste exemplo)
            //   };
        
            // res.setHeader('Set-Cookie', cookie.serialize('token', token, cookieOptions));
            // console.log(cookie.serialize('token', token, cookieOptions))

            console.log({  user: user,  token: token ,})
        
            return res.json({ user: user,  token: token });

        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    } else {
        res.status(400).json({ message: 'Invalid data' })
    }

})

export default {
    path: '/api',
    handler: app
}