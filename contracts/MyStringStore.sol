
//pragma solidity ^0.5.0 ;
pragma solidity >=0.4.22 <0.8.0;

contract MyStringStore {
  string public myString = "Hello World";

  function set(string memory x) public {
    myString = x;
  }
}
