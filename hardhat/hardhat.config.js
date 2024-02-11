require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    sepolia: {
      url: ' https://eth-sepolia.g.alchemy.com/v2/75vXUCKVizkPGwZVrWCs3H4BZ_oCP4GM',
      chainId: 11155111,
      accounts:[process.env.PRIVATE_KEY]
    }
  }
};

