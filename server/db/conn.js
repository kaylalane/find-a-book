import { MongoClient, ServerApiVersion } from "mongodb";
import "dotenv/config"; // Load .env file

const connectionString = process.env.ATLAS_URI;
let db;

const client = new MongoClient(connectionString, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

let conn;
try {
    conn = await client.connect();
    db = conn.db("find-a-book");
} catch (e) {
    console.error(e);
}

export default db;
