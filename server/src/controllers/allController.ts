import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

exports.get = async (req: any, res: any) => {
    const all = await prisma.menu.findMany({
        where: { available: true },
        include: { shop: true, price: true },
        orderBy: { id: 'asc' }
    })
    res.json(all)
};