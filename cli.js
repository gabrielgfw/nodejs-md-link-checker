import chalk from 'chalk';
import pegaArquivo from './index.js';
import validaURLs from './http-validacao.js';

const caminho = process.argv;
processaTexto(caminho);


async function processaTexto(caminhoDeArquivo) {
  const resultado = await pegaArquivo(caminhoDeArquivo[2]);
  
  if(caminho[3] === 'validar') {
    const listaURLsValidas = await validaURLs(resultado);
    console.log(chalk.yellow('# Links validados:'), listaURLsValidas);
  } else {
    console.log(chalk.yellow('# Lista de links:'), resultado);
  }
}

