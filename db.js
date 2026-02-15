import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import 'dotenv/config';

// 1. Create a connection pool optimized for Aiven
const poolConnection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT) || 12345, // Ensure port is a number
  
  // 2. CRITICAL: Aiven SSL Configuration
  // This allows the server to connect securely without needing a local .pem file
  ssl: {
    rejectUnauthorized: false 
  },
  
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// 3. Initialize Drizzle with the connection pool
export const db = drizzle(poolConnection);

console.log("🗄️  Database connection initialized with SSL support.");