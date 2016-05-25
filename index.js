#!/usr/bin/env node

var commander = require('commander');
var FileRead = require('./js/FileRead');


var file;

commander
    .version('0.0.1')
    .usage('[options] <file>')
    .action(function (filename) {
        file = new FileRead(filename);

        file.open(openFile);
    })
    .option('-s, --seed <string>', 'seed to generate the word')
    .option('-n, --number <n>', 'number of words to generate', parseInt)
    .parse(process.argv);

function openFile() {
    console.log(file.contents);
}
