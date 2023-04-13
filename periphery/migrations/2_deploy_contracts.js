const Router = artifacts.require("HeroswapRouter.sol");
const WBNB = artifacts.require("WBNB.sol");

module.exports = async function(deployer, network ){
    // let bnb;
    const FACTORY_ADDRESS = '0x5df09Fbc6C7ae7546A9A5B9Ed06Ce030776adDda'; 
    const WBNB_ADDRESS = '0x213afad1A3d9d3c6245a7487632324420Bf54463';

    // if(network === 'mainnet'){
    //     weth = await WBNB.at('0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c');
    // }else{
    //     await deployer.deploy(WBNB);
    //     wbnb = await WBNB.deployed();
    // }

    await deployer.deploy(Router, FACTORY_ADDRESS, WBNB_ADDRESS);

};