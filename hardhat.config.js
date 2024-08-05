/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/3CCw6ZCYuOR9AROnGhajCveCXm28tjdV",
      accounts: ['0x93cb4503d0b70e2cca9f1d9046d6fb2a3eb7be464dbf1ffce0f5c600a51e530c'],
    },
  },
};