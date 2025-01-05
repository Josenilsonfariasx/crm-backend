-- CreateTable
CREATE TABLE "Admin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "taxId" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT (DATETIME('now', 'localtime'))
);

-- CreateTable
CREATE TABLE "Client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "address" TEXT,
    "taxId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT (DATETIME('now', 'localtime'))
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "quantity" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "validity" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT (DATETIME('now', 'localtime'))
);

-- CreateTable
CREATE TABLE "Sale" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clientId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "sellerId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "total" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT (DATETIME('now', 'localtime')),
    CONSTRAINT "Sale_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Sale_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Sale_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_taxId_key" ON "Admin"("taxId");

-- CreateIndex
CREATE UNIQUE INDEX "Client_taxId_key" ON "Client"("taxId");
