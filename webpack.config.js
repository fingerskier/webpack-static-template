module.exports = {
  entry: './src/js/main.js',
  
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.css$/,
        
        use: [
          'style-loader',
          'css-loader',
        ],
      },

      {
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        use: [
          'url-loader',
        ],
      },    
    ],
  },

  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
};