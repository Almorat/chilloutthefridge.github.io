import cofABI from './COF_ABI.json' assert { type: "json" };  

const network = {
  name: 'matic',
  chainId: 137,
  _defaultProvider: (providers) => new providers.JsonRpcProvider('https://polygon-rpc.com/')
};

//const provider = new ethers.providers.Web3Provider(window.ethereum, "any")
const provider = ethers.getDefaultProvider(network);
const cofAddress = "0xc106E908a27773D8634fb7Db26Dd2A37B4348710";
const cofContract = new ethers.Contract(cofAddress, cofABI, provider);

provider.on("network", (newNetwork, oldNetwork) => {
  if (oldNetwork) window.location.reload();
});

export{ cofContract, provider }