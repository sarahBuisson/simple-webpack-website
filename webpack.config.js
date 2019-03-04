const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const fs = require('fs')
const glob = require('glob')
const projectRoot = path.resolve(__dirname, './')
const src = path.join(projectRoot, 'src')

const CleanWebpackPlugin = require('clean-webpack-plugin');


const views = glob.sync(path.join(src, 'static', '**/*.@(html|css)')).map(filename => {
    // remove extention for further use
    const name = path.relative(path.join(src, 'static'), filename)
    return {
        filename,
        name
    }
});
module.exports = {
    entry: ['./src/index.js'], // file extension after index is optional for .js files
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [...views.map(entry => new HtmlWebpackPlugin({
        filename: `${entry.name}`,
        template: entry.filename,
        includeDependent: true,
        inject: true
    })),
//for the main index.html,
        new HtmlWebpackPlugin({template: "src/index.html", filename: "index.html"}),
        new CleanWebpackPlugin()
    ]

};
