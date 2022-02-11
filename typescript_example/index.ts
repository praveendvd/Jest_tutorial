#! /usr/bin/env node
"use strict";
import { print } from "./src/printer";
import yargs from "yargs";
import { questions } from "./src/constant";
import inquirer from "inquirer";

let OPTIONS = yargs
    .usage('\nUsage: -n "yourname"')
    .usage('\nor\n\nUsage: -i')
    .strict()
    .option('i', { alias: 'interactive', describe: 'Pass -i to enter Interactive mode', type: 'boolean', default: false })
    .option('n', { alias: 'name', describe: 'Your name', type: 'string' });

// OPTIONS.argv as union return type , meaning it returns either a promise or a yargs.Arguments object
// so use parseSync() instead to show it is a plain object else,
// You can also use (OPTIONS.argv as yargs.Arguments).i to check if the user passed -i, but this wont do auto-completion

if (!OPTIONS.parseSync().i) {
    OPTIONS.demandOption(['n']).argv
}

// call the inquirer prompt function is a promise so we need to call it inside a aync function
// we use a self invoke function
(async () => {

    // Await for the answer
    OPTIONS = OPTIONS.parseSync().i ?
        await inquirer.prompt(questions) :
        OPTIONS.argv;

    // Print the name
    print(OPTIONS.name);
})().catch((err) => {
    console.error(err)
});

