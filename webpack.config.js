module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader', // get code into babel-loader, then run then through react and then through es 2015.
        query: {
          presets: ['react','es2015',"stage-0"]
        },
        test: /\.jsx?$/, // tells babel loader which files to parse
        exlude: /(node_modules|bower_components)/ // folders to ignore in parse
      }
    ]
  }
};
