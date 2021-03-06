pragma solidity ^0.5.0;

import "../openzeppelin-solidity/v2.5.1/contracts/math/SafeMath.sol";
import "../openzeppelin-solidity/v2.5.1/contracts/token/ERC20/SafeERC20.sol";
import "../openzeppelin-solidity/v2.5.1/contracts/token/ERC20/IERC20.sol";

// import "@openzeppelin/contracts/math/SafeMath.sol";
// import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LPTokenWrapper {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    // @notice - Token address of the BIFI Governance Token will be assigned as an argument value of IERC20() below.
    IERC20 public y = IERC20(0xFbdd194376de19a88118e84E279b977f165d01b8); // [Note]: BIFI token address on Polygon mainnet
    //IERC20 public y = IERC20(0x0000000000000000000000000000000000000000);

    uint256 private _totalSupply;
    mapping(address => uint256) private _balances;

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) public view returns (uint256) {
        return _balances[account];
    }

    function stake(uint256 amount) public {
        _totalSupply = _totalSupply.add(amount);
        _balances[msg.sender] = _balances[msg.sender].add(amount);
        y.safeTransferFrom(msg.sender, address(this), amount);
    }

    function withdraw(uint256 amount) public {
        _totalSupply = _totalSupply.sub(amount);
        _balances[msg.sender] = _balances[msg.sender].sub(amount);
        y.safeTransfer(msg.sender, amount);
    }
}
