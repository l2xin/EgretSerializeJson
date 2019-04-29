//@ts-check
const path = require("path");
const outputPath = path.resolve(__dirname, "dist");


const globalObjectName = 'gameConfig';


class DtsBundlePlugin {
    apply(compiler) {
        compiler.hooks.done.tap('Hello World Plugin', (
            stats /* stats is passed as argument when done hook is tapped.  */
        ) => {
            bundleDts();
        });
    }
}

module.exports = {
    mode: "development",
    devtool: false,

    entry: "./src/index.ts",

    output: {
        library: {
            // @ts-ignore
            root: globalObjectName
        },
        libraryTarget: 'umd',
        globalObject: "this",
        filename: "config.js",
        path: outputPath
    },

    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader',
            options: {
            }
        }
        ]
    },
    resolve: {
        extensions: [
            ".ts"
        ]
    },
    plugins: [
        new DtsBundlePlugin()
    ]
};




//@ts-check
// require module
const dts = require('dts-bundle');
const fs = require('fs');
function bundleDts() {
    const opts = {

        name: '@egret/pro',
        main: 'dts-temp/index.d.ts',
        baseDir: 'dts_temp',
        out: '../dist/config.d.ts',
        // include typings outside of the 'baseDir' (i.e. like node.d.ts)
        // - default: false
        externals: false,
        // reference external modules as <reference path="..." /> tags *** Experimental, TEST NEEDED
        // - default: false
        referenceExternals: false,
        // filter to exclude typings, either a RegExp or a callback. match path relative to opts.baseDir
        // - RegExp: a match excludes the file
        // - function: (file:String, external:Boolean) return true to exclude, false to allow
        // - always use forward-slashes (even on Windows)
        // - default: *pass*
        exclude: /^defs\/$/,
        removeSource: false,

        // indentation to use in output file
        // - default 4 spaces
        indent: '	',
        // prefix for rewriting module names
        // - default ''
        prefix: '',
        // separator for rewriting module 'path' names
        // - default: forward slash (like sub-modules)
        separator: '/',
        // enable verbose mode, prints detailed info about all references and includes/excludes
        // - default: false
        verbose: false,
        // emit although included files not found. See "Files not found" section. 
        // *** Experimental, TEST NEEDED
        // - default: false 
        emitOnIncludedFileNotFound: false,
        // emit although no included files not found. See "Files not found" section. 
        // *** Experimental, TEST NEEDED
        // - default: false     
        emitOnNoIncludedFileNotFound: false,
        // output d.ts as designed for module folder. (no declare modules)
        outputAsModuleFolder: true,
        // path to file that contains the header
        // // insert a header in output file. i.e.: http://definitelytyped.org/guides/contributing.html#header
        // - default: null
        // headerPath: "path/to/header/file",
        // text of the the header
        // doesn't work with headerPath
        // // insert a header in output file. i.e.: http://definitelytyped.org/guides/contributing.html#header
        // - default: ''
        // headerText:''
    };



    // run it
    // @ts-ignore
    dts.bundle(opts);

    const dtsfilename = path.resolve(opts.baseDir, opts.out);
    let content = fs.readFileSync(dtsfilename, 'utf-8');
    content = 'declare namespace ' + globalObjectName + ' {\n '
        + content.replace(/export\ declare\ /gi, '').replace("export * from '@egret/ts-binary-serializer';", "")
        + "\n}";
    fs.writeFileSync(dtsfilename, content);
}



