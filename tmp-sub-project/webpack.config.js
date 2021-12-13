const config = require("@fzed51/webpack-config");
    
    module.exports = config({
      useReact: true,
      useTypescript: true,
      htmlWebpackPlugin: true,
      cleanOutput: true
    });
    