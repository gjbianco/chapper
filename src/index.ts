import { idFromInfo, sectionInfoFromPath } from './section-info.ts';
import { findReferences } from './references.ts';

for (let i = 0; i < Deno.args.length; i++) {
  const filename = Deno.args[i];
  const info = sectionInfoFromPath(filename);
  if (info) {
    const refId = idFromInfo(info);
    const fileContents = Deno.readTextFileSync(filename);
    findReferences(fileContents).forEach((ref) => {
      console.log(`${refId} --> ${ref}`);
    });
  } else {
    console.warn('WARNING: could not get section info for:', filename);
  }
}
