document.getElementById("connect").addEventListener("click", async () => {
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    document.getElementById("address").innerHTML = await signer.getAddress();
  });
  
  document.getElementById("loadContract").addEventListener("click", async () => {
    try {
      document.getElementById("symbol").innerHTML = await cofContract.name();
    } catch (error) {
      document.getElementById("symbol").innerHTML = "Change to polygon network"
    }
  });