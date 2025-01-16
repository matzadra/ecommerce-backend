-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "images" TEXT[];

-- CreateTable
CREATE TABLE "ThemeConfig" (
    "id" SERIAL NOT NULL,
    "themeName" TEXT NOT NULL,
    "primaryColor" TEXT NOT NULL,
    "backgroundColor" TEXT NOT NULL,
    "secondaryColor" TEXT NOT NULL,
    "accentColor" TEXT NOT NULL,
    "textColor" TEXT NOT NULL,
    "borderColor" TEXT NOT NULL,
    "shadow" TEXT NOT NULL,
    "titleFont" TEXT NOT NULL,
    "bodyFont" TEXT NOT NULL,
    "descFont" TEXT NOT NULL,
    "spacingUnit" TEXT NOT NULL,
    "borderRadius" TEXT NOT NULL,
    "width" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "customSpacing" TEXT NOT NULL,
    "customClass" TEXT NOT NULL,

    CONSTRAINT "ThemeConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ThemeConfig_themeName_key" ON "ThemeConfig"("themeName");
