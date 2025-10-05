import { writeFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import process from "node:process";

const user = process.env.BASIC_AUTH_USER;
const pass = process.env.BASIC_AUTH_PASS;

if (!user || !pass) {
  console.error("Missing BASIC_AUTH_USER or BASIC_AUTH_PASS");
  process.exit(1);
}

// Netlify publishes `.next` for Next on Netlify
const publishDir = resolve(".next");
await mkdir(publishDir, { recursive: true });

const headers = `/*\n  Basic-Auth: ${user}:${pass}\n  WWW-Authenticate: Basic realm="Protected"\n`;

await writeFile(resolve(publishDir, "_headers"), headers, "utf8");
console.log("Wrote _headers to", publishDir);
