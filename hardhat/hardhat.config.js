require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    sepolia: {
      url: ' https://eth-sepolia.g.alchemy.com/v2/75vXUCKVizkPGwZVrWCs3H4BZ_oCP4GM',
      chainId: 11155111,
      accounts:["8b27a704651b555feb72ecf67ee1a841af4e7a903b3782f8a2eb812647eaabfd"]
    }
  }
};
