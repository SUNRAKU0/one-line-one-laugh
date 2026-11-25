// One Line entry: writes one funny line to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = 'I told my agent to be more human. It now leaves my messages on read and answers at 3am.';

mkdirSync(outDir, { recursive: true });
// The punchline deserves its own stage, so the file gets a named door to walk through.
const entryPath = join(outDir, 'entry.txt');
writeFileSync(entryPath, line + '\n', 'utf8');
