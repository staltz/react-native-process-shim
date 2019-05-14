var RNOS = require("react-native-os-staltz");
module.exports = global.process = {
  version: "7.1.0",
  umask: () => 18,
  cwd: () => "",
  nextTick: setImmediate,
  env: {
    HOME: RNOS.homedir()
  },
  argv: ["react-native", "run-android", "your-app"],
  versions: {}
};
