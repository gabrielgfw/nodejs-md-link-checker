import axios from 'axios';

function handlerErros(erro) {
  throw new Error(erro.message);
} 

async function checaStatus(arrayURLs) {
  try {
    const arrayStatus = await Promise.all(arrayURLs.map(async url => {
      const res = await axios.get(url);
      return `${res.status} - ${res.statusText}`;
    }));
    return arrayStatus;
  } catch(erro) {
    handlerErros(erro);
  }
}

function geraArrayDeURLs(arrayLinks) {
  return arrayLinks.map(link => Object.values(link).join());
}

export default async function validaURLs(arrayLinks) {
  const listaURls = geraArrayDeURLs(arrayLinks);
  const resultadoUrls = await checaStatus(listaURls);
  return arrayLinks.map((link, index) => {
    return { ...link, status: resultadoUrls[index] };
  })
}