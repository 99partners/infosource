import fs from 'fs';
import path from 'path';
import { transform } from 'sucrase';

const SRC_DIR = path.resolve(process.cwd(), 'src');

function walk(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      filelist = walk(filepath, filelist);
    } else {
      filelist.push(filepath);
    }
  });
  return filelist;
}

const files = walk(SRC_DIR).filter((f) => f.endsWith('.tsx') || f.endsWith('.ts'));

for (const file of files) {
  const code = fs.readFileSync(file, 'utf8');
  const isTsx = file.endsWith('.tsx');
  const { code: out } = transform(code, {
    transforms: ['typescript', ...(isTsx ? ['jsx'] : [])],
    jsxRuntime: 'automatic',
    production: true,
  });
  const newExt = isTsx ? '.jsx' : '.js';
  const outPath = file.replace(/\.tsx?$/, newExt);
  fs.writeFileSync(outPath, out, 'utf8');
  fs.unlinkSync(file);
  console.log(`Converted ${path.relative(process.cwd(), file)} -> ${path.relative(process.cwd(), outPath)}`);
}

// Remove TS declaration files that are not needed in JS projects
const decls = ['src/types/vanta.d.ts', 'src/vite-env.d.ts'];
for (const d of decls) {
  const full = path.resolve(process.cwd(), d);
  if (fs.existsSync(full)) {
    fs.unlinkSync(full);
    console.log(`Removed ${d}`);
  }
}

console.log('Conversion complete.');


