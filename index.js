import chalk from 'chalk';
import fs from 'fs';

pegaArquivo('./arquivos/');

function trataErro(erro) {
  throw new Error(chalk.red(erro));
}

function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
    if(erro) {
      trataErro(erro);
    }
    console.log(chalk.green(texto));
  });
}

pegaArquivo('/arquivos/');
