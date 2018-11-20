import { initializeWebServer } from "./bootstrap/web-server";
import { initializeDatabase } from "./bootstrap/db";

console.log("Initializing DB");
initializeDatabase();

console.log("Initializing web server");
initializeWebServer();
