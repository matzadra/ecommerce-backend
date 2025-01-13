import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  console.log('Populating database...');

  // Criar 10 categorias únicas
  const uniqueCategories = new Set<string>();
  while (uniqueCategories.size < 10) {
    uniqueCategories.add(faker.commerce.department());
  }

  const categories = await prisma.category.createMany({
    data: Array.from(uniqueCategories).map((name) => ({ name })),
  });

  console.log(`${categories.count} categories created.`);

  // Obter as categorias criadas
  const categoryList = await prisma.category.findMany();

  // Criar 10 produtos, cada um associado a uma categoria aleatória
  const products = await prisma.product.createMany({
    data: Array.from({ length: 10 }, () => ({
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      stock: faker.number.int({ min: 0, max: 100 }),
      categoryId:
        categoryList[Math.floor(Math.random() * categoryList.length)].id,
    })),
  });

  console.log(`${products.count} products created.`);

  // Criar 10 usuários
  const users = await prisma.user.createMany({
    data: Array.from({ length: 10 }, () => ({
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    })),
  });

  console.log(`${users.count} users created.`);

  // Obter os usuários e produtos criados
  const userList = await prisma.user.findMany();
  const productList = await prisma.product.findMany();

  // Criar 10 pedidos, associando usuários e produtos aleatórios
  const orders = await prisma.order.createMany({
    data: Array.from({ length: 10 }, () => ({
      userId: userList[Math.floor(Math.random() * userList.length)].id,
      productId: productList[Math.floor(Math.random() * productList.length)].id,
    })),
  });

  console.log(`${orders.count} orders created.`);

  console.log('Database populated successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
