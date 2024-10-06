import clientPromise from '../lib/mongodb';

export default async function MongoDBStatus() {
  let message;
  try {
    const client = await clientPromise;
    await client.db('admin').command({ ping: 1 });
    message = "MongoDB connection is successful!";
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    message = "MongoDB connection failed.";
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1><b>MongoDB Connection Status</b></h1>
      <p>{message}</p>
    </div>
  );
}