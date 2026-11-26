import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Lost Sock Status Update — one status update, max 120 chars,
// in the voice of a lost sock that ended up somewhere it should not be.
const line =
  "Status: I am a sock in a shoe store display. They put me on a mannequin foot. I have never felt so seen.";

// Gate: 1–120 chars, one line, no trailing newline — verified by running.
if (line.length > 120 || line.includes("\n")) {
  throw new Error(`entry line fails gate: ${line.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length} chars to /output/entry.txt`);
