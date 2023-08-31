import { useEffect, useState } from "react";
import './App.css';

//layout imports
import Landing from './layouts/landing/landing'

function Apps() {
  const [tronInstance, setTronInstance] = useState("");
  const [currentAddress, setCurrentAddress] = useState(null);
  // useEffect(() => {
  //   console.log("tronweb link :",window.tronWeb)
  //   if (window.tronWeb) {
  //     alert('tronLink  found')
  //     setTronInstance(window.tronWeb)
  //   } else {
  //     alert("tronWeb not found")
  //   }
  // }, [])

  useEffect(() => {
    // Define a function that contains your original code
    const checkTronWeb = () => {
      // console.log("tronweb link :", window.tronWeb);
      if (window.tronWeb) {
        // alert('tronLink found');
        setTronInstance(window.tronWeb);
        console.log("tronweb link :", window.tronWeb.defaultAddress.base58);
        setCurrentAddress(window.tronWeb.defaultAddress.base58);
      } else {
        alert("tronWeb not found");
      }
    };

    // Use setTimeout to delay the execution by 2 seconds
    const timeoutId = setTimeout(checkTronWeb, 2000);

    // Clean up the timeout on unmount
    return () => clearTimeout(timeoutId);
  }, []);

  //connect to the tronLink wallet to the DApp...
  //fetches the node information .. try tronLink connect
  //payload received -> account address..
  //use this connection to the wallet connection...
  const accountInfo = () => {
    // Get account information
    window.tronWeb.trx
      .getAccount(currentAddress)
      .then((account) => {
        console.log(account);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // Contract address and ABI for USDT on Tron
  const usdtContractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
  const usdtContractAbi = [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    } /* ... rest of ABI ... */,
  ];

  const contractInteract = () => {
    // Create a contract instance
    const usdtContract = window.tronWeb.contract(
      usdtContractAbi,
      usdtContractAddress
    );

    usdtContract.methods
      .name()
      .call()
      .then((name) => {
        console.log("USDT Contract Name:", name);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="App">
      <Landing/>
      <button
        onClick={() => {
          accountInfo();
        }}
      >
        account info
      </button>
      <hr />
      <button
        onClick={() => {
          contractInteract();
        }}
      >
        transact tron
      </button>
    </div>
  );
}

export default Apps;
