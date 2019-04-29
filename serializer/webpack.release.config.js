//@ts-check
const path = require("path");
const outputPath = path.resolve(__dirname, "dist");


const config = require('./webpack.config');
config.mode = 'production';
config.output.filename = 'config.min.js'

module.exports = config;

