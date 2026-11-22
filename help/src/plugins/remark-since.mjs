// Release gating for guide text. Wrap anything that describes a feature that is not live yet in comment markers:
//
//   <!-- since 1.5 -->
//   ...markdown that only exists from release 1.5...
//   <!-- /since -->
//
// While the build is for an earlier release (tools/release.mjs, APP_RELEASE) everything between the markers is removed
// from the page, and so from the table of contents and the search index. When the release is reached the markers
// disappear and the text stays. Rules: markers go on their own line with a blank line around them (block use), or
// sit inline inside a paragraph. They cannot be nested. A marker that does not close, or a stray one, fails the build.
// Whole pages use `since: "1.5"` in the frontmatter instead (see content.config.ts).
//
// The opposite is `until`: text that is true of the live app but stops being true in a release (a removed screen, a
// changed rule). It is kept while the build is for an earlier release and removed once the flag reaches that version:
//
//   <!-- until 1.6 -->
//   ...markdown that is only true before release 1.6...
//   <!-- /until -->
//
// Same placement rules; a since block and an until block cannot be nested in each other, and a block closes with its
// own kind of marker. Pair an until block with a since block of the same version to replace a passage on release day.
import { released } from '../../../tools/release.mjs';

const OPEN = /^<!--\s*(since|until)\s+(\d+(?:\.\d+)*)\s*-->$/;
const CLOSE = /^<!--\s*\/(since|until)\s*-->$/;
const ANY = /<!--\s*\/?(since|until)\b/;

function gate(node, file) {
  if (!node.children) return;
  const out = [];
  let open = null;
  for (const child of node.children) {
    if (child.type === 'html') {
      const v = child.value.trim();
      const m = v.match(OPEN);
      if (m) {
        if (open) throw new Error(`${file}: nested <!-- ${m[1]} --> markers`);
        open = { kind: m[1], keep: m[1] === 'since' ? released(m[2]) : !released(m[2]) };
        continue;
      }
      const c = v.match(CLOSE);
      if (c) {
        if (!open) throw new Error(`${file}: <!-- /${c[1]} --> without an opening marker`);
        if (open.kind !== c[1]) throw new Error(`${file}: a ${open.kind} block is closed with <!-- /${c[1]} -->`);
        open = null;
        continue;
      }
      if (ANY.test(v)) {
        throw new Error(`${file}: a since or until marker shares an HTML block with other content. Put it on its own line with a blank line around it.`);
      }
    }
    if (open && !open.keep) continue;
    gate(child, file);
    out.push(child);
  }
  if (open) throw new Error(`${file}: <!-- ${open.kind} --> marker is never closed in the same block`);
  node.children = out;
}

export default function remarkSince() {
  return (tree, file) => gate(tree, file.path ?? 'a guide');
}
