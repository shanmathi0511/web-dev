const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://71762134045:sheethal%405@sales-ai-analytics.wqjnvzk.mongodb.net/sales-ai-analytics?retryWrites=true&w=majority";

async function run() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected successfully to server");
    await client.close();
  } catch (err) {
    console.error(err);
  }
}

run().catch(console.dir);
