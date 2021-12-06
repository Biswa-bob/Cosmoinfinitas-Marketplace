/* hardhat.config.js */
require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

// const fs = require("fs");
// const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.WALLET_PRIVATE_KEY],
    },
  },
  solidity: "0.8.4",
};
