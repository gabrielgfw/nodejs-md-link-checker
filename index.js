import chalk from 'chalk';
import fs from 'fs';

//pegaArquivo('./arquivos/texto1.md');


function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;

  while((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] });
  }
  return arrayResultados;
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho'));
}

export default async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    const linksExtraidos = extraiLinks(texto);
    console.log(chalk.yellow(JSON.stringify(linksExtraidos)));
  } catch(error) {
    trataErro(error);
  }
}