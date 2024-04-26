import { PrismaClient } from '@prisma/client';
/** Learning notes...
 * Explain in detail what new PrismaClient() does
 * PrismaClient is a constructor function that creates a new instance of PrismaClient.
 * PrismaClient is a type-safe database client that can be used to interact with the database.
 * It provides methods for querying, creating, updating, and deleting data in the database.
 * When you create a new instance of PrismaClient, it establishes a connection to the database and provides a client object that you can use to interact with the database.
 *
 * Explain in detail what db is.
 * db is an instance of PrismaClient that can be used to interact with the database.
 * It provides methods for querying, creating, updating, and deleting data in the database.
 * You can use db to perform operations on the database, such as fetching data, creating new records, updating existing records, and deleting records.
 * db is a client object that represents a connection to the database and provides a way to interact with the database using PrismaClient.
 * we will be importing the db object all over our project to access the database
 *
 */
export const db = new PrismaClient();

