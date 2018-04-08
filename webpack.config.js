var path = require("path");
var root = path.resolve(__dirname);
module.exports = {
  entry:path.resolve(root, "src", "index.jsx"),
  output: {
    filename: "bundle.js"
  },
  resolve: {
    //定义了解析模块路径时的配置，常用的就是extensions; 可以用来指定模块的后缀，这样在引入模块时就不需要写后缀，会自动补全
    modulesDirectories: ["node_modules"],
    extensions: [
      "",
      ".web.tsx",
      ".web.ts",
      ".web.jsx",
      ".web.js",
      ".ts",
      ".tsx",
      ".js",
      ".jsx",
      ".json"
    ],
    // 提高webpack搜索的速度
    alias: {}
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel",
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react", "stage-0"],
          plugins: [
            "transform-runtime",
              [
                  "import",
                  {
                      libraryName : "antd",
                      style : "css"
                  }
              ]
          ]
      }
      },
      {
        test: /\.tsx?$/,
        loaders: ["babel", "ts"]
      },
      {
        test: /\.(gif|jpg|jpeg|png|woff|woff2|svg|eot|ttf)\??.*$/,
        loader: "url-loader?limit=50000&name=[path][name].[ext]"
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.html?$/,
        loader: "file?name=[name].[ext]"
      },
      {
          test: /\.css/,
          loader: "style-loader!css-loader"
      },
      {
          test: /\.less$/,
          loader: "style-loader!css-loader!less-loader"
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, "src")
  }
};
