const withTM = require("next-transpile-modules")(["@darrenbutcher/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
