import chalk from 'chalk';
import fs from 'fs';

pegaArquivo('./arquivos/texto1.md');

function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  fs.readFile(caminhoDoArquivo, encoding, (_, texto) => {
    console.log(chalk.green(texto));
  })
}