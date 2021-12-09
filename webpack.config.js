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
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js", ".json", ".wasm"],
  },
  module: {
    rules: [
      {
        test: /\.m?(j|t)sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { modules: false }],
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: [
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-syntax-import-meta",
              ["@babel/plugin-proposal-class-properties", { loose: false }],
              "@babel/plugin-proposal-json-strings",
            ],
          },
        },
      },
    ],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
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
