import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

exports.get = async (req: any, res: any) => {
    const shops = await prisma.shop.findMany()
    res.json(shops)
};
exports.getOne = async (req: any, res: any) => {
    const { id } = req.params
    const shop = await prisma.shop.findUnique({
        where: { id: Number(id) },
    })
    res.json(shop)
};
exports.post = async (req: any, res: any) => {
    const newShop = await prisma.shop.create({
        data: { ...req.body },
    })
    res.json(newShop)
};
// exports.put = async (req: any, res: any) => {
//     const { id } = req.params
//     const { shop_name, category, email, img } = req.body
//     const updateShop = await prisma.shop.update({
//         where: { id: Number(id) },
//         data: {
//             shop_name,
//             category,
//             email,
//         },
//     })
//     res.json(updateShop)
// };
exports.delete = async (req: any, res: any) => {
    const { id } = req.params
    const deleteShop = await prisma.shop.delete({
        where: { id: Number(id) },
    })
    res.json(deleteShop)
};