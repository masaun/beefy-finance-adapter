// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;

/**
 * @notice - Interface of the RewardPool.sol in the beefy.finance
 * @notice - (As a remarks) the RewardPool.sol inherit the LPTokenWrapper
 */
interface IRewardPool {
    function updateReward(address account) external;

    function lastTimeRewardApplicable() external;

    function rewardPerToken() external;

    function earned(address account) external;

    // @notice - stake visibility is public as overriding LPTokenWrapper's stake() function
    function stake(uint256 amount) external;

    // @notice - withdraw visibility is public as overriding LPTokenWrapper's withdraw() function
    function withdraw(uint256 amount) external;

    function exit() external;

    function getReward() external;

    // @notice - notifyRewardAmount visibility is public as overriding IRewardDistributionRecipient's notifyRewardAmount() function
    function notifyRewardAmount(uint256 reward) external;

    //-------------------------------------------------------
    // Methods of the inherited-contract (LPTokenWrapper.sol)
    //-------------------------------------------------------
    function totalSupply() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);
}
