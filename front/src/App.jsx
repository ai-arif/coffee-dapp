import { useState, useEffect } from "react";
import "./App.css";
import { ethers } from "ethers";
import abi from "./Coffee.json";
import Buy from "./components/Buy.jsx";
import Orders from "./components/Orders.jsx";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contractAddress: null,
  });

  const [account, setAccount] = useState("MetaMask Not Connected");

  useEffect(() => {
    const commonTemplate = async () => {
      const contractAddress = "0xEDEcf14f6a18a9f704783C5a25EE639C258af899";
      const ABI = abi.abi;

      try {
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(contractAddress, ABI, signer);
        setState({ provider, signer, contract });
        console.log(setState);
        console.log(contract);
      } catch (error) {
        alert(error);
      }
    };
    commonTemplate();
  }, []);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Buy a Coffee</h1>
          <p>{`Your Connected Address is: ${account}`}</p>
          <Buy state={state} />
          <Orders state={state} />
        </header>
      </div>
    </>
  );
}

export default App;
