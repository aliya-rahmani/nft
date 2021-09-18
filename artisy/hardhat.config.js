require("@nomiclabs/hardhat-waffle")
const fs = require('fs')
const projectId = "54e42dcd6c6c4a9e9a77edd67bf2a628"

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://mainnet.infura.io/v3/${projectId}`      
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}