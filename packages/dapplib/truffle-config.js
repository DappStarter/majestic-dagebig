require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remain method guess climb olympic soup'; 
let testAccounts = [
"0xf7953ae9fca9af851f817dda3424d1217ee72bb9204055b5a292b35ec7cb534f",
"0x04f7bcef696e3e4ce71e0b0ce2dee988b36cb9ff97066bb1ebc89ca5b8387c22",
"0x03f4c3982790735440214c5ea54783c41cf6d9d2f5958c2ee5f341ddce4b3570",
"0x0b134d5e98dd1d22763c5439e5fa615f3e644746500c374e76cf6cbaeaf47796",
"0x18cc6b6af91b4400f6c20b006b6f57844eaf2789b8173397443b195127979b52",
"0x8bf07cf2abfe5940a3ca4b5395052dbc0d6c32f751cefb1332a84ca2cea1e9d9",
"0x73d2e8c356a42c392e05b6b13010823abf4b1cb657e624a8811d6e348fe8f77f",
"0x715242eaedbfb53a13240c01106809dead36c7b4256ea6d6b6829f0b55bae3a0",
"0x26a914ecc8772853ad4d3e2a31f4f04f5cead2f604760b17aaa0b5bef1f7e67f",
"0x1aabe0f643517afdc8aed3d67853df7f81ca2a5bbc7cfa7cd878a4117d34d261"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
