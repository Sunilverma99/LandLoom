async function main() {
    const initialOwner="0x957b35128F56dF9E628CfdC6A23d02f3e825afB2"
    const MyNFT = await ethers.getContractFactory("MyNFT");
  
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy(initialOwner);
    console.log("Contract deployed to address:", myNFT.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  //0x271D2BeB5db7266Cd34D512C8F8c06AD247fab4a