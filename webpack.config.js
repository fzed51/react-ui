const path = require("path");

/**
 * @var {Configuration}
 */
const config = {
  output: {
    path: path.resolve(__dirname, "dist"),
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
            sourceMap: true,
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
      {
        test: /\.s?css$/i,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  externals: {
    react: {
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
      root: "React",
    },
    "react-dom": {
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
      root: "ReactDOM",
    },
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
