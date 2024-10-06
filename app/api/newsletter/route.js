import clientPromise from '../../lib/mongodb';

export async function POST(req, res) {
    const { email } = await req.json();

    if (!email) {
        console.log('Newsletter Signup failed: All fields required.');
        return new Response(JSON.stringify({ error: "Email ID is required" }), { status: 400 });
    }

    try {
        const client = await clientPromise;
        const db = client.db('learnXperience');
        const newsletterCollection = db.collection('newsletter');

        const existingEmail = await newsletterCollection.findOne({ email });
        if (existingEmail) {
            return new Response(JSON.stringify({ error: "Email already exists"}), { status: 409});
        }

        await newsletterCollection.insertOne({
            email
        });
        console.log(`Email added successfully: ${email}`);
    
        return new Response(JSON.stringify({ message: "Email added successfully" }), { status: 201 });

    } catch (error) {
        console.error(`Something went wrong ${error.message}`);
        return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
    }
} 