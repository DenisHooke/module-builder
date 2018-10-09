#!/usr/bin/env node
'use strict';
var fs = require('fs');
var path = require('path');
var helpers = require('../index');
var inquirer = require('inquirer');

var questions = [
    {
        type: 'input',
        name: 'modulePath',
        message: 'Put you module folder...',
        default: 'src/modules/',
    },
    {
        type: 'input',
        name: 'moduleName',
        message: "What\'s the name of the module?",
        default: 'awesome',
        validate: function(value) {
            var pass = true;
            if (pass) {
                return true;
            }

            return 'Please enter a module name (without any special symbols)';
        }
    },
    {
        type: 'confirm',
        name: 'reducer',
        message: 'Create reducer?',
        default: true,
    },
    {
        type: 'confirm',
        name: 'actions',
        message: 'Create actions?',
        default: true,
    },
    {
        type: 'confirm',
        name: 'components',
        message: 'Create component structure?',
        default: true,
    },
    {
        type: 'confirm',
        name: 'routing',
        message: 'Add routing?',
        default: true,
    },
];

inquirer.prompt(questions).then(answers => {
    var modulePath = './' + answers.modulePath + '/' + answers.moduleName;

    // 2 Create module dir
    helpers.makeDir(modulePath);

    // 3 Copy reducer if it's needed
    if (answers.reducer) {
        helpers.copyFolderRecursiveSync(path.resolve(__dirname, '../module/reducer'), modulePath);
    }

    // 4 Copy actions if it's needed
    if (answers.actions) {
        helpers.copyFolderRecursiveSync(path.resolve(__dirname, '../module/actions'), modulePath);
    }

    // 5 Copy component structure
    if (answers.components) {
        helpers.copyFolderRecursiveSync(path.resolve(__dirname, '../module/components'), modulePath);
    }

    // 6 Copy routing file
    if (answers.routing) {
        helpers.copyFileSync(path.resolve(__dirname, '../module/routes.js'), modulePath);
    }

    // 7 Copy index file, template.js and other not obligatory files for module
    helpers.copyFileSync(path.resolve(__dirname, '../module/index.js'), modulePath);
    helpers.copyFileSync(path.resolve(__dirname, '../module/config.js'), modulePath);
    helpers.copyFileSync(path.resolve(__dirname, '../module/template.js'), modulePath);

    // Patch file
    var indexFile = fs.readFileSync(modulePath + '/index.js')

    indexFile = indexFile
        .toString()
        .replace('{MODULE_NAME}', helpers.capitalizeFirstLetter(answers.moduleName));

    fs.writeFileSync(modulePath + '/index.js', indexFile);

    console.log('Module has been created succesfully. Please don\'t forget to register your module');
});
