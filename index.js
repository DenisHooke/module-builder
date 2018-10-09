var fs = require('fs');
var path = require('path');

/**
 * Create new dir if it doesn't exist
 * @param dir
 * @returns {*}
 */
function makeDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    return dir
};

/**
 *
 * @param source
 * @param target
 */
function copyFileSync(source, target) {

    var targetFile = target;

    //if target is a directory a new file with the same name will be created
    if (fs.existsSync(target)) {
        if (fs.lstatSync(target).isDirectory()) {
            targetFile = path.join(target, path.basename(source));
        }
    }

    fs.writeFileSync(targetFile, fs.readFileSync(source));
}

/**
 *
 * @param source
 * @param target
 */
function copyFolderRecursiveSync(source, target) {
    var files = [];

    //check if folder needs to be created or integrated
    var targetFolder = path.join(target, path.basename(source));
    if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder);
    }

    //copy
    if (fs.lstatSync(source).isDirectory()) {
        files = fs.readdirSync(source);
        files.forEach(function (file) {
            var curSource = path.join(source, file);
            if (fs.lstatSync(curSource).isDirectory()) {
                copyFolderRecursiveSync(curSource, targetFolder);
            } else {
                copyFileSync(curSource, targetFolder);
            }
        });
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
    makeDir,
    copyFileSync,
    copyFolderRecursiveSync,
    capitalizeFirstLetter,
};

