import { Client } from "pg";

export async function findAll() {
    const client = new Client();
    await client.connect();

    const res = await client.query("SELECT * FROM usuario");

    await client.end();

    return res.rows;
}