import { Client } from "pg";
import { Usuario } from "./usuario.interface";

export async function findAll() {
    const client = new Client();
    await client.connect();

    const res = await client.query("SELECT * FROM usuario");

    await client.end();

    return res.rows;
}

export async function findById(id: number) {
    const client = new Client();
    await client.connect();

    const res = await client.query("SELECT * FROM usuario WHERE id = $1", [id]);

    await client.end();

    return res.rows[0];
}

export async function create(usuario: Usuario) {
    const client = new Client();
    await client.connect();

    const values: Array<any> = [usuario.nome, usuario.email, usuario.password, usuario.admin];

    const res = await client.query("INSERT INTO usuario (nome, email, password, admin) VALUES ($1, $2, $3, $4) RETURNING *", values);

    await client.end();

    return res.rows[0];
}

export async function update(id: number, usuario: Usuario) {
    const client = new Client();
    await client.connect();

    const values: Array<any> = [usuario.nome, usuario.email, usuario.password, usuario.admin, id];

    const res = await client.query("UPDATE usuario SET nome = $1, email = $2, password = $3, admin = $4 WHERE id = $5 RETURNING *", values);

    await client.end();

    return res.rows[0];
}

export async function remove(id: number) {
    const client = new Client();
    await client.connect();

    const res = await client.query("DELETE FROM usuario WHERE id = $1 RETURNING *", [id]);

    await client.end();

    return res.rows[0];
}

export async function removeAdmin(id: number) {
    const client = new Client();
    await client.connect();

    const res = await client.query("UPDATE usuario SET admin = false WHERE id = $1 RETURNING *", [id]);

    await client.end();

    return res.rows[0];
};