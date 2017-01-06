module.exports = {
  // webpackが読み込むファイルを指定します。
  entry: {
    // 下の output.filename で使用されている[name]には、"app" がセットされます。
    bundle: "./src/js/entry.js"
  },
  output: {
    path: './public/js',
    // publicPath は webpack-dev-server で自動コンパイルするために必要（URLにおけるJSファイルへのパスを書く）
    publicPath: '/js/',
    filename: "[name].js"
  },
  resolve: {
    // require()する時に拡張子を省略可能にします。
    extensions: ['', '.js', '.css']
  }
};
