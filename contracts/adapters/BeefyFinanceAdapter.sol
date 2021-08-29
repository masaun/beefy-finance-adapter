// solhint-disable no-unused-vars
// SPDX-License-Identifier: agpl-3.0

pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

//  libraries
import { SafeMath } from "@openzeppelin/contracts/math/SafeMath.sol";

//  interfaces
import { IRewardPool } from "../interfaces/beefy.finance/IRewardPool.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { IAdapter } from "../interfaces/opty/defiAdapters/IAdapter.sol";
import { IAdapterHarvestReward } from "../interfaces/opty/defiAdapters/IAdapterHarvestReward.sol";
import { IAdapterStaking } from "../interfaces/opty/defiAdapters/IAdapterStaking.sol";
import { IUniswapV2Router02 } from "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";

/**
 * @title Adapter for beefy.finance protocol for Opty.fi
 * @dev Abstraction layer to beefy.finance's pools
 */

contract BeefyFinanceAdapter is IAdapter, IAdapterHarvestReward, IAdapterStaking {
    using SafeMath for uint256;
}
