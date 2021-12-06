/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle");

const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/N96Gc0S5rO5jUMBh-BRyedrMFgNfwUqe",
      accounts: [privateKey],
    },
    mainnet: {
      url: "https://polygon-mainnet.infura.io/v3/a3215e5799f2462c80c17402290f9253",
    },
  },
  solidity: "0.8.4",
};
