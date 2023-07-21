import { client } from "./pgConnections";

const queries = [
  `
    CREATE TABLE IF NOT EXISTS "transactions" (
        "id" SERIAL,
        "title" varchar(255) NOT NULL,
        "date" TIMESTAMPTZ,
        "tag" varchar(255) NOT NULL,
        "type" varchar(255) NOT NULL,
        "amount" INT,
        "notes" TEXT,
        PRIMARY KEY ("id")
    );`,
  `
    CREATE TABLE IF NOT EXISTS "login" (
        "id" BIGSERIAL,
        "username" varchar(255) NOT NULL,
        "password" varchar(255) NOT NULL,
        UNIQUE ("username"),
        PRIMARY KEY ("id")
    );`,
];

const execute = async (queries: string[]) => {
  try {
    await client.connect(); // gets connection
    for (const query of queries) {
      await client.query(query);
    }
    return true;
  } catch (error: any) {
    console.error(error.stack);
    return false;
  } finally {
    await client.end(); // closes connection
  }
};

export const createTables = async () => {
  execute(queries).then((result) => {
    if (result) {
      console.log("Tables created");
    }
  });
};
