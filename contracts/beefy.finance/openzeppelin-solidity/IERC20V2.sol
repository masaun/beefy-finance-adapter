pragma solidity ^0.5.0;

import { IERC20 } from "./v2.5.1/contracts/token/ERC20/IERC20.sol";

/**
 * @notice - IERC20V2.sol is the contract that IERC20.sol of openzeppelin/contracts v2.5.1 is inherited.
 * @notice - The reason why use this contract is in order to avoid duplicate contract name (artifact) with IERC20.sol of openzeppelin/contracts v3.4.0
 */
contract IERC20V2 is IERC20 {

}
