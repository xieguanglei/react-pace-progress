const dalaran = require('dalaran');

const tasks = dalaran.libraryTasks({
    demo: './example',
    umdName: 'Pace',
    react: true,
    libExternals: ['react', 'prop-types'],
    testEntryPattern: './spec/**/*.spec.js'
});

module.exports = tasks;