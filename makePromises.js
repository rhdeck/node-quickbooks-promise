const { readFileSync, writeFileSync } = require("fs");
const { join, resolve } = require("path");
const js2md = require("jsdoc-to-markdown");
const qbPath = require.resolve("node-quickbooks");
const mustache = require("mustache");
const text = readFileSync(qbPath, {
  encoding: "UTF8"
});
const lines = text.split("\n");
const declarations = lines
  .map((line, index, source) => {
    if (/QuickBooks\.prototype.*function.*callback\)/.test(line)) {
      let comments = [];
      if (source[index - 1].includes("*/")) {
        const slicedSource = [...source].slice(0, index);
        const reversedIndex = slicedSource
          .slice()
          .reverse()
          .findIndex(e => /\/\*/.test(e));
        const lastCommentStart = slicedSource.length - reversedIndex;
        comments = slicedSource.slice(lastCommentStart - 1);
      }
      return { comments, line };
    }
  })
  .filter(Boolean);
const candidates = declarations
  .map(({ comments, line }) => {
    const [proto, functionCall] = line.split(" = ");
    const functionName = proto.split(".").pop();
    let args = /\((.*)\)/
      .exec(functionCall)
      .pop()
      .split(",")
      .map(s => s.trim());
    const last = args.pop();
    if (last !== "callback") return null;
    return { functionName, args, comments };
  })
  .filter(Boolean);
const olds = candidates.map(({ functionName }) => {
  return `QuickBooks.prototype.${functionName}Old = QuickBooks.prototype.${functionName}`;
});
const promises = candidates.map(({ functionName, args, comments }) => {
  const commentText = comments
    .filter(l => !l.includes("callback -"))
    .join("\n");
  return `
${commentText}
QuickBooks.prototype.${functionName} = promisify(QuickBooks.prototype.${functionName}Old)`;
});
const outLines = [
  'const { promisify } = require("util")',
  "/**",
  "* Quickbooks integration class from node-quickbooks",
  "* @class",
  "*/",
  'const QuickBooks = require("node-quickbooks")',
  "//#region Conversion of methods to Old",
  ...olds,
  "//#endregion",
  "//#region New Promise declarations",
  ...promises,
  "//#endregion",
  "module.exports = QuickBooks"
];
const outText = outLines.join("\n");
const outFile = join(process.cwd(), "index.js");
writeFileSync(outFile, outText);
(async () => {
  const docs = await js2md.render({ files: [outFile] });
  const base = readFileSync(join(process.cwd(), "readmemd.base"), {
    encoding: "UTF8"
  });
  const md = mustache.render(base, { docs });
  writeFileSync(join(process.cwd(), "README.md"), md);
})();
