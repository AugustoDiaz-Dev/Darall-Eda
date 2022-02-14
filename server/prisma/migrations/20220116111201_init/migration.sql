-- CreateTable
CREATE TABLE "Shop" (
    "id" SERIAL NOT NULL,
    "shop_name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "Shop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "shopId" INTEGER,
    "priceId" INTEGER,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Price" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "twenty_percent_off" INTEGER NOT NULL,
    "hasDiscount" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Shop_email_key" ON "Shop"("email");

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price"("id") ON DELETE SET NULL ON UPDATE CASCADE;
