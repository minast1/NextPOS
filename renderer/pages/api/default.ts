import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../lib/Prisma'
import bcrypt from 'bcrypt';

export default async (req: NextApiRequest, res: NextApiResponse) => {
     const body = req.body
     const hash = await bcrypt.hash(body.password, 10);
     const defaultAdmin = await prisma.user.upsert({
          where: {
               email: body.email
          },
          update: {},
          create: {
               email: body.email, 
               password: hash
          }
     })
     res.end();
}