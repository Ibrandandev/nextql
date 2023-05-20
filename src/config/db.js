import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "aws.connect.psdb.cloud",
  user: "iokd5dzic3ti8jyccy9a",
  password: "pscale_pw_DkfK4aWTtFymLWWbDafwaqRS7soFJBhNkDxy7WySfQ8",
  database: "nextql",
  ssl: { rejectUnauthorized: true },
});

export default pool;
