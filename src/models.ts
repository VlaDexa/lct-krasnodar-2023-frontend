import type { QueryResultRow } from "@vercel/postgres";
import { pool } from "./hooks.server"

export type PushSubscriptionModel = {
	endpoint: string,
	expirationTime: number | null,
	p256dh_key: string,
	auth_key: string,
}

interface ITag {
	id: number,
	tag_name: string
}

export class Tag implements ITag {
	static {
		pool.sql`CREATE TABLE IF NOT EXISTS tags (
				id SERIAL PRIMARY KEY,
				tag_name VARCHAR(255) UNIQUE
			);`
	}
	private constructor(public id: number, public tag_name: string) { };

	/** Gets all the tags from the database */
	public static async getAllTags(): Promise<Tag[]> {
		const rows = await pool.sql<QueryResultRow & ITag>`SELECT * FROM tags`;
		return rows.rows.map(row => new Tag(row.id, row.tag_name));
	}

	/** Creates a tag in the database
	* If a tag already exists, just returns that tag
	*/
	public static async createTag(name: string): Promise<Tag> {
		const tagr = await pool.sql<{ id: number }>`WITH new_tag AS (
				INSERT INTO tags (tag_name)
				VALUES (${name})
				ON CONFLICT (tag_name) DO NOTHING
				RETURNING id
			)
			SELECT id FROM new_tag
			UNION ALL
			SELECT id FROM tags WHERE tag_name = ${name}
			LIMIT 1;
			`;
		return new Tag(tagr.rows[0].id, name);
	}

	/** Deletes a tag from the database */
	public async delete() {
		await Tag.deleteById(this.id);
	}

	/** Deletes a tag from the database using only the id */
	public static async deleteById(id: number) {
		await pool.sql`DELETE FROM tags WHERE id = ${id}`;
	}

	/** Creates a POJO for serialization */
	public toPOJO(): ITag {
		return {
			id: this.id,
			tag_name: this.tag_name,
		}
	}
}
