module.exports = function(config) {
  config.set({
    basePath: '.',

    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],

    files: [
      '*.spec.js'
    ],

    preprocessors: {
      '*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: {
      module: {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
        ]
      }
    }
  });
};
