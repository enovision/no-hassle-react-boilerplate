// karma.conf.js
let webpack = require('webpack');
let webpackConfig = require('../webpack/webpack.dev.js');
let helpers = require('../helpers');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'], // ['Chrome']
        files: [
            '../../tests/_allTests.js'
        ],
        frameworks: ['jasmine'], // ['jasmine']
        preprocessors: {
            '../../tests/_allTests.js': ['webpack', 'coverage']
        },
        plugins: [
            "karma-webpack",
            //"karma-chai",
            "karma-jasmine",
            "karma-mocha",
            "karma-coverage",
            //"karma-phantomjs-launcher",
            "karma-chrome-launcher",
            "karma-mocha-reporter"
        ],
        reporters: ['mocha'],
        mochaReporter: {
            maxLogLines: -1,
            symbols: {
                success: '+',
                info: '#',
                warning: '!',
                error: 'x'
            }
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        colors: true,
        logLevel: config.LOG_INFO,
        singleRun: false,
        coverageReporter: {
            includeAllSources: true,
            dir: 'coverage/',
            reporters: [
                {type: "html", subdir: "html"},
                {type: 'text'},
                {type: 'text-summary'}
            ]
        }
    });
};