npm install prisma 

npx prisma init --datasource-provider sqlite //initialize prisma in the project

new prisma folder is now created with a schema.prisma file
    - this is what tells prisma we want it to connect to our sqlite database
    - also tells what kind of data and structures of data we will have
    - all the different models define different tables or collections of data that  
      are going to exist in our sqlite database
    - for this project we are going to have a collectoin of TOPICS, POSTS and COMMENTS

once the scheme.prisma file is complete, we create the database by running the following command in the terminal
    npx prisma migrate dev
        name for database: init

now inside prisma folder is our database, a file called 'dev.db'

next, make it easy to use the prisma client inside our project
    - new folder inside the src directory called 'db'
    - create 'index.ts' file inside db directory and add the code:
        
        import { PrismaClient } from '@prisma/client';

        export const db = new PrismaClient();


