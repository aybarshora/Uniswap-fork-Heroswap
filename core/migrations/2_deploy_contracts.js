const Factory = artifacts.require("HeroswapFactory.sol");
const Token1 = artifacts.require("Token1.sol");
const Token2 = artifacts.require("Token2.sol");


module.exports = async function(deployer, network, addresses){
   
    let token1Address, token2Address;
    if(network === 'mainnet') {
        token1Address = '';
        token2Address = '';
    }else{
        
        await deployer.deploy(Token2);
      
        const token2 = await Token2.deployed();
        
        token1Address = token1.address;

    }
    await factory.createPair('0xA15CaC3ed00F93327F07BE5B09720D1ecf83721C', token2Address);
};