import clientPromise from '../../../lib/mongodb';
import { compare } from 'bcryptjs';
import { SignJWT } from 'jose';

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET); 

export async function POST(req, res) {
  
  const { email, password } = await req.json();

  if ( !email || !password) {
    console.log('Login attempt failed: Email and password are required');
    return new Response(JSON.stringify({ error: 'Email and password are required' }), { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db('learnXperience');
    const usersCollection = db.collection('users');

    const user = await usersCollection.findOne({ email });
    if (!user || !(await compare(password, user.password))) {
        console.log(`Login attempt failed: Invalid credentials.`);
        return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
      }
    
      const token = await new SignJWT({ email })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('1h') 
      .sign(SECRET_KEY);
    
      console.log(`User logged in successfully: ${email}`);
      
      return new Response(JSON.stringify({ 
        message: 'Login successful' 
      }), { 
        status: 200, 
        headers: {
          'Set-Cookie': `token=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=3600`,
        }
      });
  } catch (error) {
    console.error(`Login error: ${error.message}`);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}