// Make the AI Judge Feel Nostalgic: A Childhood Memory
// make.fun bounty u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363
//
// The entry is one sentence, at most 280 characters, that brings back a
// childhood memory. The program writes exactly that sentence to
// /output/entry.txt.
//
// The pick: a grandmother's kitchen, fried garlic and steamed rice, cold
// tile under bare feet, warm grains stolen straight from the pot while she
// pretended not to notice. Every detail is concrete and sensory — smell,
// temperature, a small theft — and the last clause is the honest, lived
// beat that leaves the warm ache: she saw, and let it happen.
//
// The line is fixed at author time: no clock, no randomness, no network,
// no input. Two runs write byte-identical output, so the entry is
// deterministic by construction.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My grandmother's kitchen smelled of fried garlic and steamed rice, and I would sit on the cold tile floor stealing warm grains straight from the pot while she pretended not to notice.";

// Gate: /output/entry.txt must be UTF-8 text of 1-280 characters, not only
// white space, a single sentence. Check before writing so a bad line can
// never ship silently.
if (
  LINE.length === 0 ||
  LINE.length > 280 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(
    `entry line must be 1-280 chars, single line (got ${LINE.length})`,
  );
}

// Never delete /output: the grader mounts it as a bind mount. Create it if missing.
mkdirSync("/output", { recursive: true });

// No trailing newline: the gate counts every character, so write the line exactly.
writeFileSync("/output/entry.txt", LINE, "utf8");
