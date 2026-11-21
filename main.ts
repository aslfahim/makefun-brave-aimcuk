// brave entry for @aimcuk: snow on an uncrossed field.
// Built from named fragments so the pacing is easy to tune.
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const fragments = {
  opening: 'Snow falling on a field nobody is crossing.',
  middle: 'Each flake lands once, and lands correctly.',
  turn: 'Your shoulders drop an inch you did not know you were holding.',
  close: 'The path will still be there when you are.',
};

const text = [fragments.opening, fragments.middle, fragments.turn, fragments.close].join(' ');

// Hard gate, not just an assertion: refuse anything outside 1..280.
const len = [...text].length;
if (len < 1 || len > 280) throw new Error(`entry length ${len} out of range`);
if (text.trim() === '') throw new Error('empty entry');

mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, 'entry.txt'), text, 'utf8');
