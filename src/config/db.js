import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "aws.connect.psdb.cloud",
  user: "9yycarxia4og1jkx65v3",
  password: "pscale_pw_9ZHko76aBIWJYTOHaFrJydyCkgkYoJKbaooqKIE1WgK",
  database: "nextql",
  ssl: { rejectUnauthorized: true },
});

export default pool;
