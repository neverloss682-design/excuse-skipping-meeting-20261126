// The Funniest Excuse for Skipping a Meeting entry generator — make.fun
// "The Funniest Excuse for Skipping a Meeting" (u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163)
//
// Writes the funniest excuse for skipping a meeting to <output>/entry.txt.
// Output dir defaults to "/output" and can be overridden with
// MAKEFUN_OUTPUT_DIR. Node 22 stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: 147 characters, within the 1-200 gate. Reversal: skipping the
// 9 AM standup to go to the bank at 9:05 and prove you are still alive —
// because the bank's system has listed you as deceased since 2019. Concrete
// detail (9:05, deceased since 2019).
const ENTRY =
  "I can\u2019t make the 9 AM standup \u2014 I\u2019m booked at the bank at 9:05 to prove I\u2019m still alive, because their system has listed me as deceased since 2019.";

// Write the entry to <output>/entry.txt. The grader runs this file with no
// arguments and reads /output/entry.txt, so the default must stay absolute.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
