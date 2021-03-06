/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config()
require("@nomiclabs/hardhat-ethers")

const { 
    POLYGON_MAINNET_API_URL,
    POLYGON_MAINNET_PRIVATE_KEY,
} = process.env;

module.exports = {
    solidity: {
        version: "0.8.1",
        settings: {
            optimizer: {
                enabled: true,
                runs: 999,
            },
        },
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: { },
        polygon_mainnet: {
            url: POLYGON_MAINNET_API_URL,
            accounts: [`0x${POLYGON_MAINNET_PRIVATE_KEY}`]
        }
    },
}
