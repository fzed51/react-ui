const path = require("path");

/**
 * @var {Configuration}
 */
const config = {
  output: {
    path: path.resolve(__dirname, "react-ui-dist"),
    filename: "index.js",
    library: "react-ui", // Important
    libraryTarget: "umd", // Important
    umdNamedDefine: true, // Important
  },
};

module.exports = (env) => {
  if (env.mode === "production") {
    console.log("--PRODUCTION--");
    return { ...config, mode: "production" };
  }
  console.log("--DEVELOPEMENT--");
  return { ...config, mode: "development" };
};
