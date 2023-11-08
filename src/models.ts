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

interface IPost {
	id: number,
	title: string,
	content: string,
}

export class Post implements IPost {
	static {
		pool.sql`CREATE TABLE IF NOT EXISTS posts (
			id SERIAL PRIMARY KEY,
			title VARCHAR(255),
			content TEXT
		);`
	}
	protected constructor(public id: number, public title: string, public content: string) { }

	public static async getPosts(limit?: number, offset?: number): Promise<Post[]> {
		const rows = await pool.sql<IPost>`SELECT * FROM posts ORDER BY id ${limit === undefined ? '' : `LIMIT ${limit}`} ${offset === undefined ? '' : `OFFSET ${offset}`}`;
		return rows.rows.map(row => new Post(row.id, row.title, row.content));
	}
}

interface ITagfulPost extends IPost {
	tags: ITag[]
}

export class TagfulPost extends Post implements ITagfulPost {
	static {
		pool.sql`CREATE TABLE IF NOT EXISTS post_tags (
		post_id INT REFERENCES posts(id),
		tag_id INT REFERENCES tags(id);`;
	}

	private constructor(id: number, title: string, content: string, public tags: Tag[]) { super(id, title, content); }

	public static async fromPost(post: Post): Promise<TagfulPost> { }

	public async getPosts(limit?: number, offset?: number): Promise<TagfulPost[]> {
		const rows = await pool.sql<IPost & {tag_name: string}>`SELECT
			p.id AS post_id,
			p.title AS post_title,
				p.content AS post_content,
				t.tag_name
			FROM
				posts p
				JOIN post_tags pt ON p.id = pt.post_id
				JOIN tags t ON pt.tag_id = t.id
			WHERE
				p.id = your_post_id;`
		const posts: TagfulPost[] = [];
		for (const row of rows.rows) {
		}
		return posts
	}
}
