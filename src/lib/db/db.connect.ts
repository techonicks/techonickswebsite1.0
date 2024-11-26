import { DbConnection } from "@/interfaces/db.interface";
import mongoose from "mongoose";

const connection: DbConnection = {};

export default async function dbConnect(dbName: string): Promise<any> {
  if (connection.isConnected) {
    console.log(`Already connected to the ${dbName} database`);
    return;
  }

  try {
    const response = await mongoose.connect(process.env.MONGO_URI || "", {
      dbName: dbName,
    });

    connection.isConnected = response.connections[0].readyState;
    console.log(`Connected to the ${dbName} database successfully`);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}
