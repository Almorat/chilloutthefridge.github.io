import { cofContract, provider } from './web3.js' ;

window.onload = async() => {
  let c = 0;
  let uri, response, json, image, name;
  uri = await cofContract.tokenURI(c);
  try{
    while (uri){
      response = await fetch('https://ipfs.io/ipfs/'+ uri.slice(7));
      json = await response.json()
      image = 'https://ipfs.io/ipfs/'+ json.image.slice(7)
      name = json.name;
      document.getElementById("portfolio").innerHTML += await nftCard(image, name);
      c++;
      uri = await cofContract.tokenURI(c);
    }
  } catch (error){}
}

function nftCard(image, name){
  return (`
      <div class="card">
        <img class="nft" src="${image}" alt="${name}">
        <img class="border" src="img/frame.svg">
      </div>
    `)
}