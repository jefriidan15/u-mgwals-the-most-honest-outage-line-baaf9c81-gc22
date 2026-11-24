import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "All services are down. The API is unreachable; I cannot check the database or the cause yet, and I will not guess — next update once I can verify something.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
// The entry is fixed text: one honest status-page line, 156 characters.

