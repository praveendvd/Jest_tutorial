#! /usr/bin/env node
"use strict";
const { print } = require("./src/printer"),
    yargs = require("yargs"),
    { questions } = require("./src/constant"),
    inquirer = require("inquirer");


let OPTIONS = yargs
    .usage('\nUsage: -n "yourname"')
    .usage('\nor\n\nUsage: -i')
    .strict()
    .option('i', { alias: 'interactive', describe: 'Pass -i to enter Interactive mode', type: 'boolean', default: false })
    .option('n', { alias: 'name', describe: 'Your name', type: 'string' })

if (!OPTIONS.argv.i) {
    OPTIONS.demandOption(['n']).argv
}


// call the inquirer prompt function is a promise so we need to call it inside a aync function
// we use a self invoke function
(async () => {
    OPTIONS = OPTIONS.argv.i ? await inquirer.prompt(questions) : OPTIONS.argv;
    print(OPTIONS.name)
})().catch(err => console.error(err));