import clientPromise from '../../../lib/mongodb';
import { hash } from 'bcryptjs';

export async function POST(req) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    console.log('Signup attempt failed: All fields are required');
    return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db('learnXperience');
    const usersCollection = db.collection('users');

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      console.log(`Signup attempt failed: User already exists with email ${email}`);
      return new Response(JSON.stringify({ error: "User already exists" }), { status: 409 });
    }

    await usersCollection.insertOne({
      name,
      email,
      password: await hash(password, 10),
    });
    console.log(`User signed up successfully: ${email}`);


    return new Response(JSON.stringify({ message: "User created successfully" }), { status: 201 });
  } catch (error) {
    console.error(`Signup error: ${error.message}`);

    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}