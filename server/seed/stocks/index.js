import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "../../src/config/db.js";
import stockSeeder from "./stockSeeder.js";

async function start() {
  try {
    await connectDB(); // ⭐ IMPORTANT

    await stockSeeder.seed();

    console.log("🎉 Stock Seeding Completed");

    process.exit(0);
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
}

start();
