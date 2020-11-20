
const MyStringStore = artifacts.require("MyStringStore");
const AttributionSplitter = artifacts.require("AttributionSplitter");

module.exports = function( deployer, network, accounts ){
  deployer.deploy(MyStringStore);
  deployer.deploy(
  AttributionSplitter,
    [ accounts[2], accounts[3], accounts[4] ],
    [ 5,3,4 ],
    "hola"
  );
};



// module.exports = function( deployer, network, accounts){
//   deployer.deploy( 
//    Bank,
//    { from: accounts[0],
//      value: web3.utils.toWei( "30", "ether" ) }
//   ).then( ( bank )=>{
//     return deployer.deploy(
//       Client, bank.address, { from:accounts[1] }
//     );
//   });
// };
