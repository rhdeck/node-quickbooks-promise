const { readFileSync, writeFileSync } = require("fs");
const { join, resolve } = require("path");
const qbPath = require.resolve("node-quickbooks");
const text = readFileSync(qbPath, {
  encoding: "UTF8"
});
const lines = text.split("\n");
const declarations = lines.filter(line =>
  /QuickBooks\.prototype.*function.*callback\)/.test(line)
);
const candidates = declarations
  .map(line => {
    const [proto, functionCall] = line.split(" = ");
    const functionName = proto.split(".").pop();
    let args = /\((.*)\)/
      .exec(functionCall)
      .pop()
      .split(",")
      .map(s => s.trim());
    const last = args.pop();
    if (last !== "callback") return null;
    return { functionName, args };
  })
  .filter(Boolean);
const promises = candidates.map(({ functionName, args }) => {
  return `
QuickBooks.prototype.${functionName}Old = QuickBooks.prototype.${functionName}
QuickBooks.prototype.${functionName} = promisify(QuickBooks.prototype.${functionName}Old)`;
});
const outLines = [
  'const { promisify } = require("utils")',
  'const QuickBooks = require("node-quickbooks")',
  ...promises,
  "module.exports.QuickBooks = QuickBooks"
];
const outText = outLines.join("\n");
writeFileSync(join(process.cwd(), "index.js"), outText);
