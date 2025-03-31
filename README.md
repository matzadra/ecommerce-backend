# Ecommerce Backend

Backend API for an e-commerce system built with NestJS, GraphQL, and Prisma.  
Includes authentication, product and order management, and user control.

---

## Tech Stack

- **Node.js** + **NestJS**  
- **GraphQL** (Apollo Server)  
- **Prisma ORM** + **PostgreSQL**  
- **JWT** authentication  
- **Argon2** for password hashing  
- **Docker** for local environment setup

---

## Running Locally

### Using Docker

```bash
# Clone the repository
git clone https://github.com/matzadra/ecommerce-backend.git
cd ecommerce-backend

# Copy environment file
cp .env.example .env

# Start containers
docker-compose up -d

# Access GraphQL Playground (if enabled)
http://localhost:3000/graphql
```

### Without Docker

```bash
# Prerequisites:
# - Local PostgreSQL instance
# - Node.js 18+

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Run Prisma migrations
npx prisma migrate dev

# Start the app
npm run start:dev
```

---

## Authentication

- Login with email and password (hashed with Argon2)
- JWT token generation
- Protected routes using NestJS Guards
- Role-based access control (in progress)

---

## Project Structure

- `users/` → User registration and login  
- `auth/` → Strategies and guards  
- `products/` → Product CRUD  
- `orders/` → Order creation and tracking  
- `common/` → Shared logic and utilities

---

## Testing

- Configured with **Jest** and **Supertest**
- Includes setup for unit and e2e tests
- Coverage defined in `package.json`

```bash
# Run unit tests
npm run test

# Run end-to-end tests
npm run test:e2e

# View test coverage
npm run test:cov
```

---

## Migrations & Prisma

```bash
# Create a new migration
npx prisma migrate dev --name migration_name

# Generate Prisma client
npx prisma generate
```

---

## Environment Variables (.env example)

```env
DATABASE_URL="postgresql://user:password@localhost:5432/db"
JWT_SECRET="secret"
```

---

## In Progress

- Role-based access control (admin / user)
- Advanced product filters
- Pagination and sorting
- Public-facing consumer interface

---

## Author

Developed by [Matheus Zadra](https://www.linkedin.com/in/matheuszadra)  
Contact: matheuszadra@gmail.com
