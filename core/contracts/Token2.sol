pragma solidity =0.5.16;

import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token2 is ERC20, ERC20Detailed {
    constructor() public ERC20Detailed("Token2", "TK2", 18) {}
}
