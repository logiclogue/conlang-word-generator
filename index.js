#!/usr/bin/env node

var commander = require('commander');

commander
    .version('0.0.1')
    .usage('[options] <file>')
    .action(function (file) {
        console.log(file);
    })
    .option('-s, --seed <string>', 'seed to generate the word')
    .option('-n, --number <n>', 'number of words to generate', parseInt)
    .parse(process.argv);
