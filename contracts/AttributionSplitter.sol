//SPDX-License-Identifier: Unlicense
pragma solidity ^0.6.0;

// import "hardhat/console.sol";

// Import PaymentSplitter from the OpenZeppelin Contracts library
import "@openzeppelin/contracts/payment/PaymentSplitter.sol";

// Make AttributionSplitter inherit from
// the PaymentSplitter contract
//contract AttributionSplitter is PaymentSplitter{
//
//    constructor(
//      address[] memory payees,
//      uint256[] memory shares  
//      // AGREGAR RERENCIA AL ATTRIBUTABLE
//    ) PaymentSplitter(payees, shares) public payable{
//
//    }
//
//}
//contract AttributionSplitter{

contract AttributionSplitter is PaymentSplitter{
  string public attr = "str";
  string public addr = toAsciiString(address(this));

  constructor(
    address[] memory payees,
    uint256[] memory shares,
    string memory s
  ) PaymentSplitter( payees, shares ) public payable{
    attr = s;
    //for (uint256 i = 0; i < payees.length; i++) {
    //    _addPayee(payees[i], shares[i]);
    //}
  }


  function set(string memory x) public {
    attr = x;
  }

  function toAsciiString(address x) private returns (string memory ) {
      bytes memory s = new bytes(40);
      for (uint i = 0; i < 20; i++) {
          byte b = byte(uint8(uint(x) / (2**(8*(19 - i)))));
          byte hi = byte(uint8(b) / 16);
          byte lo = byte(uint8(b) - 16 * uint8(hi));
          s[2*i] = char(hi);
          s[2*i+1] = char(lo);            
      }
      return string(s);
  }
  
  function char(byte b)  private returns (byte c) {
      if (uint8(b) < 10) return byte(uint8(b) + 0x30);
      else return byte(uint8(b) + 0x57);
  }
}


