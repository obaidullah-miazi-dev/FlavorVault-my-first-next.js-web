import clientPromise from "@/lib/mongo";
import bcrypt from "bcrypt";

export async function POST(req) {
  const { name, email, password } = await req.json();

  const client = await clientPromise;
  const db = client.db("flavorVault");
  const users = db.collection("users");

  const exists = await users.findOne({ email });
  if (exists) {
    return new Response(JSON.stringify({ error: "User already exists" }), {
      status: 400,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await users.insertOne({
    name,
    email,
    password: hashedPassword,
  });

  return new Response(JSON.stringify({ success: true }), { status: 201 });
}
