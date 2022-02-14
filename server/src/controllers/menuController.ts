import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

exports.get = async (req: any, res: any) => {
    const menus = await prisma.menu.findMany({
    })
    res.json(menus)
};
exports.getOne = async (req: any, res: any) => {
    const { id } = req.params
    const menu = await prisma.menu.findUnique({
        where: { id: Number(id) },
    })
    res.json(menu)
};
exports.post = async (req: any, res: any) => {
    const newMenu = await prisma.menu.create({
        data: { ...req.body },
    })
    res.json(newMenu)
};
exports.put = async (req: any, res: any) => {
    const { id } = req.params

    try {
        const menuData = await prisma.menu.findUnique({
            where: { id: Number(id) },
            select: {
                available: true,
            },
        })

        const updatedMenu = await prisma.menu.update({
            where: { id: Number(id) || undefined },
            data: { available: !menuData?.available || undefined },
        })
        res.json(updatedMenu)
    } catch (error) {
        res.json({ error: `Menu with ID ${id} does not exist in the database` })
    }
};
exports.delete = async (req: any, res: any) => {
    const { id } = req.params
    const deleteMenu = await prisma.menu.delete({
        where: { id: Number(id) },
    })
    res.json(deleteMenu)
};