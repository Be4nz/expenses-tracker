import { client } from "./pgConnections";

const execute = async (query: string) => {
  try {
    await client.connect(); // gets connection
    await client.query(query); // sends queries
    return true;
  } catch (error: any) {
    console.error(error.stack);
    return false;
  } finally {
    await client.end(); // closes connection
  }
};

export const createTransactionsTable = async () => {
  const text = `
      CREATE TABLE IF NOT EXISTS "transactions" (
          "id" SERIAL,
          "title" varchar(255) NOT NULL,
          "date" TIMESTAMPTZ,
          "tag" varchar(255) NOT NULL,
          "type" varchar(255) NOT NULL,
          "amount" INT,
          "notes" TEXT,
          PRIMARY KEY ("id")
      );`;

  execute(text).then((result) => {
    if (result) {
      console.log("Transactions table created");
    }
  });
};
