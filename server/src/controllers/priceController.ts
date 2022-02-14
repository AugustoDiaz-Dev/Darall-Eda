import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

exports.get = async (req: any, res: any) => {
    const prices = await prisma.price.findMany()
    res.json(prices)
};
exports.getOne = async (req: any, res: any) => {
    const { id } = req.params
    const price = await prisma.price.findUnique({
        where: { id: Number(id) },

    })
    res.json(price)
};
exports.post = async (req: any, res: any) => {
    const newPrice = await prisma.price.create({
        data: { ...req.body },
    })
    res.json(newPrice)
};
exports.put = async (req: any, res: any) => {
    const { id } = req.params

    try {
        const priceData = await prisma.price.findUnique({
            where: { id: Number(id) },
            select: {
                hasDiscount: true,
            },
        })

        const updatedPrice = await prisma.price.update({
            where: { id: Number(id) || undefined },
            data: { hasDiscount: !priceData?.hasDiscount || undefined },
        })
        res.json(updatedPrice)
    } catch (error) {
        res.json({ error: `Price with ID ${id} does not exist in the database` })
    }
};
exports.delete = async (req: any, res: any) => {
    const { id } = req.params
    const deletePrice = await prisma.price.delete({
        where: { id: Number(id) },
    })
    res.json(deletePrice)
};