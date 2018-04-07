const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');

let secrets;
let mnemonic = '';

if (fs.existsSync('secrets.json')) {
  secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'));
  ({ mnemonic } = secrets);
}

module.exports = {
  networks: {
    mainnet: {
      provider: new HDWalletProvider(mnemonic, 'https://mainnet.infura.io'),
      network_id: '1',
      gas: 4500000,
      gasPrice: 10000000000,
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io'),
      network_id: '*',
      gas: 4500000,
      gasPrice: 25000000000,
    },
    kovan: {
      provider: new HDWalletProvider(mnemonic, 'https://kovan.infura.io'),
      network_id: '*',
      gas: 7992189,
      gasPrice: 25000000000,
    },
    dev: {
      host: 'localhost',
      network_id: '*',
      port: 8545,
      gas: 0xfffffffffff,
      gasPrice: 0x01,
      from: '0x00a329c0648769a73afac7f9381e08fb43dbea72',
    },
    // config for solidity-coverage
    coverage: {
      host: 'localhost',
      network_id: '*',
      port: 7545, // <-- If you change this, also set the port option in .solcover.js.
      gas: 0xfffffffffff, // <-- Use this high gas value
      gasPrice: 0x01, // <-- Use this low gas price
    },
  },
};
