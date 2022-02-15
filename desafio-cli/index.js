#!/usr/bin/env node

const program = require('commander');
const csvParse =require('csv-parse');
const fs= require('fs');
const FormData = require('form-data'); 
const path = require('path');
const axios = require('axios');
const figlet = require('figlet');
const chalk = require('chalk');
const package = require('./package.json');

program.version(package.version);

console.log(chalk.cyan(figlet.textSync('desafio-cli')));
program
    .command('import:card <file>')
    .description('Adiciona um arquivo de cards')
    .action( (arg) => {


        if (!arg) {
            return
        }
        const formData = new FormData();
        
        formData.append('file',fs.createReadStream(arg));
        
         axios.post('http://localhost:3333/cards/import', formData, {
            headers: formData.getHeaders()
        })  .then(function (response) {
            console.log(`${chalk.green('arquivo importado com sucesso!')}`);
          })
          .catch(function (error) {
            console.log(`${chalk.red(error)}`);
          });
        
    });
    program
    .command('import:tag <file>')
    .description('Adiciona um arquivo de tags')
    .action( (arg) => {


        if (!arg) {
            return
        }
        const formData = new FormData();
        
        formData.append('file',fs.createReadStream(arg));
        
         axios.post('http://localhost:3333/tags/import', formData, {
            headers: formData.getHeaders()
        })  .then(function (response) {
            
            console.log(`${chalk.green('arquivo importado com sucesso!')}`);
          })
          .catch(function (error) {
   
            console.log(`${chalk.red(error)}`);
          });
        
    });

program.parse(process.argv);