// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;

/**
 * @notice - Interface of the RewardPool.sol in the beefy.finance
 */
interface IRewardPool {
    function updateReward(address account) external;

    function lastTimeRewardApplicable() external;

    function rewardPerToken() external;

    function earned(address account) external;

    function stake(uint256 amount) external;

    function withdraw(uint256 amount) external;

    function exit() external;

    function getReward() external;

    function notifyRewardAmount(uint256 reward) external;
}
