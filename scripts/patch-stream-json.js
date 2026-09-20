const fs = require("fs");
const path = require("path");

const baseDir = path.resolve(__dirname, "../node_modules/stream-json");
if (!fs.existsSync(baseDir)) {
  process.exit(0);
}

const compatDir = path.join(baseDir, "compat");
if (!fs.existsSync(compatDir)) {
  fs.mkdirSync(compatDir, { recursive: true });
}

fs.writeFileSync(
  path.join(compatDir, "Pick.cjs"),
  `const m = require("../src/filters/pick.js");
module.exports = m.default || m.pick || m;
`
);

fs.writeFileSync(
  path.join(compatDir, "Filter.cjs"),
  `const m = require("../src/filters/filter.js");
module.exports = m.default || m.filter || m;
`
);

fs.writeFileSync(
  path.join(compatDir, "StreamArray.cjs"),
  `const m = require("../src/streamers/stream-array.js");
module.exports = m.default || m.streamArray || m;
`
);

fs.writeFileSync(
  path.join(compatDir, "StreamObject.cjs"),
  `const m = require("../src/streamers/stream-object.js");
module.exports = m.default || m.streamObject || m;
`
);

const pkgPath = path.join(baseDir, "package.json");
if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
  pkg.exports = {
    ".": "./src/index.js",
    "./web": "./src/web/index.js",
    "./filters/Pick": "./compat/Pick.cjs",
    "./filters/Filter": "./compat/Filter.cjs",
    "./streamers/StreamArray": "./compat/StreamArray.cjs",
    "./streamers/StreamObject": "./compat/StreamObject.cjs",
    "./*": "./src/*"
  };
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
}
