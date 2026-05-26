const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://admin:Singh2004@cluster0.3fdep91.mongodb.net/predictix";

async function run() {
const client = new MongoClient(uri);

try {
await client.connect();
console.log("✅ MongoDB Connected Successfully!");
} catch (error) {
console.error("❌ Error:", error);
} finally {
await client.close();
}
}

run();
