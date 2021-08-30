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

    // @notice - stake visibility is public as overriding LPTokenWrapper's stake() function
    function stake(uint256 amount) external;

    // @notice - stake visibility is public as overriding LPTokenWrapper's withdraw() function
    function withdraw(uint256 amount) external;

    function exit() external;

    function getReward() external;

    function notifyRewardAmount(uint256 reward) external;

    //-------------------------------------------------------
    // Methods of the inherited-contract (LPTokenWrapper.sol)
    //-------------------------------------------------------
    function totalSupply() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);
}
