-- CreateTable
CREATE TABLE "transactionRecord" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transactionRecord_pkey" PRIMARY KEY ("id")
);
