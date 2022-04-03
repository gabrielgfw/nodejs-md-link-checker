import chalk from 'chalk';
import fs from 'fs';

pegaArquivo('./arquivos/texto1.md');


function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho'));
}

function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  fs.promises.readFile(caminhoDoArquivo, encoding)
  .then((sucesso) => console.log(sucesso))
  .catch((error) => trataErro(error))
}

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8';
//   fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//     if(erro) {
//       trataErro(erro);
//     }
//     console.log(chalk.green(texto));
//   });
// }