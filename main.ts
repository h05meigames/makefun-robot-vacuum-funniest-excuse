// The Robot Vacuum's Funniest Excuse
// Competition: u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2
// One line, at most 120 characters: the excuse a robot vacuum gives for missing a spot.
//
// v1 (draft, REJECTED):
//   "There was a rug there, and my sensors got confused by the pattern, so I went around it instead of cleaning under it."
// Flaw of v1: it is a plain bug report, not a joke. It explains the failure
// instead of owning it, has no punchline, and speaks like a manual, not a
// vacuum. Nothing lands; the reader has to supply the humour themselves.
//
// v2 (final, genuine): the vacuum speaks in its own voice, the joke lives in
// a vacuum's world (dust bunny, charging dock), and the punchline lands at
// the very end.
//
// v3 (final, genuine): tightened from v2 — the denial is now direct ("I didn't
// miss that spot"), "charging dock" trimmed to "dock", and the punchline
// escalates: the dust bunny is no longer just protected, it is the vacuum's
// only friend, so evicting it would be a betrayal. Same joke, sharper landing.

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I didn't miss that spot — it's my dock's emotional support dust bunny, and I refuse to evict my only friend.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
console.log(`characters: ${entry.length}`);
