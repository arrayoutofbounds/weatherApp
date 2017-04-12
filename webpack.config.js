module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav:  'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
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
  },
  devtool: 'cheap-module-eval-source-map'
};
