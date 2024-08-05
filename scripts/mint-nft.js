require('dotenv').config();
const API_URL="https://eth-sepolia.g.alchemy.com/v2/3CCw6ZCYuOR9AROnGhajCveCXm28tjdV";
const {createAlchemyWeb3}=require("@alch/alchemy-web3");
const web3=createAlchemyWeb3(API_URL);
const PUBLIC_KEY="0x957b35128F56dF9E628CfdC6A23d02f3e825afB2";
const PRIVATE_KEY="93cb4503d0b70e2cca9f1d9046d6fb2a3eb7be464dbf1ffce0f5c600a51e530c";
const Contract=require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

// console.log(JSON.stringify(contract.abi));

const ContractAddress="0xB0B9172175c7D1168a2fAA28Fdf7F6c2C70a827E";

const nftContract=new web3.eth.Contract(Contract.abi,ContractAddress);  //to create instance of our contract


//create transaction
async function mintNFT(tokenURI){
    const nonce=await web3.eth.getTransactionCount(PUBLIC_KEY,"latest");
    const tx={
        'from':PUBLIC_KEY,
        'to':ContractAddress,
        'nonce':nonce,
        'gas':500000,
        'data':nftContract.methods.safeMint(PUBLIC_KEY,tokenURI).encodeABI(),
    };
    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    signPromise
      .then((signedTx) => {
        web3.eth.sendSignedTransaction(
          signedTx.rawTransaction,
          function (err, hash) {
            if (!err) {
              console.log(
                "The hash of your transaction is: ",
                hash,
                "\nCheck Alchemy's Mempool to view the status of your transaction!"
              );
            } else {
              console.log(
                "Something went wrong when submitting your transaction:",
                err
              );
            }
          }
        );
      })
      .catch((err) => {
        console.log(" Promise failed:", err);
      });
  
    }
mintNFT("https://sapphire-familiar-jellyfish-354.mypinata.cloud/ipfs/QmSNeby3NztkYHHGnyXnBB26Kbf9iZSkcJk3fH6gYbBnkn");


