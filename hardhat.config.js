/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
require('@nomiclabs/hardhat-ethers');

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.11",
  defaultNetwork: "ganache",
  networks: {
     hardhat: {},
     ganache: {
        url: API_URL,
        accounts: [PRIVATE_KEY],
     }
  },
};
