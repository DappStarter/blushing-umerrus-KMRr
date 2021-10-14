require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remind pumpkin grace near outer trash'; 
let testAccounts = [
"0xdd42077eab9fc9696398908f712343faac7380ed3d1ebd05563805eada58ae1a",
"0xbe3d8fea8f831473affe17160a907f58bf989b635de7c9d87420ff84ecd431a0",
"0xfe373a14e41e3a2889e5a15af7e718073a22e85b04138c97732e6464af5cf3a4",
"0x82bffc65ec557374038486324452e75dedca894774647aab7428b8c6929cc061",
"0xf91ff4d8d34c8337616c102c955292c8bea8319203910092f0752a5ca4de4efb",
"0x21ac1f09a9f36e1ce8d0b8d0eb4dcec33f7c44ba3d0a0f185d45b175d06ea549",
"0xec9f229bf87b2758734e0baea77462b5f955c08ae6c95dc55f8a5ed668b11e72",
"0x698ea8bb71741f7ac3f82aeb6dc7059347b0dd2f86f3a6222b59d498787228fe",
"0xb5bd76761e7839165bfbf39ac10fe21dc24365b05e4724b484ddf6016d5aa006",
"0xa698d4d441c40775fd1f081fabf2f0aef748d8cd0bf72cfb6176460ff9e7bbdc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

